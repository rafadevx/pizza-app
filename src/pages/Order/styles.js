import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Field = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  margin-bottom: 15px;
  shadow-color: #d3d3d3;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 1;
`;

export const AddressDetails = styled.View`
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

export const NoteText = styled(Field)`
  background: #fff;
  border-radius: 4px;
  align-self: stretch;
  height: 120px;
  margin-horizontal: 15px;
  padding: 15px;
`;

export const ZipText = styled(Field)`
  background: #fff;
  border-radius: 4px;
  align-self: stretch;
  margin-horizontal: 15px;
  padding: 15px;
`;

export const StreetArea = styled.View`
  flex-direction: row;
  margin-horizontal: 15px;
`;

export const StreetText = styled(Field)`
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  flex: 8;
  margin-right: 10px;
`;

export const StreetNumber = styled(Field)`
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  flex: 2;
`;

export const DistrictText = styled(Field)`
  background: #fff;
  border-radius: 4px;
  align-self: stretch;
  margin-horizontal: 15px;
  padding: 15px;
`;

export const FinishButton = styled.TouchableOpacity`
  border-radius: 40px;
  background: #e5293e;
  align-items: center;
  padding: 10px 20px;
  flex-direction: row;
  align-self: flex-end;
  margin-right: 15px;
`;

export const FinishText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
  text-transform: uppercase;
`;
