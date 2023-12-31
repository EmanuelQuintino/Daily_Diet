import styled from "styled-components/native";

export type StyleProps = "PRIMARY" | "NEUTRAL" | "SECONDARY";

type Props = {
  type: StyleProps;
};

export const Container = styled.View<Props>`
  width: 100%;
  padding: 20px;
  margin-top: 12px;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex: 1;
  background: ${({ theme, type }) =>
    type === "PRIMARY"
      ? theme.COLORS.GREEN_LIGHT
      : type === "SECONDARY"
      ? theme.COLORS.RED_LIGHT
      : type === "NEUTRAL"
      ? theme.COLORS.GRAY_100
      : ""};
`;

export const Data = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-size: ${({ theme }) => theme.FONT_SIZE.VL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
