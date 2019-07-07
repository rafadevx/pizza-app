import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import TypeActions from '~/store/ducks/productType';

export function* loadProductType({ id }) {
  try {
    const response = yield call(api.get, `/app/productType/${id}`);

    yield put(TypeActions.loadTypeSuccess(response.data));
  } catch (err) {
    yield put(TypeActions.loadTypeFailure(err.response.data.error));
  }
}
