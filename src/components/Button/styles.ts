import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled(TouchableOpacity)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  width: 100%;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 18px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
