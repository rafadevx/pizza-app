import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  BackgroundImage,
  Container,
  Logo,
  Input,
  Button,
  TextButton,
  ButtonCreate,
} from './styles';

import Pizza from '~/assets/images/logo.png';

export default class Signup extends Component {
  componentDidMount() {}

  render() {
    const { navigation } = this.props;
    return (
      <BackgroundImage source={require('../../assets/images/background.png')} resizeMode="cover">
        <LinearGradient locations={[0.1, 1]} colors={['transparent', '#000']} style={{ flex: 1 }}>
          <Container>
            <Logo source={Pizza} />
            <Input placeholder="Nome completo" />
            <Input placeholder="Seu e-mail" />
            <Input placeholder="Senha secreta" />
            <Button onPress={() => {}}>
              <TextButton>Criar conta</TextButton>
            </Button>
            <ButtonCreate onPress={() => navigation.navigate('Login')}>
              <TextButton>Já tenho login</TextButton>
            </ButtonCreate>
          </Container>
        </LinearGradient>
      </BackgroundImage>
    );
  }
}
