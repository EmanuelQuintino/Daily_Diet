import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
  flex: 1;
  min-height: 100%;
  width: 100%;
  border-radius: 8px;
  flex-direction: column;
  gap: 4px;
`;

export const InputText = styled(TextInput)`
  flex: 1;
  min-height: 100%;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
