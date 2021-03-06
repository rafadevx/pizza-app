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
  HeaderTitle,
  HeaderContent,
  BackButton,
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import ProductTypeActions from '~/store/ducks/productType';

import TypeItem from './TypeItem';

import BackgroundHeader from '~/assets/images/header-background.png';

class ProductType extends Component {
  static propTypes = {
    loadTypeRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
    }).isRequired,
    productType: PropTypes.shape({
      Loading: PropTypes.bool,
      data: PropTypes.array,
    }).isRequired,
  };

  componentDidMount() {
    const { loadTypeRequest, navigation } = this.props;
    const product = navigation.getParam('product');
    loadTypeRequest(product.id);
  }

  renderItem = ({ item }) => <TypeItem type={item} />;

  render() {
    const { productType, navigation } = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        {productType.Loading ? (
          <Loading />
        ) : (
          <ProductList
            ListHeaderComponent={() => (
              <ProductDetails>
                <Background source={BackgroundHeader} />
                <HeaderContent>
                  <BackButton onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left" size={12} color="#FFF" />
                  </BackButton>

                  <HeaderTitle>Selecione um tipo</HeaderTitle>
                </HeaderContent>
              </ProductDetails>
            )}
            data={productType.data}
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
  productType: state.productType,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductTypeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductType);
