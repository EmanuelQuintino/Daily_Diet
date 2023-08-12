import { useNavigation } from "@react-navigation/native";

import { BoxButton, BoxForm, BoxMain, Container } from "./styles";

import { HeaderScreen } from "@components/HeaderScreen";
import { Button } from "@components/Button";

export function MealDetails() {
  const navigation = useNavigation();

  function hangleBackNavigate() {
    navigation.navigate("home");
  }

  const type = "NEUTRAL";

  return (
    <Container type={type}>
      <HeaderScreen type={type} title="Refeição" onPress={hangleBackNavigate} />
      <BoxMain>
        <BoxForm></BoxForm>

        <BoxButton>
          <Button icon="edit" name="Editar refeição" onPress={() => {}} />
          <Button icon="edit" name="Excluir refeição" onPress={() => {}} />
        </BoxButton>
      </BoxMain>
    </Container>
  );
}
