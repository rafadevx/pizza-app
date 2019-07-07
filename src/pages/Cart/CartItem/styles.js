import styled from 'styled-components/native';

export const Container = styled.View`
  margin-horizontal: 15px;
  margin-bottom: 15px;
  shadow-color: #d3d3d3;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 1;
  background: #fff;
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
  border-radius: 3px;
`;

export const ItemImage = styled.Image`
  height: 78px;
  width: 79px;
  margin-right: 10px;
`;

export const ItemInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemDescription = styled.View`
  flex: 1;
`;

export const ItemName = styled.Text`
  font-size: 12px;
  color: #0b2031;
  margin-bottom: 5px;
`;

export const ItemSize = styled.Text`
  font-size: 11px;
  color: #706e7b;
  margin-bottom: 5px;
`;

export const ItemPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #0b2031;
`;

export const RemoveButton = styled.TouchableOpacity`
  margin-left: 10px;
`;
