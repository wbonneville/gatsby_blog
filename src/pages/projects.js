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
import gallerypx1 from '../images/gallerypx1.png';
import gallerypx2 from '../images/gallerypx2.png';
import gallerypx3 from '../images/gallerypx3.png';
import gallerypx4 from '../images/gallerypx4.png';
import gallerypx5 from '../images/gallerypx5.png';
import gallerypx6 from '../images/gallerypx6.png';
import gallerypx7 from '../images/gallerypx7.png';
import gallerypx8 from '../images/gallerypx8.png';

const Div = styled.div`
  position: relative;
  top: 150px;

  & .spacewalker {
    font-size: 20px;
    text-decoration: underline;
    & :hover {
      color: blueviolet;
    }
  }

  & .gallerypx {
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
    font-size: 18px;
    font-weight: 300;
  }

  & .pic1 {
    margin-top: 1rem;
    background-image: url(${spacewalkerimg1});
    height: 250px;
    background-size: cover;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .pic2 {
    margin-top: 1rem;
    background-image: url(${spacewalker2});
    height: 250px;
    background-size: cover;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .pic3 {
    margin-top: 1rem;
    background-image: url(${spacewalker3});
    height: 340px;
    background-size: cover;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .pic4 {
    margin-top: 1rem;
    background-image: url(${spacewalker4});
    height: 400px;
    background-size: cover;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .pic5 {
    margin-top: 1rem;
    background-image: url(${spacewalker5});
    height: 400px;
    background-size: cover;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .pic6 {
    margin-top: 1rem;
    background-image: url(${spacewalker6});
    height: 520px;
    background-size: cover;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .pic7 {
    margin-top: 1rem;
    background-image: url(${spacewalker7});
    height: 500px;
    background-size: cover;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .gallerypic1 {
    margin-top: 1rem;
    background-image: url(${gallerypx1});
    height: 360px;
    background-size: cover;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .gallerypic2 {
    margin-top: 1rem;
    background-image: url(${gallerypx2});
    height: 300px;
    background-size: cover;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .gallerypic3 {
    margin-top: 1rem;
    background-image: url(${gallerypx3});
    height: 300px;
    background-size: cover;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .gallerypic4 {
    margin-top: 1rem;
    background-image: url(${gallerypx4});
    height: 100px;
    background-size: cover;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .gallerypic5 {
    margin-top: 1rem;
    background-image: url(${gallerypx5});
    height: 300px;
    background-size: cover;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .gallerypic6 {
    margin-top: 1rem;
    background-image: url(${gallerypx6});
    height: 500px;
    background-size: cover;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .gallerypic7 {
    margin-top: 1rem;
    background-image: url(${gallerypx7});
    height: 500px;
    background-size: cover;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
  & .gallerypic8 {
    margin-top: 1rem;
    background-image: url(${gallerypx8});
    height: 500px;
    background-size: cover;
    border-radius: 3%;
    margin-bottom: 2rem;
  }
`;

const Anchor = styled.a`
  text-decoration: underline;
`;

// using bulma for columns

const Body = styled.div`
  margin-left: 6%;

  & .anchor {
    font-size: 22px;
    font-weight: 600;
  }
`;

const MenuWrapper = styled.div`
  margin-left: 6%;
  margin-right: -6%;
`;

const ProjectsPage = () => (
  <React.Fragment>
    <Layout>
      <Div className="columns is-tablet">
        <MenuWrapper className="column is-one-quarter">
          <Menu />
        </MenuWrapper>
        <Body className="column is-7 is-10-mobile">
          <h1>Projects</h1>
          <br />
          <a
            className="spacewalker anchor"
            href="https://spacewalkerproject.netlify.com/"
          >
            🛰 Space Walker: a WIP space trading game built with React and Redux.
            click on a planet!
          </a>
          <br />
          <br />
          <Anchor href="https://github.com/wbonneville/spacewalker">
            link to repo
          </Anchor>
          <div className="pic1"></div>
          <p>There are hundreds of randomly generated planets...</p>
          <div className="pic2"></div>
          <p>
            You can click on any planet and warp to it. Each planet is entirely
            different. There's a lot of different information concerning each
            planet. All of the state is stored within the Redux store. There's a
            huge amount of things to be added.
            <br />
            <br />
            The console I made for it looks pretty cool, too. I designed it in
            Sketch with my free trial.
          </p>
          <div className="pic3"></div>
          <p>
            The JSX is a sight for sore eyes, but there was a lot of information
            to render. Here, current market data (the market of the planet the
            player is on) is being mapped through and enumerated. I'm using
            Flexboxgrid to render the rows of data... this could be done a lot
            nicer.
          </p>
          <div className="pic4"></div>
          <p>
            Generating planets using a loop. Let's make 800! It's really cool.
            Each planet is randomly generated and comes with its own attributes.
          </p>
          <div className="pic5"></div>
          <p> Planet data.</p>
          <div className="pic6"></div>
          <p>Redux doing its job.</p>
          <div className="pic7"></div>
          <p>
            As of lately, I've been focusing on other projects. Space Walker is
            still a work in progress.
          </p>
          <br />
          <a className="gallerypx anchor" href="https://gallerypx.netlify.com/">
            📸 GalleryPx: a responsive gallery built with React that dynamically
            renders photos using data from a JSON file, or alternatively, any
            API
          </a>
          <br />
          <br />
          <Anchor href="https://github.com/wbonneville/gallery">
            link to repo
          </Anchor>
          <br />
          <br />
          <div className="gallerypic1"></div>
          <p>I modeled it after 500px.</p>
          <div className="gallerypic2"></div>

          <p>
            The photos are organized neatly into 3 different rows. The user can
            choose which row they'd like to put the photo in -- within the JSON
            data!
          </p>
          <div className="gallerypic3"></div>
          <p>You can like photos...</p>
          <div className="gallerypic4"></div>
          <p>And you can open them up if you'd like to view them bigger.</p>
          <div className="gallerypic5"></div>
          <p>
            I made use of Flexboxgrid to organize the data (the photos) into
            three different rows. Each array is mapped through.
          </p>
          <div className="gallerypic6"></div>
          <p>The first set of data.</p>
          <div className="gallerypic7"></div>
          <p>
            Conditional rendering for Modal and like bar. I love JSX. It's
            beautiful.
          </p>
          <div className="gallerypic8"></div>
          <br />
          <a className="anchor" href="http://halflifeintelligence.site/">
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
          <a
            className="anchor"
            href="https://github.com/wbonneville/react-projects"
          >
            all other small projects and thoroughly commented code-alongs. lots
            of code.
          </a>
          <br />
          <Anchor href="https://github.com/wbonneville/react-projects">
            link to repo
          </Anchor>
        </Body>
      </Div>
    </Layout>
  </React.Fragment>
);

export default ProjectsPage;
