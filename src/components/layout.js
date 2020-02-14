import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import Menu from './menu';
import styled from 'styled-components';
import './layout.css';
import dome from '../images/bruneschelli.jpeg';
import alberti1 from '../images/alberti.jpeg';
import alberti2 from '../images/alberti2.jpeg';
import alberti3 from '../images/alberti3.png';

const Image = styled.div`
  height: 500px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),
    url(${dome});
  background-size: cover;
  background-repeat: no-repeat;
`;

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
    overflow-y: hidden;
    & .image {
      margin-top: 10%;
    }
  `;

  const Space = styled.div`
    height: 100px;
  `;

  return (
    <>
      <StyledDiv>
        {children}
        <Space></Space>
        <div className="columns is-mobile image">
          <div className="column is-12">
            <Image />
          </div>
        </div>
      </StyledDiv>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
