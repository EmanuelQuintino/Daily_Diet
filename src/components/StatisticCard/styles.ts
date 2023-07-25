import styled from "styled-components/native";

export type StyleProps = "PRIMARY" | "NEUTRAL" | "SECONDARY";

type Props = {
  type: StyleProps;
};

export const Container = styled.View<Props>`
  flex: 1;
  width: 100%;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 40px;
  /* margin-bottom: 56px; */
  background: ${({ theme, type }) =>
    type === "PRIMARY"
      ? theme.COLORS.GREEN_MID
      : type === "SECONDARY"
      ? theme.COLORS.RED_MID
      : type === "NEUTRAL"
      ? theme.COLORS.GRAY_500
      : ""};
`;

export const Data = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
