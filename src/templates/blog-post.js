import React from 'react';
import { Link } from 'gatsby';
import Menu from '../components/menu';
import styled from 'styled-components';
import { MenuDiv } from '../components/menu';

export default function Template({ data }) {
  const post = data.markdownRemark;

  const Div = styled.div`
    padding: 10%;
    & p {
      text-align: left;
      font-size: 18px;
    }
  `;

  return (
    <Div className="row">
      <MenuDiv className="col-xs-2">
        <Menu />
      </MenuDiv>
      <div className="col-xs-6">
        <Link to="/blog">Go Back</Link>
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </div>
    </Div>
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
