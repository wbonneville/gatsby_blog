import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Menu from '../components/menu';
import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  top: 150px;
  left: 300px;
  width: 50%;
  padding-right: 10%;
  & p {
    text-align: left;
    font-size: 18px;
  }
`;

const BlogPage = ({ data }) => (
  <Layout>
    <Div>
      <div>
        <Menu />
      </div>
      <div>
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>
              Posted by {post.node.frontmatter.author} on{' '}
              {post.node.frontmatter.date}
            </small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}> Read More </Link>
            <br />
            <br />
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
