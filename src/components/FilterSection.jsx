import React from 'react';
import { useFilterContext } from '../context/filterContext';

const FilterSection = () => {
  const {
    filters: { text },
    updateFilterValue,
  } = useFilterContext();

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
    </div>
  );
};

export default FilterSection;
