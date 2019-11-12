import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/menu';
const Div = styled.div`
  padding: 10%;
  & p {
    text-align: left;
    font-size: 18px;
  }
`;

const ProjectsPage = () => (
  <React.Fragment>
    <Layout>
      <Div className="row ">
        <div className="col-xs-2">
          <Menu />
        </div>
        <div className="col-xs-6">
          <h1>Here's a bunch of projects</h1>
        </div>
      </Div>
    </Layout>
  </React.Fragment>
);

export default ProjectsPage;
