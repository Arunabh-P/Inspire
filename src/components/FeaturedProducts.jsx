import React from 'react';
import { useProductContext } from '../context/productContext';
import CardOne from './CardOne';
import Loading from './Loading';

const FeaturedProducts = () => {
  const { isLoading, featuredProducts } = useProductContext();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="feature-product-wrapper mt-5">
          <h2 className="feature-title mb-4">Exclusive Products</h2>
          <div className="card-div">
            {featuredProducts.map((curElem) => (
              <CardOne key={curElem.id} {...curElem} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedProducts;
