import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Initial from '~/pages/Initial';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Product from '~/pages/Product';
import ProductType from '~/pages/ProductType';
import ProductSize from '~/pages/ProductSize';
import Cart from '~/pages/Cart';
import Order from '~/pages/Order';
import OrderList from '~/pages/OrderList';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Initial,
      Auth: createStackNavigator(
        {
          Login,
          Signup,
        },
        {
          defaultNavigationOptions: {
            header: null,
          },
        },
      ),
      App: createStackNavigator(
        {
          Product,
          ProductType,
          ProductSize,
          Cart,
          Order,
          OrderList,
        },
        {
          defaultNavigationOptions: {
            header: null,
          },
        },
      ),
    },
    {
      initialRouteName: 'Initial',
    },
  ),
);

export default Routes;
