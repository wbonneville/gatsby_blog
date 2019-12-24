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
    font-size: 20px;
    font-weight: 300;
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
          <p>Here are a few of my projects.</p>
          <a href="https://spacewalkerproject.netlify.com/">
            a WIP space trading game built with React and Redux
          </a>
          <br />
          <Anchor href="https://github.com/wbonneville/spacewalker">
            link to repo
          </Anchor>
          <br />
          <br />
          <a href="https://gallerypx.netlify.com/">
            a responsive gallery built with React that dynamically renders
            renders photos using data from a JSON file, or alternatively, any
            API
          </a>
          <br />
          <Anchor href="https://github.com/wbonneville/gallery">
            link to repo
          </Anchor>
          <br />
          <br />
          <a href="http://halflifeintelligence.site/">
            a fun spoof website with several full pages. project built to
            demonstrate understanding of CSS, Styled Components, and
            Flexboxgrid.
          </a>
          <br />
          <Anchor href="https://github.com/wbonneville/react-site">
            link to repo
          </Anchor>
          <br />
          <br />
          <a href="https://github.com/wbonneville/react-projects">
            all other small projects and thoroughly commented code-alongs. lots
            of code.
          </a>
          <br />
          <Anchor href="https://github.com/wbonneville/react-projects">
            link to repo
          </Anchor>
        </div>
      </Div>
    </Layout>
  </React.Fragment>
);

export default ProjectsPage;
