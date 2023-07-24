import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";
import { ArrowLeft } from "phosphor-react-native";
import { MealPercentageProps } from "./index";
import { TouchableOpacity } from "react-native";
import { TouchableOpacityProps } from "react-native";

export type BackButtonProps = TouchableOpacityProps & {
  backButton?: boolean;
};

export const Container = styled.View<MealPercentageProps>`
  align-items: center;
  justify-content: center;
  background: ${({ theme, percentage, goal = 70 }) =>
    percentage > goal ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  height: 102px;
  width: 100%;
  border-radius: 8px;
  margin-top: 32px;
  padding: 8px;
  position: relative;
`;

export const ButtonContainer = styled(TouchableOpacity)<BackButtonProps>`
  position: absolute;
  top: 8px;
  ${({ backButton }) => (backButton ? "left: 8px;" : "right: 8px;")}
`;

export const ArrowIcon = styled(ArrowUpRight).attrs<MealPercentageProps>(
  ({ theme, percentage, goal = 70 }) => ({
    size: 24,
    color: percentage > goal ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)<MealPercentageProps>``;

export const ArrowIconBackButton = styled(ArrowLeft).attrs<MealPercentageProps>(
  ({ theme, percentage, goal = 70 }) => ({
    size: 24,
    color: percentage > goal ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)<MealPercentageProps>``;

export const PercentageText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const MealsText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;
