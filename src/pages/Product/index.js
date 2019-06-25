import React, { Component } from 'react';

import { Text } from 'react-native';

import {
  Container,
  ProductList,
  ProductDetails,
  Background,
  HistoryButton,
  HeaderTitle,
  BagButton,
  HeaderContent,
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import ProductItem from './ProductItem';

import BackgroundHeader from '~/assets/images/header-background.png';

export default class Product extends Component {
  componentDidMount() {}

  renderItem = ({ item }) => <ProductItem product={item} />;

  render() {
    const data = [1, 2, 3];
    return (
      <Container>
        <ProductList
          ListHeaderComponent={() => (
            <ProductDetails>
              <Background source={BackgroundHeader} />
              <HeaderContent>
                <HistoryButton>
                  <Icon name="history" size={24} color="#FFF" />
                </HistoryButton>

                <HeaderTitle>Pizzaria Don Juan</HeaderTitle>
                <BagButton>
                  <Icon name="shopping-bag" size={20} color="#FFF" />
                </BagButton>
              </HeaderContent>
            </ProductDetails>
          )}
          data={data}
          keyExtractor={it => String(it)}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}
