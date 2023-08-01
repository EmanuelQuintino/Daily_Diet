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
  background: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  margin-top: -24px;
`;

export const BoxForm = styled.View`
  flex: 1;
  margin-top: 12px;
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
  width: 100%;
`;
