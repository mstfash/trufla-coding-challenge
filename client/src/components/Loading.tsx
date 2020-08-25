import React from 'react';
import styled from 'styled-components';
import LoadingImg from '../static/images/loading.gif';

const Loading = () => {
  return (
    <Container>
      <img src={LoadingImg} alt="" />
      Loading...
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  padding: 4rem 0;
  text-align: center;
  img {
    display: block;
    width: 1.5rem;
    margin: 0 auto 1rem auto;
  }
`;
