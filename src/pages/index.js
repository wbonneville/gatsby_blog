import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Menu from '../components/menu';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="row center-xs">
      <div className="col-xs-6">
        <h2>Hello.</h2>
        <p>This is my first test site</p>
      </div>
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
