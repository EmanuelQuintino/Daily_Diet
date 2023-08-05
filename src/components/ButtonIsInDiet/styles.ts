import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonStyleProps;
  checked?: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  width: 100%;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 56px;

  background: ${({ theme, type, checked }) =>
    checked
      ? type === "SECONDARY"
        ? theme.COLORS.RED_LIGHT
        : theme.COLORS.GREEN_LIGHT
      : theme.COLORS.GRAY_200};

  border: ${({ theme, type, checked }) =>
    checked
      ? `1px solid ${
          type === "SECONDARY" ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK
        }`
      : "none"};
`;

const iconSize = 8;
export const Icon = styled.View<Props>`
  width: ${iconSize}px;
  height: ${iconSize}px;
  border-radius: ${iconSize}px;
  background: ${({ theme, type }) =>
    type === "SECONDARY" ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK};
`;

export const Text = styled.Text<Props>`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-weight: 700;
`;
