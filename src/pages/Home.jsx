import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../components/Banner';
import FeaturedProducts from '../components/FeaturedProducts';
import Service from '../components/Service';

const Home = () => {
  return (
    <Container>
      <Banner />
      <Service />
      <FeaturedProducts />
    </Container>
  );
};

export default Home;
