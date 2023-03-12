import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../components/Banner';
import Service from '../components/Service';

const Home = () => {
  return (
    <Container>
      <Banner />
      <Service />
    </Container>
  );
};

export default Home;
