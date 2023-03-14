import React from 'react';
import { useFilterContext } from '../context/filterContext';

const FilterSection = () => {
  const {
    filters: { text, category },
    all_products,
    updateFilterValue,
  } = useFilterContext();

  // to get unique data of each fields
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    return (newVal = ['all', ...new Set(newVal)]);
  };
  // we need unique data
  const categoryOnlyData = getUniqueData(all_products, 'category');
  const companyData = getUniqueData(all_products, 'company');
  console.log(
    '🚀 ~ file: FilterSection.jsx:21 ~ FilterSection ~ companyData:',
    companyData
  );

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
    </div>
  );
};

export default FilterSection;
