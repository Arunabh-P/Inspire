import React from 'react';
import { BsFillGridFill, BsList, BsSliders } from 'react-icons/bs';
import { useFilterContext } from '../context/filterContext';
import FilterModal from './FilterModal';

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
              Sort (a-z)
            </option>
            <option value="z-a" className="option-list">
              Sort (z-a)
            </option>
          </select>
        </form>
      </div>
      <button
        className="filter-btn modal-btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <BsSliders />
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <FilterModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
