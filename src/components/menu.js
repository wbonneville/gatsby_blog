import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import alberti from '../images/alberti.png';
import Layout from '../components/layout';

// react icons
import {
  FaGithubAlt,
  FaTwitter,
  Fa500Px,
  FaStackOverflow,
  FaLinkedinIn,
} from 'react-icons/fa';

const StyledDiv = styled.div`
  & .hr {
    width: 50%;
  }
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

  .circle [class*='icon'] {
    width: 25px;
    height: 25px;
    color: whitesmoke;
    background-color: #444444;
    border-radius: 25px;
    line-height: 25px;
    margin: auto 3px;
    font-size: 15px;
    text-align: center;
  }
  .icon:hover {
    background-color: #3b5a9b;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 1.2rem;
  font-size: 18px;
  & .socials {
    padding-top: 3px;
  }
  & .icon {
  }
`;

const StyledLink = styled(Link)`
  font-size: 26px;
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
    <Layout>
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
            <li>
              <StyledLink to="/resume">
                <span>resume</span>
              </StyledLink>
            </li>
          </StyledUl>
          {/* <hr className="hr" /> */}

          <div className="circle">
            <StyledUl>
              <li className="socials">
                <a className="icon" href="https://github.com/wbonneville">
                  <FaGithubAlt />
                </a>
              </li>
              <li className="socials">
                <a className="icon" href="https://twitter.com/wesbonneville">
                  <FaTwitter />
                </a>
              </li>
              {/* <li className="socials">
                <a className="icon" href="https://500px.com/wesbonneville">
                  <Fa500Px />
                </a>
              </li> */}
              <li className="socials">
                <a
                  className="icon"
                  href="https://stackoverflow.com/users/10571874/wesley-bonneville"
                >
                  <FaStackOverflow />
                </a>
              </li>
              <li className="socials">
                <a
                  className="icon"
                  href="https://www.linkedin.com/in/wesley-bonneville/"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </StyledUl>
          </div>
        </div>
      </StyledDiv>
    </Layout>
  </React.Fragment>
);

export default Menu;
