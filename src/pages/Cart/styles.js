import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Loading = styled.ActivityIndicator``;

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
  padding-horizontal: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

export const HeaderInfo = styled.View`
  flex-direction: row;
  align-items: center;
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

export const TotalValue = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const FooterArea = styled.View`
  width: 100%;
  padding-horizontal: 15px;
  justify-content: space-between;
  flex-direction: row;
`;

export const MoreButton = styled.TouchableOpacity`
  border-radius: 50px;
  background: lightgray;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`;

export const FinishButton = styled.TouchableOpacity`
  border-radius: 40px;
  background: #e5293e;
  align-items: center;
  padding: 10px 20px;
  flex-direction: row;
`;

export const FinishText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
  text-transform: uppercase;
`;
