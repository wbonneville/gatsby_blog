import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import '../mystyles.scss';
import Menu from '../components/menu';

const Div = styled.div`
  position: relative;
  top: 150px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  & h3 {
    text-decoration: underline;
  }
  & p {
    margin-top: -1rem;
    text-align: left;
    font-size: 12px;
    font-weight: 200;
  }
`;

const Body = styled.div`
  margin-left: 6%;
`;

const MenuWrapper = styled.div`
  margin-left: 6%;
  margin-right: -6%;
`;

const BlogPage = ({ data }) => (
  <Layout>
    <Div className="columns is-tablet">
      <MenuWrapper className="column is-one-quarter">
        <Menu />
      </MenuWrapper>
      <Body className="column is-7 is-10-mobile">
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <h3>
              {' '}
              <Link to={post.node.frontmatter.path}>
                {' '}
                {post.node.frontmatter.title}{' '}
              </Link>
            </h3>
            <p>
              Posted by {post.node.frontmatter.author} on{' '}
              {post.node.frontmatter.date}
            </p>
          </div>
        ))}
      </Body>
    </Div>
  </Layout>
);

export default BlogPage;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`;
