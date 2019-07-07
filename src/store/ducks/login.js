import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action Types & Creators
 */
const { Types, Creators } = createActions({
  loginRequest: ['user'],
  loginSuccess: ['user'],
  loginFailure: ['data'],
});

export const LoginTypes = Types;

export default Creators;

/**
 * Initial State
 */
export const INITIAL_STATE = Immutable({
  user: {},
  errorMessage: '',
  loading: false,
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: state => state.merge({
    loading: true,
    errorMessage: '',
  }),
  [Types.LOGIN_SUCCESS]: (state, { user }) => state.merge({
    user,
    errorMessage: '',
    loading: false,
  }),
  [Types.LOGIN_FAILURE]: (state, { data }) => state.merge({
    errorMessage: data.error,
    loading: false,
  }),
});
