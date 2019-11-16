import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Menu from '../components/menu';

import '../mystyles.scss';

export default function Template({ data }) {
  const post = data.markdownRemark;
  // let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;

  const Div = styled.div`
    position: relative;
    top: 150px;
    left: 6%;
    width: 60%;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    & p {
      text-align: left;
      font-size: 24px;
      font-weight: 200;
    }
    & h1 {
      font-size: 30px;
    }
  `;
  return (
    <Div className="columns is-desktop">
      <div className="column is-5">
        <Menu />
      </div>
      <div className="column is-12">
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

{
  /* <Img fluid={featuredImgFluid} /> */
}

// featuredImage {
//   childImageSharp {
//     fluid(maxWidth: 800) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }

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
