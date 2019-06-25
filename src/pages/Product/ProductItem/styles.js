import styled from 'styled-components/native';

export const Container = styled.View`
  margin-horizontal: 20px;
  margin-bottom: 15px;
  shadow-color: #d3d3d3;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 1;
`;

export const ProductButton = styled.TouchableOpacity`
  background: #fff;
  flex-direction: row;
  border-radius: 4px;
  padding: 10px;
`;

export const Cover = styled.Image`
  height: 79px;
  width: 79px;
  border-radius: 10px;
`;

export const ProductInfo = styled.View`
  margin-left: 10px;
  justify-content: space-around;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #0b2031;
`;

export const Description = styled.Text`
  font-size: 11px;
  color: #706e7b;
`;

export const Time = styled.Text`
  font-size: 10px;
  color: #706e7b;
`;
