import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
  ActivityIndicator, AsyncStorage, StatusBar, View,
} from 'react-native';

export default class Initial extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  async componentDidMount() {
    // await AsyncStorage.clear();
    const { navigation } = this.props;
    const token = await AsyncStorage.getItem('@pizza:token');
    navigation.navigate(token ? 'App' : 'Auth');
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
