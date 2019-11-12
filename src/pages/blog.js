import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  top: 150px;
  left: 300px;
  width: 50%;
  padding-right: 10%;
  & h3 {
    text-decoration: underline;
  }
  & p {
    margin-top: -3%;
    text-align: left;
    font-size: 12px;
  }
`;

const BlogPage = ({ data }) => (
  <Layout>
    <Div>
      <div>
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
            <hr />
          </div>
        ))}
      </div>
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
