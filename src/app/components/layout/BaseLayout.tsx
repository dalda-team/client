import styled from '@emotion/styled';
import React from 'react';
import Header from '../base/Header';
import Navbar from '../base/Navbar';
import FullHeight from '../system/FullHeight';

interface Props {
  children: React.ReactNode;
}

function BaseLayout({ children }: Props) {
  return (
    <FullHeight>
      <Header />
      <Content>{children}</Content>
      <Navbar />
    </FullHeight>
  );
}

const Content = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: scroll;
  overflow-x: hidden;
  padding: 1rem;
`;

export default BaseLayout;