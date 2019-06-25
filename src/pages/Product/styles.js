import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const ProductList = styled.FlatList``;

export const ProductDetails = styled.View`
  padding: 0 0 20px;
  align-items: center;
  padding-top: ${getStatusBarHeight() + 30}px;
  width: 100%;
`;

export const Background = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: ${160 + getStatusBarHeight()}px;
`;

export const HeaderContent = styled.View`
  padding-horizontal: 20px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const HistoryButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const BagButton = styled.TouchableOpacity`
  background: #e5293e;
  border-radius: 25px;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`;
