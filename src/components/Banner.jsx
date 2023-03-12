import React from 'react';
import { Carousel } from 'react-bootstrap';
import m1 from '../images/banner/m1.jpg';
import m2 from '../images/banner/m2.jpg';
import m3 from '../images/banner/m3.jpg';
import w1 from '../images/banner/w1.jpg';
import w2 from '../images/banner/w2.jpg';
import w3 from '../images/banner/w3.jpg';
import k1 from '../images/banner/k1.jpg';
import k2 from '../images/banner/k2.jpg';
import k3 from '../images/banner/k3.jpg';
import fk from '../images/banner/fk.jpg';
import fw from '../images/banner/fw.jpg';
import fm from '../images/banner/fm.jpg';
const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="single-banner">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={m1} alt="First slide" />
            <Carousel.Caption>
              <h2 className="banner-headline">
                Inspire <span className="banner-headline-span">MEN</span>{' '}
              </h2>
              <p className="banner-text">
                Fashion fades, but style is eternal.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={m2} alt="Second slide" />
            <Carousel.Caption>
              <h2 className="banner-headline">
                Inspire <span className="banner-headline-span">MEN</span>{' '}
              </h2>
              <p className="banner-text">Classic never goes out of style.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={m3} alt="Third slide" />
            <Carousel.Caption>
              <h2 className="banner-headline">
                Inspire <span className="banner-headline-span">MEN</span>{' '}
              </h2>
              <p className="banner-text">Dress like you're already famous.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="single-banner">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={w1} alt="First slide" />
            <Carousel.Caption>
              <h2 className="banner-headline">
                Inspire <span className="banner-headline-span">WOMEN</span>{' '}
              </h2>
              <p className="banner-text">
                Style is a way to say who you are without having to speak.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={w2} alt="Second slide" />
            <Carousel.Caption>
              <h2 className="banner-headline">
                Inspire <span className="banner-headline-span">WOMEN</span>{' '}
              </h2>
              <p className="banner-text">
                Everyday is a fashion show and the world is your runway.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={w3} alt="Third slide" />
            <Carousel.Caption>
              <h2 className="banner-headline">
                Inspire <span className="banner-headline-span">WOMEN</span>{' '}
              </h2>
              <p className="banner-text">
                Fashion is about creating your own identity.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="single-banner">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={k1} alt="First slide" />
            <Carousel.Caption>
              <h2 className="banner-headline">
                Inspire <span className="banner-headline-span">KID</span>{' '}
              </h2>
              <p className="banner-text">Born to be fashionable.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={k2} alt="Second slide" />
            <Carousel.Caption>
              <h2 className="banner-headline">
                Inspire <span className="banner-headline-span">KID</span>{' '}
              </h2>
              <p className="banner-text">Kids fashion, big dreams.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={k3} alt="Third slide" />
            <Carousel.Caption>
              <h2 className="banner-headline">
                Inspire <span className="banner-headline-span">KID</span>{' '}
              </h2>
              <p className="banner-text">Kids today, trendsetters tomorrow.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="all-in-one-banner">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={fw} alt="First slide" />
            <Carousel.Caption className="carousel-text-wrapper">
              <h2 className="banner-headline">
                Inspire <span className="banner-headline-span">WOMEN</span>{' '}
              </h2>
              <p className="banner-text">
                Fashion is about creating your own identity.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={fk} alt="Second slide" />
            <Carousel.Caption className="carousel-text-wrapper">
              <h2 className="banner-headline">
                Inspire <span className="banner-headline-span">KID</span>{' '}
              </h2>
              <p className="banner-text">Kids today, trendsetters tomorrow.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={fm} alt="Third slide" />
            <Carousel.Caption className="carousel-text-wrapper">
              <h2 className="banner-headline">
                Inspire <span className="banner-headline-span">MEN</span>{' '}
              </h2>
              <p className="banner-text">Classic never goes out of style.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
