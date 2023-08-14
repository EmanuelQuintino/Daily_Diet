import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  min-height: 56px;
  max-height: 56px;
  width: 100%;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: ${({ theme, type }) =>
    type === "SECONDARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_600};
  border: 1px solid
    ${({ theme, type }) => (type === "SECONDARY" ? theme.COLORS.GRAY_600 : "")};
  margin-bottom: 8px;
`;

export const Icon = styled(MaterialIcons)<Props>`
  color: ${({ theme, type }) =>
    type === "SECONDARY" ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};
  font-size: 18px;
`;

export const Text = styled.Text<Props>`
  color: ${({ theme, type }) =>
    type === "SECONDARY" ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
