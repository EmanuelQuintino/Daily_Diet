import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const TitleFeedback = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`;

export const TextFeedback = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-top: 8px;
`;

export const BoxButton = styled.View`
  width: 220px;
`;

export const ImageFeedback = styled.Image`
  width: 224px;
  height: 288px;
  margin: 36px 0;
`;
