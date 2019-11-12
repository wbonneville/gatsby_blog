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
    opacity: 0.4;
    z-index: -1;
    position: fixed;
    top: 100px;
    left: 188px;
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
  font-size: 26px;
  font-weight: 300;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-decoration: none;

  & span {
    background: linear-gradient(to bottom, #bdd5e4 0%, #bdd5e4 100%);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 1px 1px;
    color: #000;
    text-decoration: none;
    transition: background-size 0.2s;
  }

  & span:hover {
    background-size: 4px 50px;
  }
`;

const Menu = () => (
  <React.Fragment>
    <StyledDiv>
      <div>
        <div className="nav"></div>
        <div className="nav2"></div>
        <StyledUl>
          <li>
            <StyledLink to="/">
              <span>wesley</span>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/projects">
              <span>projects</span>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/blog">
              <span>blog</span>
            </StyledLink>
          </li>
        </StyledUl>
      </div>
    </StyledDiv>
  </React.Fragment>
);

export default Menu;
