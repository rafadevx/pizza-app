import React from 'react';

import {
  Container, ProductButton, Cover, ProductInfo, Title, Description, Time,
} from './styles';

const ProductItem = ({ product }) => (
  <Container>
    <ProductButton>
      <Cover source={{ uri: product.image }} />
      <ProductInfo>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
        <Time>{`${product.deliveryTime} mins`}</Time>
      </ProductInfo>
    </ProductButton>
  </Container>
);

export default ProductItem;
