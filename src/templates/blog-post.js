import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Menu from '../components/menu';
import Layout from '../components/layout';

import '../mystyles.scss';

export default function Template({ data }) {
  const post = data.markdownRemark;

  const Div = styled.div`
    position: relative;
    top: 150px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    & p {
      text-align: left;
      font-size: 18px;
      font-weight: 300;
    }
    & h1 {
      font-size: 30px;
    }
  `;

  const Body = styled.div`
    margin-left: 6%;
  `;

  const MenuWrapper = styled.div`
    margin-left: 6%;
    margin-right: -6%;
  `;

  return (
    <Layout>
      <Div className="columns is-tablet">
        <MenuWrapper className="column is-one-quarter">
          <Menu />
        </MenuWrapper>
        <Body className="column is-7 is-10-mobile">
          <Link to="/blog">Go Back</Link>
          <hr />
          <h1>{post.frontmatter.title}</h1>
          <h4>
            Posted by {post.frontmatter.author} on {post.frontmatter.date}
          </h4>

          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </Body>
      </Div>
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`;
