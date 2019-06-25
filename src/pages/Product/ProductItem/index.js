import React from 'react';

import {
  Container, ProductButton, Cover, ProductInfo, Title, Description, Time,
} from './styles';

const ProductItem = ({ product }) => (
  <Container>
    <ProductButton>
      <Cover source={{ uri: 'https://www.ofaraopizzaria.com.br/fotos/pizza%20chamada.jpg' }} />
      <ProductInfo>
        <Title>Pizzas</Title>
        <Description>Mais de 50 sabores</Description>
        <Time>30 mins</Time>
      </ProductInfo>
    </ProductButton>
  </Container>
);

export default ProductItem;
