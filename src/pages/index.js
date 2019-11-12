import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Menu from '../components/menu';
import styled from 'styled-components';
import { MenuDiv } from '../components/menu';

const Div = styled.div`
  position: fixed;
  top: 150px;
  left: 300px;
  width: 50%;
  padding-right: 10%;
  & p {
    text-align: left;
    font-size: 18px;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <MenuDiv>
        <Menu />
      </MenuDiv>
      <Div>
        <p>
          Hello, my name is Wesley. <br></br>
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
