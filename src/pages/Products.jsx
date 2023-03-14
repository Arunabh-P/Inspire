import React from 'react';
import { Container } from 'react-bootstrap';
import FilterSection from '../components/FilterSection';
import ProductList from '../components/ProductList';
import Sort from '../components/Sort';
import { useFilterContext } from '../context/filterContext';

const Products = () => {
  return (
    <Container>
      <div className="product-page-wrapper">
        <div className="filter-div">
          <FilterSection />
        </div>
        <div className="product-page-content-div">
          <Sort />
          <ProductList />
        </div>
      </div>
    </Container>
  );
};

export default Products;
