import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  padding: 24px;
`;

export const LabelButton = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const BoxButton = styled.View`
  margin-top: 36px;
  width: 100%;
  gap: 8px;
`;

export const BoxSectionList = styled.View`
  width: 100%;
`;

export const TitleSectionList = styled.Text`
  margin-top: 32px;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const TextEmptyList = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin: 50% auto;
`;
