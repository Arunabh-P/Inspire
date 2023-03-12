import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';
import { AppContext, useProductContext } from '../context/productContext';

const Contact = () => {
  const { myName } = useProductContext();
  return (
    <Container>
      {myName}
      <ContactForm />
      <Map />
    </Container>
  );
};

export default Contact;
