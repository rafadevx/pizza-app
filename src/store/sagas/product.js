import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import ProductActions from '~/store/ducks/product';

export function* loadProduct() {
  try {
    const response = yield call(api.get, '/app/products');

    yield put(ProductActions.loadProductSuccess(response.data));
  } catch (err) {
    yield put(ProductActions.loadProductFailure(err.response.data.error));
  }
}
