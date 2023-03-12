import React from 'react';
import { Container } from 'react-bootstrap';
import { MdOutlineSecurity } from 'react-icons/md';
import { SiTrustpilot } from 'react-icons/si';
import { TbTruckDelivery } from 'react-icons/tb';

const Service = () => {
  return (
    <div className="service-wrapper">
      <div className="service-content">
        <TbTruckDelivery className="service-icon" />
        <p className="service-text">Fast & Free Delivery</p>
      </div>
      <div className="service-content">
        <MdOutlineSecurity className="service-icon" />
        <p className="service-text">Secure Payment System</p>
      </div>
      <div className="service-content">
        <SiTrustpilot className="service-icon" />
        <p className="service-text">100% Genuine Products</p>
      </div>
      <div className="service-content">
        <SiTrustpilot className="service-icon" />
        <p className="service-text">Rare Collections</p>
      </div>
    </div>
  );
};

export default Service;
