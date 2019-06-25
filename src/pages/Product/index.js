import React, { Component } from 'react';

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
    const data = [
      {
        id: 1,
        name: 'Pizzas',
        description: 'Mais de 50 sabores de pizza em até 4 tamanhos diferentes',
        image: 'https://www.ofaraopizzaria.com.br/fotos/pizza%20chamada.jpg',
        deliveryTime: '30',
      },
      {
        id: 2,
        name: 'Massas',
        description: '10 tipos de massas com diferentes molhos para te satisfazer',
        image:
          'https://www.blogvidadecasada.com/wp-content/uploads/2018/05/Receitas-de-massa-para-receber-em-casa.png',
        deliveryTime: '30',
      },
      {
        id: 3,
        name: 'Calzones',
        description: 'Calzones super recheados com mais de 50 sabores diferentes',
        image:
          'https://images-gmi-pmc.edge-generalmills.com/9df0ff18-e881-4221-ac91-710b37668b03.jpg',
        deliveryTime: '30',
      },
    ];
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
          keyExtractor={item => String(item.id)}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}
