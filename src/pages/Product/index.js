import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Container,
  Loading,
  ProductList,
  ProductDetails,
  Background,
  HistoryButton,
  HeaderTitle,
  BagButton,
  HeaderContent,
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import ProductActions from '~/store/ducks/product';

import ProductItem from './ProductItem';

import BackgroundHeader from '~/assets/images/header-background.png';

class Product extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    loadProductRequest: PropTypes.func.isRequired,
    product: PropTypes.shape({
      Loading: PropTypes.bool,
      data: PropTypes.array,
    }).isRequired,
  };

  componentDidMount() {
    const { loadProductRequest } = this.props;

    loadProductRequest();
  }

  renderItem = ({ item }) => <ProductItem product={item} />;

  render() {
    const { product, navigation } = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        {product.Loading ? (
          <Loading />
        ) : (
          <ProductList
            ListHeaderComponent={() => (
              <ProductDetails>
                <Background source={BackgroundHeader} />
                <HeaderContent>
                  <HistoryButton onPress={() => navigation.navigate('OrderList')}>
                    <Icon name="history" size={24} color="#FFF" />
                  </HistoryButton>

                  <HeaderTitle>Pizzaria Don Juan</HeaderTitle>
                  <BagButton onPress={() => navigation.navigate('Cart')}>
                    <Icon name="shopping-bag" size={20} color="#FFF" />
                  </BagButton>
                </HeaderContent>
              </ProductDetails>
            )}
            data={product.data}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderItem}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
