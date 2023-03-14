import React from 'react';
import { useFilterContext } from '../context/filterContext';
import { FaCheck } from 'react-icons/fa';

const FilterSection = () => {
  const {
    filters: { text, category, color },
    all_products,
    updateFilterValue,
  } = useFilterContext();

  // to get unique data of each fields
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });
    if (attr === 'colors') {
      // return (newVal = ['all', ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }
    return (newVal = ['all', ...new Set(newVal)]);
  };
  // we need unique data
  const categoryOnlyData = getUniqueData(all_products, 'category');
  const companyData = getUniqueData(all_products, 'company');
  const colorsData = getUniqueData(all_products, 'colors');
  return (
    <div className="fiter-section">
      <div className="filter-search-div">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="search..."
          />
        </form>
      </div>
      <div className="filter-category-div">
        <h4 className="filter-headline">Category</h4>
        {categoryOnlyData.map((curElem, index) => (
          <button
            key={index}
            type="button"
            name="category"
            value={curElem}
            onClick={updateFilterValue}
            className="filter-btn"
          >
            {curElem}
          </button>
        ))}
      </div>
      <div className="filter-category-div">
        <h4 className="filter-headline">Company</h4>
        <form action="">
          <label htmlFor="sort"></label>
          <select
            name="company"
            id="company"
            className="main-select"
            onClick={updateFilterValue}
          >
            {companyData.map((curCompany, index) => (
              <option
                key={index}
                value={curCompany}
                name="company"
                className="option-list"
              >
                {curCompany}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div className="filter-color-div">
        <h4 className="filter-headline">Colors</h4>
        <div className="filter-color-btn-div">
          {colorsData.map((curColor, index) => (
            <button
              key={index}
              name="color"
              style={{ backgroundColor: curColor }}
              className={
                color === curColor
                  ? 'filter-color-btn active-color'
                  : 'filter-color-btn '
              }
              value={curColor}
              onClick={updateFilterValue}
            >
              {color === curColor ? <FaCheck className="check-icon" /> : null}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
