import React from 'react';

import PropTypes from 'prop-types';

import { withNavigation } from 'react-navigation';

import {
  Container, TypeButton, TypeImage, TypeTitle,
} from './styles';

const TypeItem = ({ type, navigation }) => (
  <Container>
    <TypeButton
      onPress={() => {
        navigation.navigate('ProductSize', { type });
      }}
    >
      <TypeImage
        source={{
          uri: `http://192.168.0.108:3030/files/${type.image}`,
        }}
      />
      <TypeTitle>{type.name}</TypeTitle>
    </TypeButton>
  </Container>
);

TypeItem.propTypes = {
  type: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(TypeItem);
