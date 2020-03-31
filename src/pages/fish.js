import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FishTable from '../components/FishTable';

const FishPage = () => (
  <Layout>
    <SEO title="Fish" />
    <h1>Fish</h1>
    <FishTable />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default FishPage;
