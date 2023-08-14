import styled from "styled-components/native";

export const ContainerModal = styled.View`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
`;

export const TitleModal = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.VL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-align: center;
  margin: 24px;
`;

export const BoxButton = styled.View`
  flex-direction: row;
  margin-top: 8px;
  gap: 12px;
`;
