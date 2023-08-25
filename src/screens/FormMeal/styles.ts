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
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  margin-top: -24px;
  background: ${({ theme }) => theme.COLORS.WHITE};
`;

export const BoxForm = styled.View`
  flex: 1;
  margin-top: 24px;
  flex-direction: column;
  gap: 48px;
`;

export const BoxInput = styled.View`
  flex: 1;
  flex-direction: row;
  gap: 24px;
  min-height: 56px;
  max-height: 56px;
  width: 100%;
`;

export const BoxTextArea = styled.View`
  flex: 1;
  min-height: 120px;
  max-height: 120px;
`;

export const BoxIsInDiet = styled.View``;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const BoxYesNo = styled.View`
  flex: 1;
  flex-direction: row;
  gap: 8px;
  min-height: 56px;
  max-height: 56px;
  width: 100%;
  margin-top: 8px;
`;

export const BoxButton = styled.View`
  width: 100%;
  margin-top: 42px;
`;
