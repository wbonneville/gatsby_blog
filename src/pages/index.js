import React from 'react';
import { Link } from 'gatsby';
import '../mystyles.scss';

import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';
import Menu from '../components/menu';
import styled from 'styled-components';

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
  & .name {
    color: #366bd3;
  }
  & .important {
    font-weight: 500;
  }
`;

const Body = styled.div`
  & h1 {
    color: #444444;
    font-size: 34px;
  }
`;

const Test = styled.div``;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Wesley's Blog " />

      <div>
        <Div className="columns is-tablet">
          <Test className="column is-5">
            <Menu />
          </Test>
          <Body className="column is-12">
            <h1>
              Hello, I'm <span className="name">Wesley Bonneville.</span> I'm a
              front-end developer. <br></br>
            </h1>
            <p>
              <br />
              Welcome to my website! I created this site to function as a
              homebase. Here, you can find my blog, resume, and links to my
              GitHub and Twitter.
              <span></span>
              <br></br>
              <br></br>
              <span className="important">
                I'm 21. I'm based in Providence, Rhode Island, on the East
                Coast. I am a devotee of JavaScript and React.{' '}
              </span>{' '}
              I enjoy programming and designing. I'm interested in various
              subjects and things -- mathematics, history, photography,
              calisthenics, Studio Ghibli, Brunelleschi, bildungsromans...
              <br />
              <br />
              I consider myself to be an architect and a team-player: in order
              to build something that will stand out, individuals have to work
              in tandem. Cathedrals and castles don't rise of their own accord
              -- individuals join forces and work together. I believe in
              communicating clearly and transparently to ensure that a project's
              construction is stream-lined, time-efficient, and pleasant.
              <br /> <br /> Inclined to asking questions. Invested in my journey
              of learning. Not a fan of shortcuts or easy-fix methods.
            </p>
          </Body>
        </Div>
      </div>
    </Layout>
  );
};

export default IndexPage;
