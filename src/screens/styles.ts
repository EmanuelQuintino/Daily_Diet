import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  padding: 24px;
`;

export const BoxButton = styled.View`
  margin-top: 32px;
  width: 100%;
  gap: 8px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
`;
