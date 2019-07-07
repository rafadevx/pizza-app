import React from 'react';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ItemImage,
  ItemDescription,
  ItemInfo,
  ItemName,
  ItemSize,
  ItemPrice,
  RemoveButton,
} from './styles';

const CartItem = ({ item, index, remove }) => (
  <Container>
    <ItemImage
      source={{
        uri: `http://192.168.0.108:3030/files/${item.image}`,
      }}
    />
    <ItemInfo>
      <ItemDescription>
        <ItemName>{item.name}</ItemName>
        <ItemSize>{item.size}</ItemSize>
        <ItemPrice>{`R$${item.price}`}</ItemPrice>
      </ItemDescription>
      <RemoveButton onPress={() => remove(index)}>
        <Icon name="delete-forever" size={20} color="#e5293e" />
      </RemoveButton>
    </ItemInfo>
  </Container>
);

CartItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,
};

export default CartItem;
