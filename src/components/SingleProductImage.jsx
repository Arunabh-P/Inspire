import React, { useState } from 'react';

const SingleProductImage = ({ imgs = [{ url: '' }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);
  return (
    <div className="img-main-div">
      <div className="img-list-div">
        {imgs.map((curElm, index) => (
          <div className="single-img-div" key={index}>
            <img
              className="single-img"
              src={curElm.url}
              alt={curElm.filename}
              onClick={() => setMainImage(curElm)}
            />
          </div>
        ))}
      </div>
      <div className="big-img-div">
        <img className="big-img" src={mainImage.url} alt={imgs[0].filename} />
      </div>
    </div>
  );
};

export default SingleProductImage;
