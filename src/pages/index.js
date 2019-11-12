import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Menu from '../components/menu';
import styled from 'styled-components';
import { MenuDiv } from '../components/menu';

const Div = styled.div`
  padding: 10%;
  & p {
    text-align: left;
    font-size: 18px;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Div className="row ">
      <MenuDiv className="col-xs-2">
        <Menu />
      </MenuDiv>
      <div className="col-xs-6">
        <p>
          Hello, my name is Wesley. <br></br>
          <br />
          dolor sit amet consectetur adipisicing elit. Vel esse natus, sapiente
          debitis perferendis nam porro deleniti. Nisi molestiae sapiente, ipsa
          amet magnam voluptatibus quia placeat quas illum velit porro
          perspiciatis ipsam autem totam animi at quod consequuntur eaque
          similique.
        </p>
      </div>
    </Div>
  </Layout>
);

export default IndexPage;
