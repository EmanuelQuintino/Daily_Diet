import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin: 32px 0 12px;
`;

export const BoxNeutral = styled.View`
  width: 100%;
  min-height: 92px;
  max-height: 92px;
`;

export const BoxPrimarySecondary = styled.View`
  width: 100%;
  min-height: 112px;
  max-height: 112px;
  flex-direction: row;
  gap: 12px;
`;
