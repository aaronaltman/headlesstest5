import * as MENUS from 'constants/menus';

import { useQuery, gql } from '@apollo/client';
import styles from 'styles/pages/_Home.module.scss';

import AaronHero from '/components/AaronHero/AaronHero.js';

import {
  Main,
  Heading,
  NavigationMenu,
  SEO,
  Header,
  Posts,
  Testimonials,
  AaronTopBar,
  AaronFooter,
  AaronPosts,
} from 'components';
import { BlogInfoFragment } from 'fragments/GeneralSettings';

const postsPerPage = 6;

export default function Component() {
  const { data, loading } = useQuery(Component.query, {
    variables: Component.variables(),
  });
  if (loading) {
    return null;
  }

  const { title: siteTitle, description: siteDescription } =
    data?.generalSettings;
  const primaryMenu = data?.headerMenuItems?.nodes ?? [];


  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />
<AaronTopBar />

      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      <section>
      <AaronHero />
      </section>
      <Main className={styles.home}>
        <div className="container">
          <section className="hero text-center" style={{ marginTop: '40px'}} >
            <Heading className={styles.heading} level="h1">
              Car Care
            </Heading>
            <h2>Made Simple</h2>
            <p className={styles.description}>
              Looking for objective advice, expert info and helpful tools to answer your car questions?
              {' '}
            </p>
            <p>Turn to your Car FIXD experts.</p>

            <section>
              <AaronPosts />
            </section>
          </section>
        </div>
      </Main>
        <AaronFooter />
    </>
  );
}

Component.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
    first: postsPerPage,
  };
};

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  ${Posts.fragments.entry}
  ${Testimonials.fragments.entry}
  query GetPageData(
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
    $first: Int
  ) {
    posts(first: $first) {
      nodes {
        ...PostsItemFragment
      }
    }
    testimonials {
      nodes {
        ...TestimonialsFragment
      }
    }
    generalSettings {
      ...BlogInfoFragment
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;
