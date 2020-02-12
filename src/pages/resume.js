import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Menu from '../components/menu';
import '../mystyles.scss';
import { Document, Page } from 'react-pdf';
import PDF from './resume.pdf';

const Div = styled.div`
  position: relative;
  top: 150px;
  left: 6%;
  width: 60%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  & p {
    text-align: left;
    font-size: 20px;
    font-weight: 300;
  }
`;

const Anchor = styled.a`
  text-decoration: underline;
`;

const ResumeWrapper = styled.div`
  margin-left: 3%;
`;

export default class Resume extends Component {
  render() {
    return (
      <Layout>
        <Div className="columns is-desktop">
          <div className="column is-5">
            <Menu />
          </div>
          <ResumeWrapper className="column is-12">
            <Document file={PDF} onLoadSuccess={this.onDocumentLoadSuccess}>
              <Page pageNumber={1} />
            </Document>
          </ResumeWrapper>
        </Div>
      </Layout>
    );
  }
}
