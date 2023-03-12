import React from 'react';
import { Link } from 'react-router-dom';

import { AiFillCaretRight } from 'react-icons/ai';

const PageNavigation = ({ title }) => {
  return (
    <div className="nav-wrapper p-4 mt-4">
      <p className="nav-text">
        {' '}
        <Link to="/">Home </Link>
      </p>
      <AiFillCaretRight className="nav-icn" />

      <p className="nav-last-txt"> {title}</p>
    </div>
  );
};

export default PageNavigation;
