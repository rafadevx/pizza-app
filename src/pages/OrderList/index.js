import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import OrderActions from '~/store/ducks/order';

import {
  Container,
  Loading,
  OrderFList,
  OrderDetails,
  Background,
  HeaderTitle,
  HeaderContent,
  BackButton,
} from './styles';

import OrderItem from './OrderItem';

import BackgroundHeader from '~/assets/images/header-background.png';

class OrderList extends Component {
  static propTypes = {
    loadOrdersRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
    }).isRequired,
    order: PropTypes.shape({
      loading: PropTypes.bool,
      list: PropTypes.array,
    }).isRequired,
  };

  componentDidMount() {
    const { loadOrdersRequest } = this.props;
    loadOrdersRequest();
  }

  renderItem = ({ item }) => <OrderItem item={item} />;

  render() {
    const { navigation, order } = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        {order.loading ? (
          <Loading />
        ) : (
          <OrderFList
            ListHeaderComponent={() => (
              <OrderDetails>
                <Background source={BackgroundHeader} />
                <HeaderContent>
                  <BackButton onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left" size={12} color="#FFF" />
                  </BackButton>

                  <HeaderTitle>Meus Pedidos</HeaderTitle>
                </HeaderContent>
              </OrderDetails>
            )}
            data={order.list}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderItem}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderList);
