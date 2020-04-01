import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BugTable from '../components/BugTable';

const BugPage = () => (
  <Layout>
    <SEO title="Bugs" />
    <h1 className="text-center">
      <span role="img" aria-label="bugs">
        🦋
      </span>
      &nbsp;Bugs
    </h1>
    <BugTable />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default BugPage;
