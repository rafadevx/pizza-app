import { select, put } from 'redux-saga/effects';

import CartActions from '~/store/ducks/cart';

export function* addProduct({ product }) {
  const productData = {
    id: product.id,
    name: product.ProductType.name,
    size: product.size,
    price: product.price,
    image: product.ProductType.image,
  };

  let products = yield select(state => state.cart.products);

  const index = products.findIndex(item => item.id === product.id);

  if (index >= 0) {
    return;
  }

  products = [...products, productData];

  yield put(CartActions.addProductSuccess(products));
}
