import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action Types & Creators
 */
const { Types, Creators } = createActions({
  addProductRequest: ['product'],
  addProductSuccess: ['products'],
  addProductFailure: null,
});

export const CartTypes = Types;

export default Creators;

/**
 * Initial State
 */
export const INITIAL_STATE = Immutable({
  products: [],
  subtotal: 0,
  loading: false,
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PRODUCT_SUCCESS]: (state, { products }) => state.merge({
    products,
    subtotal: products.reduce((acc, product) => acc + parseFloat(product.price), 0),
  }),
});
