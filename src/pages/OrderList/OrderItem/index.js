import React from 'react';

import PropTypes from 'prop-types';

import {
  Container, OrderText, DateText, OrderTotalText,
} from './styles';

const OrderItem = ({ item }) => (
  <Container>
    <OrderText>{`Pedido #${item.id}`}</OrderText>
    <DateText>{item.formattedDate}</DateText>
    <OrderTotalText>{`R$${item.total.toFixed(2)}`}</OrderTotalText>
  </Container>
);

OrderItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    formattedDate: PropTypes.string,
    total: PropTypes.number,
  }).isRequired,
};

export default OrderItem;
