import React from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react/hooks';
import Link from 'next/link';
import appConfig from 'app.config';
import useFocusFirstNewResult from 'hooks/useFocusFirstNewResult';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, CircularProgress } from '@mui/material';

import OtherApolloClient from '/OtherApolloClient.js';

const GET_POSTS_BY_CATEGORY = gql`
  query GetPostsByCategory($categoryId: ID!, $first: Int) {
    category(id: $categoryId) {
      name
      posts(first: $first) {
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
    const { data, loading, error } = useQuery(GET_POSTS_BY_CATEGORY, {
        variables: { categoryId, first: 6 },
        client: OtherApolloClient, // Use the OtherApolloClient here
    });

    const { firstNewResultRef, firstNewResultIndex } = useFocusFirstNewResult(data?.category?.posts?.nodes);

    if (loading) return <CircularProgress />;
    if (error) return <Typography>Error: {error.message}</Typography>;

    const posts = data?.category?.posts?.nodes;

    return (
        <Box component="section" {...(id && { id })}>
            {intro && <Typography paragraph>{intro}</Typography>}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {posts?.map((post, i) => {
                    const isFirstNewResult = i === firstNewResultIndex;
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
                                    {/* Replace Heading component with Typography component */}
                                    <Typography variant="h5" component="h4" sx={{ fontSize: '1.2rem' }}>
                                        <Link href={post?.uri ?? '#'} passHref>
                                            <a ref={isFirstNewResult ? firstNewResultRef : null}>
                                                {post.title}
                                            </a>
                                        </Link>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    );
                })}
                {posts && posts?.length < 1 && <Typography paragraph>No posts found.</Typography>}
            </Box>
        </Box>
    );
}

export default AaronPosts;
