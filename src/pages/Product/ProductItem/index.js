import React from 'react';

import PropTypes from 'prop-types';

import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, ProductButton, Cover, ProductInfo, Title, Description, Time,
} from './styles';

const ProductItem = ({ product, navigation }) => (
  <Container>
    <ProductButton
      onPress={() => {
        navigation.navigate('ProductType', { product });
      }}
    >
      <Cover source={{ uri: `http://192.168.0.108:3030/files/${product.image}` }} />
      <ProductInfo>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
        <Time>
          <Icon name="timer" size={16} color="#999" />
          {` ${product.deliveryTime} mins`}
        </Time>
      </ProductInfo>
    </ProductButton>
  </Container>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    deliveryTime: PropTypes.number,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(ProductItem);
