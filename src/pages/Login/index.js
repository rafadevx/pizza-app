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

export default class Login extends Component {
  componentDidMount() {}

  render() {
    return (
      <BackgroundImage source={require('../../assets/images/background.png')} resizeMode="cover">
        <LinearGradient locations={[0.1, 1]} colors={['transparent', '#000']} style={{ flex: 1 }}>
          <Container>
            <Logo source={Pizza} />
            <Input placeholder="Seu e-mail" />
            <Input placeholder="Senha secreta" />
            <Button onPress={() => {}}>
              <TextButton>Entrar</TextButton>
            </Button>
            <ButtonCreate>
              <TextButton>Criar conta gratuita</TextButton>
            </ButtonCreate>
          </Container>
        </LinearGradient>
      </BackgroundImage>
    );
  }
}
