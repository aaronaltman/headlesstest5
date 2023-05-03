import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://bpheadlesst962.wpengine.com/graphql', // Replace with your GraphQL server URL
    cache: new InMemoryCache(),
});

export default client;
