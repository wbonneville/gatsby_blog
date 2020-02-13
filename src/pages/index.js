import React from 'react';
import '../mystyles.scss';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/menu';
import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  top: 150px;
  left: 6.2%;
  width: 60%;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  & p {
    text-align: left;
    font-size: 20px;
  }

  & .important {
    font-weight: 500;
  }
`;

const Body = styled.div`
  & h1 {
    color: #444444;
    font-size: 34px;
    font-weight: 700;
  }
  & .name {
    color: #366bd3;
  }
  @media (min-width: 150px) and (max-width: 350px) {
    h1 {
      font-size: 25px;
    }
    p {
      font-size: 15px;
    }
  }
`;

const Test = styled.div``;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Wesley's Blog " />
      <div>
        <Div className="columns">
          <Test className="column is-5">
            <Menu />
          </Test>
          <Body className="column is-11">
            <h1>
              Hello, I'm <span className="name">Wesley.</span> I'm a Front-End
              React Developer.{' '}
            </h1>

            <p>
              <br />
              Welcome to my website!{' '}
              <span role="img" aria-label="sheep">
                💻
              </span>{' '}
              I created this site to function as a homebase. Here, you can find
              my blog, resume, and links to my GitHub and Twitter.
              <span></span>
              <br></br>
              <br></br>
              I'm 21. I live in Providence, Rhode Island, on the East Coast. I
              enjoy programming and designing. I'm interested in various fields
              and disciplines: mathematics, history, photography, calisthenics,
              Studio Ghibli, Brunelleschi, bildungsromans, anything analog...
              <br />
              <br />
              HTML5, CSS3, Flexboxgrid, StyledComponents, ES6, React, Redux
              (TypeScript soon) 🖤
            </p>
          </Body>
        </Div>
      </div>
    </Layout>
  );
};

export default IndexPage;
