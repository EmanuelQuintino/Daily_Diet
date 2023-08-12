import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export type StyleProps = "PRIMARY" | "NEUTRAL" | "SECONDARY";

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
  height: 100%;
  padding: 24px 24px 8px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  margin-top: -24px;
  justify-content: space-between;
  background: ${({ theme }) => theme.COLORS.WHITE};
`;

export const BoxDetails = styled.View`
  flex: 1;
  margin-top: 24px;
  flex-direction: column;
  gap: 8px;
`;

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.VL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Date = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-top: 16px;
`;

export const Paragraph = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const BoxStatus = styled.View`
  padding: 8px;
  width: 160px;
  border-radius: 24px;
  margin-top: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: ${({ theme }) => theme.COLORS.GRAY_200};
`;

const iconSize = 8;
export const Icon = styled.View<Props>`
  width: ${iconSize}px;
  height: ${iconSize}px;
  border-radius: ${iconSize}px;
  background: ${({ theme, type }) =>
    type === "SECONDARY" ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK};
`;

export const TextStatus = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const BoxButton = styled.View`
  width: 100%;
`;
