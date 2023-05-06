// other-apollo-client.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
    uri: 'https://fixdappspeed2.mystagingwebsite.com/graphql',
});

const otherApolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export default otherApolloClient;
