import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <span role="img" aria-label="fish">
        🐟
      </span>{' '}
      <Link to="/fish/">Fish</Link>
    </div>
  </Layout>
);

export default IndexPage;
