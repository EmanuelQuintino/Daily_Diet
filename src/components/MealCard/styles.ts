import styled from "styled-components/native";

export type StatusProps = {
  isInDiet: boolean;
};

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  min-height: 52px;
  max-height: 52px;
  width: 100%;
  border-radius: 8px;
  margin-top: 12px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 8px 16px 8px 12px;
`;

export const Hour = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin: 4px 8px 4px 0px;
`;

export const ContainerName = styled.View`
  flex: 1;
  min-height: 24px;
  max-height: 24px;
  border-left-width: 1px;
  border-left-color: ${({ theme }) => theme.COLORS.GRAY_400};
  padding: 0 8px;
`;

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

const statusIconSize = 16;
export const StatusIcon = styled.View<StatusProps>`
  background: ${({ theme, isInDiet }) =>
    isInDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  height: ${statusIconSize}px;
  width: ${statusIconSize}px;
  border-radius: ${statusIconSize}px;
`;
