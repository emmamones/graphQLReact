import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';

const store = new ApolloClient({})

const Root = () => {

  return (
    <ApolloProvider client={store}> 
      <SongList/>
    </ApolloProvider>
  )
};

// the store doenst know that the react app exist.
// the provider takes data from the store and injected into our React application
// the provider its the integration point.

// make a SOngListComponent
// display the component on the appList
// add graphQLQuery on the component and display data.
// identify the data required
// write query in graphiql and in the CompositionEvent
// Bond query + CompositionEvent
// access data

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
