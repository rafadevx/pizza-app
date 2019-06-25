import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Background = styled.ImageBackground`
  position: absolute;
  width: 100%;
  flex: 1;
  height: ${160 + getStatusBarHeight()}px;
  margin-right: 0;
`;

export const Container = styled.View`
  width: 100%;
  padding-top: ${getStatusBarHeight() + 30}px;
  padding-horizontal: 20px;
  flex-direction: row;
  align-items: center;
  display: flex;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
