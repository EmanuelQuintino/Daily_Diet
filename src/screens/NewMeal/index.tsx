import { useNavigation } from "@react-navigation/native";

import { BoxInput, BoxMain, Container } from "./styles";
import { HeaderScreen } from "@components/HeaderScreen";
import { Input } from "@components/Input";

export function NewMeal() {
  const navigation = useNavigation();

  function hangleBackNavigate() {
    navigation.navigate("home");
  }

  const type = "NEUTRAL";

  return (
    <Container type={type}>
      <HeaderScreen
        type={type}
        title="Nova refeição"
        onPress={hangleBackNavigate}
      />
      <BoxMain>
        <BoxInput>
          <Input label="Text" placeholder="Digite seu nome" />
        </BoxInput>
      </BoxMain>
    </Container>
  );
}
