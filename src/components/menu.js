import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledDiv = styled.div`
  background: #5eb47f;
  padding-top: 10px;
`;

const StyledUl = styled.ul`
  list-style: none;
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 16px;
  font-weight: 800;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
