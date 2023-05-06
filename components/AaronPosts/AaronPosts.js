import React from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react/hooks';
import Link from 'next/link';

import OtherApolloClient from '/OtherApolloClient.js';

import appConfig from 'app.config';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const GET_POSTS_BY_TITLE = gql`
  query GetPostsByTitle($title: String!) {
    posts(where: {title: {$title}}) {
      nodes {
        id
        title
        content
        date
        featuredImage {
          node {
            link
          }
        }
      }
    }
  }
`;

const titles = [  "The Most Common Diagnostic Trouble Codes | DTC Directory",  "P0300 Code Explained: Causes, Symptoms & How To Fix It",  "P0420 Code Explained: Catalyst System Efficiency Below Threshold",  "P0430 – Meaning, Causes, Symptoms, & Fixes",  "P0455 Engine Code Explained: Causes, Symptoms & How To Fix It",  "P0171 – Meaning, Causes, Symptoms, & Fixes",];

function AaronPosts({ intro, id }) {
    const postsQuery = useQuery(GET_POSTS_BY_TITLE, {
        variables: { title: titles[0] },
        client: OtherApolloClient,
    });

    const { data, loading, error } = postsQuery;
    const posts = data?.posts?.nodes;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

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
                {posts && posts?.length < 1 && (
                    <Typography paragraph>No posts found.</Typography>
                )}
            </Box>
        </Box>
    );
}
    export default AaronPosts;


