import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledDiv = styled.div`
  background: #f4f4f4;
  padding-top: 10px;
`

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`

const Menu = () => (
  <React.Fragment>
    <StyledDiv>
      <StyledUl>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </StyledUl>
    </StyledDiv>
  </React.Fragment>
)

export default Menu
