import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

const imageSize = 52;

export const ImageContainer = styled.View`
  width: ${imageSize}px;
  height: ${imageSize}px;
  overflow: hidden;
  border: 4px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: ${imageSize}px;
`;

export const ImagePerfil = styled.Image`
  width: 100%;
  height: 100%;
`;
