import { useNavigation, useRoute } from "@react-navigation/native";

import { BoxButton, BoxForm, BoxMain, Container } from "./styles";

import { HeaderScreen } from "@components/HeaderScreen";
import { Button } from "@components/Button";

export type MealDataProps = {
  meal: {
    day: string;
    data: {
      name: string;
      hour: string;
      isInDiet: boolean;
      description: string;
    };
  };
};

export function MealDetails() {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    meal: { data, day },
  } = route.params as MealDataProps;

  function hangleBackNavigate() {
    navigation.navigate("home");
  }

  const type = data.isInDiet ? "PRIMARY" : "SECONDARY";

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
