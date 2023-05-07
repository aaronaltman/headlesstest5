import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';

import OtherApolloClient from '/OtherApolloClient.js';

import appConfig from 'app.config';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const GET_POSTS_BY_ID = gql`
  query GetPostsById($ids: [ID!]!) {
    posts(where: { in: $ids }) {
      nodes {
        id
        title
        featuredImage {
          node {
            link
          }
        }
      }
    }
  }
`;

function AaronPosts({ intro, id, ID1, ID2, ID3, ID4, ID5, ID6 }) {
    const postIds = [ID1, ID2, ID3, ID4, ID5, ID6];

    const postsQuery = useQuery(GET_POSTS_BY_ID, {
        variables: { ids: postIds },
        client: OtherApolloClient,
    });

    const { data, loading, error } = postsQuery;
    const posts = data?.posts?.nodes;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <Box component="section" {...(id && { id: id })}>
            {intro && <Typography paragraph>{intro}</Typography>}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {posts?.map((post, i) => {
                    let image = post?.featuredImage?.node;

                    if (!image && appConfig.archiveDisplayFeaturedImage) {
                        image = {
                            sourceUrl: '/static/banner.jpeg',
                            altText: 'Downtown Austin, Texas skyline',
                        };
                    }

                    return (
                        <Box key={post.id} sx={{ width: 353 }}>
                            <Card elevation={1}>
                                <Link href={post?.uri ?? '#'} passHref>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            sx={{ height: 233 }}
                                            image={image?.link}
                                            alt={post.title}
                                            width={353}
                                            height={233}
                                            priority={i < appConfig.postsAboveTheFold}
                                            loading="lazy"
                                        />
                                    </CardActionArea>
                                </Link>
                                <CardContent>
                                    <Typography variant="h5" component="h4" sx={{ fontSize: '1.2rem' }}>
                                        <Link href={post?.uri ?? '#'} passHref>
                                            <a>{post.title}</a>
                                        </Link>
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                                        {post.date}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    );
                })}
                {posts && posts?.length === 0 && (
                    <Typography paragraph>No posts found.</Typography>
                )}
            </Box>
        </Box>
    );
}
export default AaronPosts;
