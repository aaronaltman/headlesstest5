import React from 'react';
import { gql } from '@apollo/client';
import Link from 'next/link';
import { Heading, FeaturedImage } from 'components';
import appConfig from 'app.config';
import useFocusFirstNewResult from 'hooks/useFocusFirstNewResult';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

function AaronPosts({ posts, intro, id }) {
    const { firstNewResultRef, firstNewResultIndex } = useFocusFirstNewResult(posts);

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
                            <Card elevation={1}> {/* Change the elevation value here */}
                                <Link href={post?.uri ?? '#'} passHref>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            sx={{ height: 233 }}
                                            image={image?.sourceUrl}
                                            alt={image?.altText}
                                            width={353}
                                            height={233}
                                            priority={i < appConfig.postsAboveTheFold}
                                            loading="lazy"
                                        />
                                    </CardActionArea>
                                </Link>
                                <CardContent>
                                    <Heading level="h4" sx={{ fontSize: '1.2rem' }}> {/* Change the fontSize here */}
                                        <Link href={post?.uri ?? '#'} passHref>
                                            <a ref={isFirstNewResult ? firstNewResultRef : null}>
                                                {post.title}
                                            </a>
                                        </Link>
                                    </Heading>
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

AaronPosts.fragments = {
    entry: gql`
    ${FeaturedImage.fragments.entry}
    fragment PostsItemFragment on Post {
      id
      date
      uri
      title
      author {
        node {
          name
        }
      }
      ...FeaturedImageFragment
    }
  `,
};

export default AaronPosts;
