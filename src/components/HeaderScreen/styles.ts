import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { TouchableOpacityProps } from "react-native";

export type StyleProps = "PRIMARY" | "NEUTRAL" | "SECONDARY";

type Props = {
  type: StyleProps;
};

type BackButtonProps = TouchableOpacityProps;

export const Container = styled.View<Props>`
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 100%;
  position: relative;
  background: ${({ theme, type }) =>
    type === "PRIMARY"
      ? theme.COLORS.GREEN_LIGHT
      : type === "SECONDARY"
      ? theme.COLORS.RED_LIGHT
      : type === "NEUTRAL"
      ? theme.COLORS.GRAY_200
      : ""};
`;

export const ButtonContainer = styled(TouchableOpacity)<BackButtonProps>`
  position: absolute;
  top: 40%;
  left: 24px;
`;

export const ArrowIconBackButton = styled(ArrowLeft).attrs<Props>(
  ({ theme, type }) => ({
    size: 24,
    color:
      type === "PRIMARY"
        ? theme.COLORS.GREEN_DARK
        : type === "SECONDARY"
        ? theme.COLORS.RED_DARK
        : type === "NEUTRAL"
        ? theme.COLORS.GRAY_500
        : "",
  })
)<Props>``;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
