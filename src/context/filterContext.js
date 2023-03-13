import { createContext, useContext, useEffect, useReducer } from 'react';
import { useProductContext } from './productContext';
import reducer from '../reducer/filterReducer';

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: 'lowest',
};
const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  //   to set grid & list view
  const setGridView = () => {
    return dispatch({ type: 'SET_GRID_VIEW' });
  };
  const setListView = () => {
    return dispatch({ type: 'SET_LIST_VIEW' });
  };

  // sorting function
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: 'GET_SORT_VALUE', payload: userValue });
  };

  // to sort product
  useEffect(() => {
    dispatch({ type: 'SORTING_PRODUCTS' });
  }, [products, state.sorting_value]);

  // load all products for grid and list view
  useEffect(() => {
    dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting }}
    >
      {children}
    </FilterContext.Provider>
  );
};

//custom hook
export const useFilterContext = () => {
  return useContext(FilterContext);
};
export { FilterContextProvider, FilterContext };
