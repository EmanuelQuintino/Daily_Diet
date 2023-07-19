import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  height: 102px;
  width: 100%;
  border-radius: 8px;
  margin-top: 32px;
  padding: 8px;
  position: relative;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  top: 8;
  right: 8;
`;

export const ArrowButton = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))``;

export const PercentageText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const MealsText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
`;
