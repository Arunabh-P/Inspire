import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start  text-muted mt-5 ">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 container social-section">
        <div className="me-5 d-none d-lg-block">
          <span className="footer-txt">
            Get connected with us on social networks
          </span>
        </div>
        <div>
          <Link
            to="https://www.facebook.com/Arunabh.CRI"
            className="me-4 link-secondary"
          >
            <FaFacebookF className="social-icons" />
          </Link>
          <Link
            to="https://twitter.com/Arunabh22477936?t=wiNnJfHif4ndD6AW1_2GIg&s=08"
            className="me-4 link-secondary"
          >
            <FaTwitter className="social-icons" />
          </Link>

          <Link
            to="https://www.instagram.com/arunabh___"
            className="me-4 link-secondary"
          >
            <AiFillInstagram className="social-icons" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/arunabh-p-498138b3"
            className="me-4 link-secondary"
          >
            <BsLinkedin className="social-icons" />
          </Link>
          <Link
            to="https://github.com/Arunabh-P"
            className="me-4 link-secondary"
          >
            <BsGithub className="social-icons" />
          </Link>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <Link className="  " to="/">
                <Image src={logo} alt="logo" className="logo-img" />
              </Link>
              <p className="footer-txt mt-1">
                Find high-quality services at every price point.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h4 className="footer-txt  mb-4">Services</h4>
              <p className="footer-txt">
                <a href="#!" className="text-reset ">
                  Angular
                </a>
              </p>
              <p className="footer-txt">
                <a href="#!" className="text-reset ">
                  React
                </a>
              </p>
              <p className="footer-txt">
                <a href="#!" className="text-reset ">
                  Vue
                </a>
              </p>
              <p className="footer-txt">
                <a href="#!" className="text-reset ">
                  Laravel
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h4 className="footer-txt mb-4">Useful links</h4>
              <p className="footer-txt">
                <a href="#!" className="text-reset ">
                  Pricing
                </a>
              </p>
              <p className="footer-txt">
                <a href="#!" className="text-reset ">
                  Settings
                </a>
              </p>
              <p className="footer-txt">
                <a href="#!" className="text-reset ">
                  Orders
                </a>
              </p>
              <p className="footer-txt">
                <a href="#!" className="text-reset ">
                  Help
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h4 className="footer-txt mb-4">Contact</h4>
              <p className="footer-txt">arunabh1995@gmail.com</p>
              <p className="footer-txt">+ 91 977 822 91 78</p>
              <p className="footer-txt">+ 91 871 436 86 99</p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center footer-txt p-4">
        © 2021 Copyright{' '}
        <a className="text-reset " href="https://mdbootstrap.com/">
          : Inspire.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
