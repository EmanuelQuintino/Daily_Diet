import { useNavigation } from "@react-navigation/native";
import { Button } from "@components/Button";
import imageFeedbackIn from "../../assets/imageFeedbackIn.png";
import {
  BoxButton,
  Container,
  ImageFeedback,
  TextFeedback,
  TitleFeedback,
} from "./styles";

export function IsInDiet() {
  const navigation = useNavigation();

  function handleNavigateHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <TitleFeedback>Continue assim!</TitleFeedback>
      <TextFeedback>Você continua dentro da dieta. Muito bem!</TextFeedback>
      <BoxButton>
        <ImageFeedback source={imageFeedbackIn} />
        <Button name="Ir para página inicial" onPress={handleNavigateHome} />
      </BoxButton>
    </Container>
  );
}
