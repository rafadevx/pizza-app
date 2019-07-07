import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action Types & Creators
 */
const { Types, Creators } = createActions({
  loadSizeRequest: ['id'],
  loadSizeSuccess: ['data'],
  loadSizeFailure: ['error'],
});

export const SizeTypes = Types;

export default Creators;

/**
 * Initial State
 */
export const INITIAL_STATE = Immutable({
  data: [],
  errorMessage: '',
  loading: false,
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SIZE_REQUEST]: state => state.merge({
    loading: true,
    errorMessage: '',
  }),
  [Types.LOAD_SIZE_SUCCESS]: (state, { data }) => state.merge({
    data,
    errorMessage: '',
    loading: false,
  }),
  [Types.LOAD_SIZE_FAILURE]: (state, { error }) => state.merge({
    errorMessage: error,
    loading: false,
  }),
});
