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
import Background from '~/assets/images/background.png';

export default class Login extends Component {
  componentDidMount() {}

  state = {
    email: '',
    password: '',
  };

  handleLogin = () => {};

  render() {
    const { navigation } = this.props;
    return (
      <BackgroundImage source={Background} resizeMode="cover">
        <LinearGradient locations={[0.1, 1]} colors={['transparent', '#000']} style={{ flex: 1 }}>
          <Container>
            <Logo source={Pizza} />
            <Input
              placeholder="Seu e-mail"
              autoCapitalize="none"
              value={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              placeholder="Senha secreta"
              secureTextEntry
              autoCapitalize="none"
              value={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button onPress={() => navigation.navigate('App')}>
              <TextButton>Entrar</TextButton>
            </Button>
            <ButtonCreate onPress={() => navigation.navigate('Signup')}>
              <TextButton>Criar conta gratuita</TextButton>
            </ButtonCreate>
          </Container>
        </LinearGradient>
      </BackgroundImage>
    );
  }
}
