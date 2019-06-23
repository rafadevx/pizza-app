import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  padding: 30px;
  background: rgba(0, 0, 0, 0.4);
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const Logo = styled.Image`
  height: 72px;
  width: 72px;
  margin-bottom: 40px;
  align-self: center;
`;

export const Input = styled.TextInput`
  border-radius: 4px;
  padding-horizontal: 20px;
  padding-vertical: 10px;
  background: #fff;
  height: 40px;
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  border-radius: 4px;
  justify-content: center;
  background: #e5293e;
  height: 40px;
  margin-top: 15px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  align-self: center;
`;

export const ButtonCreate = styled.TouchableOpacity`
  height: 40px;
  margin-top: 20px;
`;
