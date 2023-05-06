import React from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react/hooks';
import Link from 'next/link';

import OtherApolloClient from '/OtherApolloClient.js';

import appConfig from 'app.config';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const GET_POSTS_BY_CATEGORY = gql`
  query GetPostsByCategory($categoryId: ID!, $first: Int, $titles: [String]) {
    category(id: $categoryId) {
      name
      posts(first: $first, where: { title: $titles }) { 
        nodes {
          id
          date
          uri
          title
          featuredImage {
            node {
              mediaItemUrl
              altText
            }
          }
        }
      }
    }
  }
`;

function AaronPosts({ intro, id, categoryId }) {
    const titles = [
        "The Most Common Diagnostic Trouble Codes | DTC Directory",
        "P0300 Code Explained: Causes, Symptoms & How To Fix It",
        "P0420 Code Explained: Catalyst System Efficiency Below Threshold",
        "P0430 – Meaning, Causes, Symptoms, & Fixes",
        "P0455 Engine Code Explained: Causes, Symptoms & How To Fix It",
        "P0171 – Meaning, Causes, Symptoms, & Fixes",
    ];

    const { data, loading, error } = useQuery(GET_POSTS_BY_CATEGORY, {
        variables: { categoryId, first: 6, titles },
        client: OtherApolloClient,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const posts = data?.category?.posts?.nodes;

    return (
        <Box component="section" {...(id && { id })}>
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
                        <Box key={post.id ?? ''} id={`post-${post.id}`} sx={{ width: 353 }}>
                            <Card elevation={1}>
                                <Link href={post?.uri ?? '#'} passHref>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            sx={{ height: 233 }}
                                            image={image?.mediaItemUrl}
                                            alt={image?.altText}
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
                                            <a>
                                                {post.title}
                                            </a>
                                        </Link>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    );
                })}
                {posts && posts?.length < 1 && (
                    <Typography paragraph>No posts found.</Typography>
                )}
            </Box>
        </Box>
    );
}

export default AaronPosts;
