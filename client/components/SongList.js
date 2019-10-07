import React, { Component } from 'react';
import gql from "graphql-tag"
import { graphql } from "react-apollo"
import { Link } from 'react-router'

class SongList extends Component {

    render() {

        if (!this.props.data.songs)
            return (<div>Loading..</div>);


        return (
            <div>
                <ul className="collection">
                    List of Songs Component
                   {
                        this.props.data.songs.map(song => {
                            return <li key={song.id} className="collection-item">{song.title}</li>
                        })
                    }
                </ul>
                <Link to="/songs/new" className="btn-floating btn-large red right"><i className="material-icons">add</i></Link>
            </div>
        );
    }
}
const query = gql`
{
    songs{
        id
        title
      }
}
`;


export default graphql(query)(SongList);