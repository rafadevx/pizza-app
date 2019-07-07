import { combineReducers } from 'redux';

import { reducer as login } from './login';
import { reducer as product } from './product';
import { reducer as productType } from './productType';
import { reducer as productSize } from './productSize';
import { reducer as cart } from './cart';
import { reducer as order } from './order';

export default combineReducers({
  login,
  product,
  productType,
  productSize,
  cart,
  order,
});
