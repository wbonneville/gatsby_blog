import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import Menu from './menu';
import styled from 'styled-components';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const StyledDiv = styled.div`
    /* background-color: #f6f6f6 !important; */
  `;

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <StyledDiv>
        {/* <Menu /> */}

        <main> {children} </main>
      </StyledDiv>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
