import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/menu';
import '../mystyles.scss';

const Div = styled.div`
  position: relative;
  top: 150px;
  left: 6%;
  width: 60%;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  & p {
    text-align: left;
    font-size: 24px;
    font-weight: 200;
  }
  & span {
    text-decoration: underline;
  }
`;

const Anchor = styled.a`
  text-decoration: underline;
`;

const ProjectsPage = () => (
  <React.Fragment>
    <Layout>
      <Div className="columns is-desktop">
        <div className="column is-5">
          <Menu />
        </div>
        <div className="column is-12">
          <p>Here's a bunch of projects.</p>
          <a href="https://github.com/wbonneville/spacewalker">
            <span>link to repo:</span> a space trading game built with React and
            Redux
          </a>
          <br />
          <Anchor href="https://spacewalkerproject.netlify.com/">
            link to site
          </Anchor>
        </div>
      </Div>
    </Layout>
  </React.Fragment>
);

export default ProjectsPage;
