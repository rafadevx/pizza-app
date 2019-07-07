import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import PropTypes from 'prop-types';

import { Text, AsyncStorage } from 'react-native';

import api from '~/services/api';

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

class Login extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigation: PropTypes.func,
    }).isRequired,
  };

  state = {
    email: '',
    password: '',
    loading: false,
    error: false,
  };

  checkUserExists = async () => {
    const { data } = await api.post('/signin', this.state);

    return data.token;
  };

  signIn = async () => {
    const { navigation } = this.props;
    this.setState({ loading: true });
    try {
      const token = await this.checkUserExists();
      await AsyncStorage.setItem('@pizza:token', token);
      navigation.navigate('App');
    } catch (err) {
      this.setState({ loading: false, error: true });
      console.tron.log(err.response.data.error);
    }
  };

  render() {
    const { navigation } = this.props;
    const { email, password, error } = this.state;
    return (
      <BackgroundImage source={Background} resizeMode="cover">
        <LinearGradient locations={[0.1, 1]} colors={['transparent', '#000']} style={{ flex: 1 }}>
          <Container>
            <Logo source={Pizza} />
            {error && <Text>Problema no login</Text>}
            <Input
              placeholder="Seu e-mail"
              autoCapitalize="none"
              value={email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              placeholder="Senha secreta"
              secureTextEntry
              autoCapitalize="none"
              value={password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button onPress={this.signIn}>
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

export default Login;
