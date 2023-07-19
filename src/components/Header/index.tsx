import { Container, ImagePerfil, Logo, ImageContainer } from "./styles";
import logo from "@assets/Logo.png";
import imagePerfil from "@assets/image_perfil.jpg";

export function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <ImageContainer>
        <ImagePerfil source={imagePerfil} />
      </ImageContainer>
    </Container>
  );
}
