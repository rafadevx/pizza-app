import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import SizeActions from '~/store/ducks/productSize';

export function* loadProductSize({ id }) {
  try {
    const response = yield call(api.get, `/app/productTypeSize/${id}`);

    yield put(SizeActions.loadSizeSuccess(response.data));
  } catch (err) {
    yield put(SizeActions.loadSizeFailure(err.response.data.error));
  }
}
