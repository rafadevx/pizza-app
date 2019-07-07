import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import PropTypes from 'prop-types';

import api from '~/services/api';

import {
  BackgroundImage,
  Container,
  Logo,
  Input,
  Button,
  TextButton,
  TextMessage,
  ButtonCreate,
} from './styles';

import BackgroundHeader from '~/assets/images/header-background.png';

import Pizza from '~/assets/images/logo.png';

export default class Signup extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
    }).isRequired,
  };

  state = {
    name: '',
    email: '',
    password: '',
    message: '',
  };

  componentDidMount() {}

  handleCreateUser = async () => {
    const { navigation } = this.props;
    try {
      await api.post('/signup', this.state);
      this.setState({
        name: '',
        email: '',
        password: '',
        message: 'Usuário criado com sucesso!',
      });
      navigation.goBack();
    } catch (err) {
      this.setState({ message: err.response.data.error });
    }
  };

  render() {
    const { navigation } = this.props;
    const {
      name, email, password, message,
    } = this.state;
    return (
      <BackgroundImage source={BackgroundHeader} resizeMode="cover">
        <LinearGradient
          locations={[0.1, 1]}
          colors={['transparent', '#000']}
          style={{ flex: 1 }}
        >
          <Container>
            <Logo source={Pizza} />
            {!!message && <TextMessage>{message}</TextMessage>}
            <Input
              placeholder="Nome completo"
              autoCapitalize="none"
              autoCorrect={false}
              value={name}
              onChangeText={text => this.setState({ name: text })}
            />
            <Input
              placeholder="Seu e-mail"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              placeholder="Senha secreta"
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button onPress={this.handleCreateUser}>
              <TextButton>Criar conta</TextButton>
            </Button>
            <ButtonCreate onPress={() => navigation.goBack()}>
              <TextButton>Já tenho login</TextButton>
            </ButtonCreate>
          </Container>
        </LinearGradient>
      </BackgroundImage>
    );
  }
}
