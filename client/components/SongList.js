import React, { Component } from 'react';
import gql from "graphql-tag"
import { graphql } from "react-apollo"

class SongList extends Component {

    render() {
        console.log(this.props)

        if (!this.props.data.songs)
            return (<div>Loading..</div>);


        return (
            <ul className="collection">
                List of Songs Component
               {
                    this.props.data.songs.map(song => {
                       return <li key={song.id} className="collection-item">{song.title}</li>
                    })
                }
            </ul>
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