import { Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { Button } from "@components/Button";
import imageFeedbackIn from "../../assets/imageFeedbackIn.png";
import imageFeedbackOut from "../../assets/imageFeedbackOut.png";
import {
  BoxButton,
  Container,
  ImageFeedback,
  TextFeedback,
  TitleFeedbackIn,
  TitleFeedbackOut,
} from "./styles";

type RouteParams = {
  isInDiet: boolean;
};

export function Feedback() {
  const navigation = useNavigation();
  const theme = useTheme();
  const route = useRoute();
  const { isInDiet } = route.params as RouteParams;

  function handleNavigateHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      {isInDiet ? (
        <TitleFeedbackIn>Continue assim!</TitleFeedbackIn>
      ) : (
        <TitleFeedbackOut>Que pena!</TitleFeedbackOut>
      )}

      {isInDiet ? (
        <TextFeedback>
          Você continua{" "}
          <Text style={{ fontFamily: theme.FONT_FAMILY.BOLD }}>
            dentro da dieta.
          </Text>{" "}
          Muito bem!
        </TextFeedback>
      ) : (
        <TextFeedback>
          Você{" "}
          <Text style={{ fontFamily: theme.FONT_FAMILY.BOLD }}>
            saiu da dieta
          </Text>{" "}
          dessa vez, mas continue se esforçando e não desista!
        </TextFeedback>
      )}

      <BoxButton>
        {isInDiet ? (
          <ImageFeedback source={imageFeedbackIn} />
        ) : (
          <ImageFeedback source={imageFeedbackOut} />
        )}
        <Button name="Ir para página inicial" onPress={handleNavigateHome} />
      </BoxButton>
    </Container>
  );
}
