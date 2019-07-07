import { select, put, call } from 'redux-saga/effects';
import axios from 'axios';
import api from '~/services/api';

import OrderActions from '~/store/ducks/order';

export function* getAddress({ zip }) {
  try {
    const { data } = yield call(axios.get, `https://api.postmon.com.br/v1/cep/${zip}`);

    const address = {
      zip: data.cep,
      street: data.logradouro,
      district: data.bairro,
    };
    yield put(OrderActions.addressSuccess(address));
  } catch (err) {
    yield put(OrderActions.addressFailure());
  }
}

export function* loadOrders() {
  try {
    const response = yield call(api.get, 'app/order/user');

    yield put(OrderActions.loadOrdersSuccess(response.data));
  } catch (err) {
    console.tron.log(err);
  }
}

export function* finish({ note, number }) {
  const items = yield select(state => state.cart.products);
  const order = yield select(state => state.order);

  const data = {
    zipcode: order.zip,
    streetAddress: order.street + number,
    district: order.district,
    note,
    items,
  };

  try {
    yield call(api.post, '/app/order/', data);

    yield loadOrders();
  } catch (err) {
    console.tron.log(err);
  }
}
