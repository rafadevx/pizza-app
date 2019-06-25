import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Product from '~/pages/Product';
import ProductType from '~/pages/ProductType';
import ProductSize from '~/pages/ProductSize';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Signup,
    App: createStackNavigator(
      {
        Product,
        ProductType,
        ProductSize,
      },
      {
        defaultNavigationOptions: {
          header: null,
        },
      },
    ),
  }),
);

export default Routes;
