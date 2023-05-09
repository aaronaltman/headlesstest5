import { gql } from '@apollo/client';

import otherApolloClient from '/OtherApolloClient.js';
import ExternalPost from '/components/ExternalPost/ExternalPost.js';

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

const GET_ALL_SLUGS = gql`
  query GetAllSlugs {
    posts {
      edges {
        node {
          uri
        }
      }
    }
  }
`;

export default function ExternalBlogPost({ post }) {
    return <ExternalPost post={post} />;
};

export async function getStaticPaths() {
    const { data } = await otherApolloClient.query({
        query: GET_ALL_SLUGS,
    });

    const paths = data.posts.edges.map(({ node }) => ({
        params: { slug: node.uri },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { data } = await otherApolloClient.query({
        query: GET_EXTERNAL_POST,
        variables: { slug: params.slug },
    });

    return {
        props: {
            post: data.post,
        },
    };
}
