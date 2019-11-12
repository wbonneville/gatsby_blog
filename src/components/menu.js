import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledDiv = styled.div``;

const StyledUl = styled.ul`
  list-style: none;
`;

const StyledLink = styled(Link)`
  color: black;
  font-size: 18px;
  font-weight: 100;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const MenuDiv = styled.div`
  margin-right: 10%;
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
