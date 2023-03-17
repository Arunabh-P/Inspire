import React from 'react';
import { Link } from 'react-router-dom';
import notfoundImg from '../images/notfound.jpg';

const ErrorPage = () => {
  return (
    <div className="empty-div">
      <img src={notfoundImg} className="not-found-img" alt="" />
      <h4 className="empty-txt mb-3">Sorry, Page not found!</h4>

      <Link to="/">
        <button className="cntnue-btn  mt-2">Go back to home page</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
