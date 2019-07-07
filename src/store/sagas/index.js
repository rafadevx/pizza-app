import { all, takeLatest } from 'redux-saga/effects';

import { LoginTypes } from '~/store/ducks/login';
import { ProductTypes } from '~/store/ducks/product';
import { ItemTypes } from '~/store/ducks/productType';
import { SizeTypes } from '~/store/ducks/productSize';
import { CartTypes } from '~/store/ducks/cart';
import { OrderTypes } from '~/store/ducks/order';

import { login } from './login';
import { loadProduct } from './product';
import { loadProductType } from './productType';
import { loadProductSize } from './productSize';
import { addProduct } from './cart';
import { getAddress, finish, loadOrders } from './order';

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(ProductTypes.LOAD_PRODUCT_REQUEST, loadProduct),
    takeLatest(ItemTypes.LOAD_TYPE_REQUEST, loadProductType),
    takeLatest(SizeTypes.LOAD_SIZE_REQUEST, loadProductSize),
    takeLatest(CartTypes.ADD_PRODUCT_REQUEST, addProduct),
    takeLatest(OrderTypes.ADDRESS_REQUEST, getAddress),
    takeLatest(OrderTypes.FINISH_ORDER_REQUEST, finish),
    takeLatest(OrderTypes.LOAD_ORDERS_REQUEST, loadOrders),
  ]);
}
