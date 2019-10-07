import React, { Component, useState } from 'react';
import gql from 'graphql-tag';
import { graphql } from "react-apollo"
import { Link, hashHistory } from 'react-router'
class SongCreate extends Component {

    constructor(props) {
        super(props);
        this.state = { title: '' };
    }

    saveSong(e) {
        e.preventDefault();

        this.props.mutate({
            variables: {
                title: this.state.title
            }
        }).then((result) => {
            console.log(result);
            if (result.data) {
                hashHistory.push('/')
            }
        }).catch((error) => {
            console.log(error);
        });
        // reach backend server to add a new Song
    };

    render() {

        return (
            <div>
                <Link to="/">Back to List</Link>
                <h3>Create a New Song</h3>
                <form onSubmit={this.saveSong.bind(this)} noValidate>
                    <label htmlFor="title">Song Title: </label>
                    <input id="title" type="text" onChange={event => this.setState({ title: event.target.value })} value={this.state.title} />
                    <input type="submit" value="create" />
                </form>
            </div>
        );
    }
}

const mutation = gql`
mutation AddSongMutation($title:String){
    addSong(title:$title){
        id
        title
      }
    }
`;



export default graphql(mutation)(SongCreate);