import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import alberti from '../images/alberti.png';
import {
  FaGithubAlt,
  FaTwitter,
  Fa500Px,
  FaStackOverflow,
} from 'react-icons/fa';

const StyledDiv = styled.div`
  & .nav {
    width: 2.5rem;
    height: 2.5rem;
    background: #e3e3e3;
    opacity: 0.4;
    z-index: -1;
  }
  & .nav2 {
    width: 5rem;
    height: 5rem;

    opacity: 0.8;
    z-index: -1;
    margin-bottom: 1rem;
  }
  & .pic {
    background-image: url(${alberti});
    height: 150px;
    width: 100px;
    background-size: cover;
    border-radius: 3%;
    margin-bottom: 1rem;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  & .icons {
    padding-top: 3px;
  }

  & .icon {
    margin-right: 5px;
  }
`;

const StyledLink = styled(Link)`
  color: black !important;
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
        {/* <div className="nav"></div>
        <div className="nav2"></div> */}
        <div className="pic"></div>
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
          <li className="icons">
            <a className="icon" href="https://github.com/wbonneville">
              <FaGithubAlt />
            </a>
          </li>
          <li className="icons">
            <a className="icon" href="https://twitter.com/wesbonneville">
              <FaTwitter />
            </a>
          </li>
          <li className="icons">
            <a className="icon" href="https://500px.com/wesbonneville">
              <Fa500Px />
            </a>
          </li>
          <li className="icons">
            <a
              className="icon"
              href="https://stackoverflow.com/users/10571874/wesley-bonneville"
            >
              <FaStackOverflow />
            </a>
          </li>
        </StyledUl>
      </div>
    </StyledDiv>
  </React.Fragment>
);

export default Menu;
