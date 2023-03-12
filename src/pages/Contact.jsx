import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

const Contact = () => {
  return (
    <Container>
      <ContactForm />
      <Map />
    </Container>
  );
};

export default Contact;
