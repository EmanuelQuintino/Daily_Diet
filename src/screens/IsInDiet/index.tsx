import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

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
  const theme = useTheme();

  function handleNavigateHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <TitleFeedback>Continue assim!</TitleFeedback>
      <TextFeedback>
        Você continua{" "}
        <Text style={{ fontFamily: theme.FONT_FAMILY.BOLD }}>
          dentro da dieta.
        </Text>{" "}
        Muito bem!
      </TextFeedback>
      <BoxButton>
        <ImageFeedback source={imageFeedbackIn} />
        <Button name="Ir para página inicial" onPress={handleNavigateHome} />
      </BoxButton>
    </Container>
  );
}
