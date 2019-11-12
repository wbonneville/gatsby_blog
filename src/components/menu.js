import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledDiv = styled.div`
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 150px; /* Stay at the top */
  left: 50px; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  z-index: 5;

  & .nav {
    width: 2.5rem;
    height: 2.5rem;
    background: #e3e3e3;
    opacity: 0.6;
    z-index: -1;
    position: fixed;
    top: 100px;
    left: 200px;
  }
  & .nav2 {
    width: 5rem;
    height: 5rem;
    background: #e3e3e3;
    opacity: 0.8;
    z-index: -1;
    position: fixed;
    top: 120px;
    left: 120px;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
`;

// box-shadow: 0 8px 6px -6px black;

const StyledLink = styled(Link)`
  color: black;
  font-size: 28px;
  font-weight: 180;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-decoration: none;
`;

const Menu = () => (
  <React.Fragment>
    <StyledDiv>
      <div>
        <div className="nav"></div>
        <div className="nav2"></div>
        <StyledUl>
          <li>
            <StyledLink to="/">wesley</StyledLink>
          </li>
          <li>
            <StyledLink to="/projects">projects</StyledLink>
          </li>
          <li>
            <StyledLink to="/blog">blog</StyledLink>
          </li>
        </StyledUl>
      </div>
    </StyledDiv>
  </React.Fragment>
);

export default Menu;
