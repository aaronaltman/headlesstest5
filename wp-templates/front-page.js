import * as MENUS from 'constants/menus';

import { useQuery, gql } from '@apollo/client';
import { FaArrowRight } from 'react-icons/fa';
import styles from 'styles/pages/_Home.module.scss';

import AaronHero from '/components/AaronHero/AaronHero.js';

import {
  Main,
  Button,
  Heading,
  CTA,
  NavigationMenu,
  SEO,
  Header,
  Posts,
  Testimonials,
  Albums,
  AaronTopBar,
  AaronHero2,
    AaronFooter,
} from 'components';
import { BlogInfoFragment } from 'fragments/GeneralSettings';

const postsPerPage = 3;

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
            <div className={styles.actions}>
              <Button styleType="secondary" href="/contact-us">
                GET STARTED
              </Button>
              <Button styleType="primary" href="/about">
                LEARN MORE
              </Button>
            </div>
            <section className={styles.posts}>
              <Heading className={styles.heading} level="h2">
                Latest Posts
              </Heading>
              <Posts posts={data.posts?.nodes} id="posts-list" />
            </section>
          </section>
          <section>
            <Albums />
          </section>
          <section>
            <AaronHero2 />
          </section>
          <section className="cta">
            <CTA
              Button={() => (
                <Button href="/posts">
                  Get Started <FaArrowRight style={{ marginLeft: `1rem` }} />
                </Button>
              )}
            >
              <span>
                Learn about Core Web Vitals and how Atlas can help you reach
                your most demanding speed and user experience requirements.
              </span>
            </CTA>
          </section>
          <section className="cta">
            <CTA
              Button={() => (
                <Button href="/posts">
                  Get Started <FaArrowRight style={{ marginLeft: `1rem` }} />
                </Button>
              )}
            >
              <span>
                Learn about Core Web Vitals and how Atlas can help you reach
                your most demanding speed and user experience requirements.
              </span>
            </CTA>
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
