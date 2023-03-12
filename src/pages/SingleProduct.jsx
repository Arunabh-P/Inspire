import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import PageNavigation from '../components/PageNavigation';
import SingleProductImage from '../components/SingleProductImage';
import { useProductContext } from '../context/productContext';
import FormatPrice from '../helpers/FormatPrice';

const API = 'https://api.pujakaitem.com/api/products';

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    // id:alias,
    category,
    company,
    description,
    name,
    price,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  return (
    <Container>
      {isSingleLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <PageNavigation title={name} />
          <div className="single-product-wrapper mt-4">
            <div className="single-pdt-img-div">
              <SingleProductImage imgs={image} />
            </div>
            <div className="single-pdt-content-div">
              <h2 className="sgl-pdt-headline">{name}</h2>
              <p className="sgl-pdt-txt">{stars}</p>
              <p className="sgl-pdt-txt">{reviews} reviews</p>
              <p className="sgl-pdt-txt">
                MRP :
                <del>
                  {' '}
                  <FormatPrice price={price + 250000} />{' '}
                </del>{' '}
              </p>
              <p className="sgl-pdt-txt">
                Deal of the day : <FormatPrice price={price} />{' '}
              </p>
              <p className="sgl-pdt-txt">Category :{category}</p>
              <p className="sgl-pdt-txt">Brand :{company}</p>
              <p className="sgl-pdt-txt">{description}</p>
              <p className="sgl-pdt-txt">
                Availablev :
                <span className="pdt-single-span-txt">
                  {stock > 0 ? 'In Stock' : 'Not Available'}
                </span>
              </p>
              <p className="sgl-pdt-txt">ID : {id}</p>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default SingleProduct;
