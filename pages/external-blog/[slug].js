import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';

import ExternalPost from '../../components/ExternalPost/ExternalPost';

import otherApolloClient from '/OtherApolloClient.js'; // Import the externalClient you created earlier

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
      categories {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;

const ExternalPostPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    const { loading, error, data } = useQuery(GET_EXTERNAL_POST, {
        variables: { slug },
        client: otherApolloClient, // Use the externalClient you created earlier
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return <ExternalPost post={data.post} />;
};

export default ExternalPostPage;
