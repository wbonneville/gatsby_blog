import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/menu';

const Div = styled.div`
  position: fixed;
  top: 150px;
  left: 300px;
  width: 50%;
  padding-right: 10%;
  & p {
    text-align: left;
    font-size: 18px;
  }
`;

const ProjectsPage = () => (
  <React.Fragment>
    <Layout>
      <Div>
        <div>
          <p>Here's a bunch of projects</p>
        </div>
      </Div>
    </Layout>
  </React.Fragment>
);

export default ProjectsPage;
