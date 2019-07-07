import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrderActions from '~/store/ducks/order';

import {
  Container,
  AddressDetails,
  Background,
  HeaderContent,
  HeaderInfo,
  BackButton,
  HeaderTitle,
  TotalValue,
  NoteText,
  ZipText,
  StreetArea,
  StreetText,
  StreetNumber,
  DistrictText,
  FinishButton,
  FinishText,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import BackgroundHeader from '~/assets/images/header-background.png';

class Order extends Component {
  static propTypes = {
    finishOrderRequest: PropTypes.func.isRequired,
    addressRequest: PropTypes.func.isRequired,
    cart: PropTypes.shape({
      subtotal: PropTypes.number,
    }).isRequired,
    order: PropTypes.shape({
      street: PropTypes.string,
      district: PropTypes.string,
    }).isRequired,
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
    }).isRequired,
  };

  state = {
    note: '',
    number: '',
    zip: '',
  };

  componentDidMount() {}

  handleOrder = () => {
    const { finishOrderRequest, navigation } = this.props;
    const { note, number } = this.state;
    finishOrderRequest(note, number);

    navigation.navigate('OrderList');
  };

  handleZip = (zip) => {
    const { addressRequest } = this.props;

    addressRequest(zip);
  };

  render() {
    const { cart, order, navigation } = this.props;
    const { note, number, zip } = this.state;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <AddressDetails>
          <Background source={BackgroundHeader} />
          <HeaderContent>
            <HeaderInfo>
              <BackButton onPress={() => navigation.goBack()}>
                <Icon name="navigate-before" size={20} color="#FFF" />
              </BackButton>

              <HeaderTitle>Realizar Pedido</HeaderTitle>
            </HeaderInfo>
            <TotalValue>{`R$${cart.subtotal.toFixed(2)}`}</TotalValue>
          </HeaderContent>
          <NoteText
            multiline
            numberOfLines={4}
            placeholder="Alguma observação?"
            value={note}
            onChangeText={text => this.setState({ note: text })}
          />
          <ZipText
            placeholder="Qual seu CEP?"
            value={zip}
            onChangeText={text => this.setState({ zip: text })}
            onBlur={e => this.handleZip(e.nativeEvent.text)}
          />
          <StreetArea>
            <StreetText placeholder="Rua" value={order.street} />
            <StreetNumber
              placeholder="N."
              value={number}
              onChangeText={text => this.setState({ number: text })}
            />
          </StreetArea>
          <DistrictText placeholder="Bairro" value={order.district} />
        </AddressDetails>
        <FinishButton onPress={this.handleOrder}>
          <FinishText>Finalizar</FinishText>
          <Icon name="navigate-next" size={20} color="#FFF" />
        </FinishButton>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  order: state.order,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Order);
