import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Loading = styled.ActivityIndicator``;

export const OrderFList = styled.FlatList``;

export const OrderDetails = styled.View`
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
  padding-horizontal: 15px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  padding-horizontal: 5px;
  align-items: center;
  justify-content: center;
  height: 20px;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-left: 10px;
`;
