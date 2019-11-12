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
`;

const StyledUl = styled.ul`
  list-style: none;
`;

const StyledLink = styled(Link)`
  color: black;
  font-size: 18px;
  font-weight: 100;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
`;

export const MenuDiv = styled.div`
  padding: 2%;
`;

const Menu = () => (
  <React.Fragment>
    <StyledDiv>
      <div>
        <StyledUl>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/projects">Projects</StyledLink>
          </li>
          <li>
            <StyledLink to="/blog">Blog</StyledLink>
          </li>
        </StyledUl>
      </div>
    </StyledDiv>
  </React.Fragment>
);

export default Menu;
