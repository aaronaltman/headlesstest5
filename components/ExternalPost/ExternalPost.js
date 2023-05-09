import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gql, useQuery } from '@apollo/client';

import OtherApolloClient from '/OtherApolloClient.js';

const GET_EXTERNAL_POST = gql`
  query GetExternalPost($slug: ID!) {
    post(id: $slug, idType: URI) {
      id
      title
      date
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

const ExternalPost = ({ slug }) => {
    const { loading, error, data } = useQuery(GET_EXTERNAL_POST, {
        variables: { slug },
        client: OtherApolloClient,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { id, uri, title, featuredImage } = data.post;

    return (
        <div key={id}>
            <h2>
                <Link href={`/external-blog${uri}`}>
                    <a>{title}</a>
                </Link>
            </h2>
            {featuredImage && (
                <Image src={featuredImage.node.sourceUrl} alt={title} width={335} height={235} />
            )}
        </div>
    );
};

export default ExternalPost;
