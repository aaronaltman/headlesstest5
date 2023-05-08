import React from 'react';
import { useQuery,gql, } from '@apollo/client';

import { otherApolloClient } from '/OtherApolloClient.js';
import ExternalPost from '/components/ExternalPost/ExternalPost.js';

const GET_EXTERNAL_POSTS = gql`
  query GetExternalPosts {
    posts {
      edges {
        node {
          id
          date
          featuredImage {
            node {
              id
            }
          }
          uri
          content
          categories {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
`;

const ExternalPosts = () => {
    const { loading, error, data } = useQuery(GET_EXTERNAL_POSTS, {
        client: otherApolloClient, // Use the externalClient you created earlier
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
