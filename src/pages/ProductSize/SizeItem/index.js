import React from 'react';

import PropTypes from 'prop-types';

import {
  Container, SizeButton, SizeImage, SizeTitle, SizePrice,
} from './styles';

const SizeItem = ({ item, handleAdd }) => (
  <Container>
    <SizeButton onPress={() => handleAdd(item)}>
      <SizeImage
        source={{
          uri: `http://192.168.0.108:3030/files/${item.image}`,
        }}
        resizeMode="contain"
      />
      <SizeTitle>{item.size}</SizeTitle>
      <SizePrice>{`R$${item.price}`}</SizePrice>
    </SizeButton>
  </Container>
);

SizeItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    size: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default SizeItem;
