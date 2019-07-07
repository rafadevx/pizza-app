import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action Types & Creators
 */
const { Types, Creators } = createActions({
  addressRequest: ['zip'],
  addressSuccess: ['address'],
  addressFailure: null,
  finishOrderRequest: ['note', 'number'],
  loadOrdersRequest: null,
  loadOrdersSuccess: ['data'],
});

export const OrderTypes = Types;

export default Creators;

/**
 * Initial State
 */
export const INITIAL_STATE = Immutable({
  zip: '',
  street: '',
  number: '',
  district: '',
  list: [],
  loading: false,
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADDRESS_SUCCESS]: (state, { address }) => state.merge({
    zip: address.zip,
    street: address.street,
    district: address.district,
  }),
  [Types.LOAD_ORDERS_SUCCESS]: (state, { data }) => state.merge({ list: data }),
});
