import React from 'react';
import { useQuery,gql, } from '@apollo/client';

import ExternalPost from '/components/ExternalPost/ExternalPost.js';
import OtherApolloClient  from '/OtherApolloClient.js';

const GET_EXTERNAL_POSTS = gql`
  query GetExternalPosts {
    posts {
      edges {
        node {
          id
          title  
          date
          featuredImage {
            node {
              sourceUrl 
            }
          }
          uri
        }
      }
    }
  }
`;


const ExternalPosts = () => {
    const { loading, error, data } = useQuery(GET_EXTERNAL_POSTS, {
        client: OtherApolloClient,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {data.posts.edges.map(({ node: post }) => (
                <ExternalPost key={post.id} post={post} />
            ))}
        </div>
    );
};

export default ExternalPosts;
