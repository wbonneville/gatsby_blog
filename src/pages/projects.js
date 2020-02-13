import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/menu';
import '../mystyles.scss';
import spacewalkerimg1 from '../images/spacewalkerimg1.png';
import spacewalker2 from '../images/spacewalker2.png';
import spacewalker3 from '../images/spacewalker3.png';
import spacewalker4 from '../images/spacewalker4.png';
import spacewalker5 from '../images/spacewalker5.png';
import spacewalker6 from '../images/spacewalker6.png';
import spacewalker7 from '../images/spacewalker7.png';

const Div = styled.div`
  position: relative;
  top: 150px;
  left: 6%;
  width: 60%;

  & .spacewalker {
    font-size: 20px;
    text-decoration: underline;

    & :hover {
      color: blueviolet;
    }
  }

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  & p {
    text-align: left;
    font-size: 20px;
    font-weight: 300;
  }

  & .pic1 {
    margin-top: 1rem;
    background-image: url(${spacewalkerimg1});
    height: 340px;
    /* width: 45%; */
    background-size: contain;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .pic2 {
    margin-top: 1rem;
    background-image: url(${spacewalker2});
    height: 250px;
    /* width: 45%; */
    background-size: cover;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .pic3 {
    margin-top: 1rem;
    background-image: url(${spacewalker3});
    height: 340px;
    /* width: 45%; */
    background-size: contain;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .pic4 {
    margin-top: 1rem;
    background-image: url(${spacewalker4});
    height: 340px;
    width: 60%;
    background-size: contain;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .pic5 {
    margin-top: 1rem;
    background-image: url(${spacewalker5});
    height: 340px;
    width: 60%;
    background-size: contain;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .pic6 {
    margin-top: 1rem;
    background-image: url(${spacewalker6});
    height: 340px;
    width: 60%;
    background-size: contain;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .pic7 {
    margin-top: 1rem;
    background-image: url(${spacewalker7});
    height: 340px;
    width: 60%;
    background-size: contain;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
`;

const Anchor = styled.a`
  text-decoration: underline;
`;

// using bulma for columns

const ProjectsPage = () => (
  <React.Fragment>
    <Layout>
      <Div className="columns is-desktop">
        <div className="column is-5">
          <Menu />
        </div>
        <div className="column is-12">
          <p>Here are a few of my original projects. </p>
          <a
            className="spacewalker"
            href="https://spacewalkerproject.netlify.com/"
          >
            Space Walker: a WIP space trading game built with React and Redux.
            click on a planet!
          </a>
          <div className="pic1"></div>
          <p>There a couple hundred randomly generated planets...</p>
          <div className="pic2"></div>
          <p>
            You can click on any planet and warp to it. Each planet is entirely
            different. There's a huge amount of things to be added.
          </p>
          <div className="pic3"></div>
          <div className="pic4"></div>
          <div className="pic5"></div>
          <div className="pic6"></div>
          <div className="pic7"></div>
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
