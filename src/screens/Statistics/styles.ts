import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleProps } from "@screens/NewMeal/styles";

type Props = {
  type: StyleProps;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background: ${({ theme, type = "NEUTRAL" }) =>
    type === "PRIMARY"
      ? theme.COLORS.GREEN_LIGHT
      : type === "SECONDARY"
      ? theme.COLORS.RED_LIGHT
      : type === "NEUTRAL"
      ? theme.COLORS.GRAY_200
      : ""};
`;

export const BoxMain = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  padding: 24px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  margin-top: -16px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-top: 8px;
`;

export const BoxNeutral = styled.View`
  width: 100%;
  min-height: 92px;
  max-height: 92px;
`;

export const BoxPrimarySecondary = styled.View`
  width: 100%;
  min-height: 112px;
  max-height: 112px;
  flex-direction: row;
  gap: 12px;
`;
