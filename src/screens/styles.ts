import styled from "styled-components/native";

export const Container = styled.View`
  /* flex: 1; */
  background: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const Text = styled.Text`
  color: #000;
  font-size: 32px;
`;
