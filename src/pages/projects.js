import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/menu';
import '../mystyles.scss';

const Div = styled.div`
  position: relative;
  top: 170px;
  left: 10%;
  width: 50%;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  & p {
    text-align: left;
    font-size: 24px;
    font-weight: 200;
  }
  & span {
    color: #366bd3;
  }
`;

const ProjectsPage = () => (
  <React.Fragment>
    <Layout>
      <Div className="columns is-desktop">
        <div className="column is-5">
          <Menu />
        </div>
        <div className="column is-12">
          <p>Here's a bunch of projects</p>
        </div>
      </Div>
    </Layout>
  </React.Fragment>
);

export default ProjectsPage;
