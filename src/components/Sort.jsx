import React from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from '../context/filterContext';

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();
  return (
    <div className="sort-wrapper">
      <div className="grid-list-div">
        <button
          className={grid_view ? 'active-btn grid-list-btn' : 'grid-list-btn'}
          onClick={setGridView}
        >
          <BsFillGridFill className="grid-list-icn" />
        </button>
        <button
          className={!grid_view ? 'active-btn grid-list-btn' : 'grid-list-btn'}
          onClick={setListView}
        >
          <BsList className="grid-list-icn" />
        </button>
      </div>
      <p className="sort-txt">{filter_products.length} products available</p>
      <div className="option-div">
        <form action="">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="main-select"
            onClick={sorting}
          >
            <option value="lowest" className="option-list">
              Price (lowest)
            </option>
            <option value="highest" className="option-list">
              Price (highest)
            </option>
            <option value="a-z" className="option-list">
              Price (a-z)
            </option>
            <option value="z-a" className="option-list">
              Price (z-a)
            </option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
