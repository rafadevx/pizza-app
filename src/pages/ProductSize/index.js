import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Container,
  Loading,
  SizeList,
  SizeDetails,
  Background,
  HeaderTitle,
  HeaderContent,
  BackButton,
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import ProductSizeActions from '~/store/ducks/productSize';
import CartActions from '~/store/ducks/cart';

import SizeItem from './SizeItem';

import BackgroundHeader from '~/assets/images/header-background.png';

class ProductSize extends Component {
  static propTypes = {
    loadSizeRequest: PropTypes.func.isRequired,
    addProductRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      goBack: PropTypes.func,
    }).isRequired,
    productSize: PropTypes.shape({
      Loading: PropTypes.bool,
      data: PropTypes.array,
    }).isRequired,
  };

  componentDidMount() {
    const { loadSizeRequest, navigation } = this.props;
    const productType = navigation.getParam('type');
    loadSizeRequest(productType.id);
  }

  handleAddCart = (product) => {
    const { addProductRequest, navigation } = this.props;

    addProductRequest(product);

    navigation.navigate('Cart');
  };

  renderItem = ({ item }) => <SizeItem item={item} handleAdd={this.handleAddCart} />;

  render() {
    const { productSize, navigation } = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        {productSize.Loading ? (
          <Loading />
        ) : (
          <SizeList
            ListHeaderComponent={() => (
              <SizeDetails>
                <Background source={BackgroundHeader} />
                <HeaderContent>
                  <BackButton onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left" size={12} color="#FFF" />
                  </BackButton>

                  <HeaderTitle>Selecione um tamanho</HeaderTitle>
                </HeaderContent>
              </SizeDetails>
            )}
            data={productSize.data}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderItem}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 15 }}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  productSize: state.productSize,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ProductSizeActions, ...CartActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductSize);
