import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  shadow-color: #d3d3d3;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 1;
`;

export const SizeButton = styled.TouchableOpacity`
  background: #fff;
  padding: 18px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const SizeImage = styled.Image`
  height: 126px;
  width: 130px;
  margin-bottom: 18px;
`;

export const SizeTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #0b2031;
  align-self: center;
`;

export const SizePrice = styled.Text`
  font-size: 16px;
  color: #bbb;
  font-weight: bold;
  margin-bottom: 5px;
`;
