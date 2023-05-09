import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Image from 'next/image';

import otherApolloClient from '/OtherApolloClient.js';

const DOMAIN = 'https://fixdappspeed2.mystagingwebsite.com';

const GET_POSTS = gql`
query getPosts($after: String) {
  posts(first: 20, after: $after) {
    edges {
      node {
        id
        date
        featuredImage {
          node {
            id
            uri
          }
        }
        slug
        title
        excerpt
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}`;

const NewPosts = () => {
    const { loading, error, data, fetchMore } = useQuery(GET_POSTS, { client: otherApolloClient });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const loadMorePosts = () => {
        if (data.posts.pageInfo.hasNextPage) {
            fetchMore({
                variables: {
                    after: data.posts.pageInfo.endCursor,
                },
            });
        }
    };

    return (
        <div>
            {data.posts.edges.map(({ node }) => (
                <div key={node.id}>
                    <h2>{node.title}</h2>
                    {node.featuredImage && node.featuredImage.node && node.featuredImage.node.uri && (
                        <Image src={`${DOMAIN}${node.featuredImage.node.uri}`} alt={node.title} width={353} height={233} />
                    )}
                    {node.excerpt && <p>{node.excerpt}</p>}
                </div>
            ))}
            {data.posts.pageInfo.hasNextPage && (
                <button onClick={loadMorePosts}>Load more</button>
            )}
        </div>
    );
};

export default NewPosts;
