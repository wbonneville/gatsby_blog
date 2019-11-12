import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Menu from '../components/menu';
import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  top: 152px;
  left: 350px;
  width: 50%;
  margin-right: 10%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  & p {
    text-align: left;
    font-size: 24px;
    font-weight: 200;
  }
  & span {
    color: #366bd3;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Div>
        <p>
          Hello, I'm <span>Wesley Bonneville</span> <br></br>
          <br />
          dolor sit amet consectetur adipisicing elit. Vel esse natus, sapiente
          debitis perferendis nam porro deleniti. Nisi molestiae sapiente, ipsa
          amet magnam voluptatibus quia placeat quas illum velit porro
          perspiciatis ipsam autem totam animi at quod consequuntur eaque
          similique.
        </p>
      </Div>
    </div>
  </Layout>
);

export default IndexPage;
