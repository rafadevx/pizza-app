import React from 'react';

import { Text, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Background, Container, Title } from './styles';

import HeaderBackground from '~/assets/images/header-background.png';

const Header = ({ title }) => (
  <Container>
    <Background source={HeaderBackground} />
    <StatusBar barStyle="light-content" />
    <Icon name="history" size={24} color="#FFF" />
    <Title>{title}</Title>
    <Icon name="shopping-bag" size={24} color="#FFF" />
  </Container>
);

export default Header;
