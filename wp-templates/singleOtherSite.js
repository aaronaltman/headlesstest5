import { gql, useQuery } from '@apollo/client';

import otherApolloClient from '/OtherApolloClient.js';

import {
    Header,
    Footer,
    Main,
    EntryHeader,
    ContentWrapper,
    SEO,
    TaxonomyTerms,
    AaronTopBar,
} from 'components';
import { pageTitle } from 'utilities';

export default function SingleOtherSite(props) {
    const postId = props.databaseId;
    const { loading, error, data } = useQuery(SingleOtherSite.query, {
        variables: { postId },
        client: otherApolloClient,
    });

    if (loading) return <>Loading...</>;
    if (error) return <>Error: {error.message}</>;

    const { title, content, featuredImage, date, author } = data.otherSite.post;

    return (
        <>
            <SEO
                title={pageTitle(
                    props?.data?.generalSettings,
                    title,
                    props?.data?.generalSettings?.title
                )}
                description={content}
                imageUrl={featuredImage?.sourceUrl}
            />
            <section>
                <AaronTopBar />
            </section>
            <Header />
            <Main>
                <>
                    <EntryHeader
                        title={title}
                        image={featuredImage}
                        date={date}
                        author={author?.name}
                    />
                    <div className="container">
                        <ContentWrapper content={content}>
                            <TaxonomyTerms post={data.otherSite.post} taxonomy={'categories'} />
                            <TaxonomyTerms post={data.otherSite.post} taxonomy={'tags'} />
                        </ContentWrapper>
                    </div>
                </>
            </Main>
            <Footer />
        </>
    );
}

SingleOtherSite.query = gql`
  query GetOtherSitePost($postId: ID!) {
    otherSite {
      postBy(id: $postId) {
        title
        content
        date
        author {
          name
        }
        tags {
          edges {
            node {
              name
              uri
            }
          }
        }
        categories {
          edges {
            node {
              name
              uri
            }
          }
        }
        featuredImage {
          sourceUrl
        }
      }
    }
  }
`;

SingleOtherSite.variables = ({ databaseId }, ctx) => {
    return {
        postId: databaseId,
        asPreview: ctx?.asPreview,
    };
};
