import React from 'react';
import CardTwo from './CardTwo';

const GridView = ({ products }) => {
  console.log('🚀 ~ file: GridView.jsx:5 ~ GridView ~ products:', products);
  return (
    <>
      <div className="grid-div">
        {products.map((curElem, id) => (
          <CardTwo key={curElem.id} {...curElem} />
        ))}
      </div>
    </>
  );
};

export default GridView;
