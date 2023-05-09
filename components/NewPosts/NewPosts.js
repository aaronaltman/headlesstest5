import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Button, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

import otherApolloClient from '/OtherApolloClient.js';

const DOMAIN = 'https://fixdappspeed2.mystagingwebsite.com';

const GET_POSTS = gql`
query getPosts($after: String) {
  posts(first: 30, after: $after) {
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
        <>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {data.posts.edges.map(({ node }) => (
                <Card key={node.id} sx={{ maxWidth: 345, m: 2 }}>
                    <Typography variant="h5">{node.title}</Typography>
                    {node.featuredImage && node.featuredImage.node && node.featuredImage.node.uri && (
                        <CardMedia component="img" image={`${DOMAIN}${node.featuredImage.node.uri}`} alt={node.title} />
                    )}
                    {node.excerpt && (
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">{node.excerpt}</Typography>
                        </CardContent>
                    )}
                </Card>
            ))}
            {data.posts.pageInfo.hasNextPage && (
                <Button variant="contained" color="primary" onClick={loadMorePosts} sx={{ m: 2 }}>
                    Load more
                </Button>
            )}
        </Box>
        </>
    );
};

export default NewPosts;
