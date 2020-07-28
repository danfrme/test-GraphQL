import React from 'react';
import ProductsRequest from './components/ProductsRequest';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";



const client = new ApolloClient({
  uri: 'https://y3db9uqb67.execute-api.sa-east-1.amazonaws.com/dev/graphql'
});


function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <header>
        <p>My Test</p>
      </header>


      <ProductsRequest />
    </div>
    </ApolloProvider>
  );
}

export default App;
