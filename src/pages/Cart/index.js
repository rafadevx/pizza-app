import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Loading,
  ProductList,
  ProductDetails,
  Background,
  HeaderTitle,
  HeaderContent,
  HeaderInfo,
  BackButton,
  TotalValue,
  FooterArea,
  MoreButton,
  FinishButton,
  FinishText,
} from './styles';

import CartItem from './CartItem';

import BackgroundHeader from '~/assets/images/header-background.png';

class Cart extends Component {
  static propTypes = {
    addProductSuccess: PropTypes.func.isRequired,
    cart: PropTypes.shape({
      products: PropTypes.array,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      goBack: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {}

  handleRemoveItem = (index) => {
    const { cart } = this.props;
    const { addProductSuccess } = this.props;
    const prod = [...cart.products];
    prod.splice(index, 1);

    addProductSuccess(prod);
  };

  renderItem = ({ item, index }) => (
    <CartItem item={item} index={index} remove={this.handleRemoveItem} />
  );

  render() {
    const { cart, navigation } = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        {cart.loading ? (
          <Loading />
        ) : (
          <ProductList
            ListHeaderComponent={() => (
              <ProductDetails>
                <Background source={BackgroundHeader} />
                <HeaderContent>
                  <HeaderInfo>
                    <BackButton onPress={() => navigation.goBack()}>
                      <Icon name="navigate-before" size={20} color="#FFF" />
                    </BackButton>

                    <HeaderTitle>Carrinho</HeaderTitle>
                  </HeaderInfo>
                  <TotalValue>{`R$${cart.subtotal.toFixed(2)}`}</TotalValue>
                </HeaderContent>
              </ProductDetails>
            )}
            data={cart.products}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderItem}
            ListFooterComponent={() => (
              <FooterArea>
                <MoreButton onPress={() => navigation.navigate('Product')}>
                  <Icon name="add-shopping-cart" size={20} color="#666" />
                </MoreButton>

                <FinishButton onPress={() => navigation.navigate('Order')}>
                  <FinishText>Realizar Pedido</FinishText>
                  <Icon name="navigate-next" size={20} color="#FFF" />
                </FinishButton>
              </FooterArea>
            )}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
