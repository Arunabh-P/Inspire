import React from 'react';
import loading from '../images/loading.svg';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <img src={loading} className="loading-img" alt="" />
    </div>
  );
};

export default Loading;
