import { call, putResolve, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import api from '~/services/api';

import LoginActions from '~/store/ducks/login';

export function* login({ user }) {
  try {
    const response = yield call(api.post, '/signin', user);

    yield put(AsyncStorage.setItem('@pizza:token', response.data.token));

    yield putResolve(LoginActions.loginSuccess(response.data));
  } catch (err) {
    yield put(LoginActions.loginFailure(err.response.data));
  }
}
