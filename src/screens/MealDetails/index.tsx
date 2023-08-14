import { useNavigation, useRoute } from "@react-navigation/native";

import {
  BoxButton,
  BoxDetails,
  BoxMain,
  BoxStatus,
  Container,
  Date,
  Icon,
  Name,
  Paragraph,
  TextStatus,
} from "./styles";

import { HeaderScreen } from "@components/HeaderScreen";
import { Button } from "@components/Button";
import { Alert } from "react-native";
import { deleteMeal } from "@storage/meals/deleteMeal";
import { ModalDelete } from "@components/ModalDelete";

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

  function handleBackNavigate() {
    navigation.navigate("home");
  }

  async function handleDeleteMeal() {
    try {
      Alert.alert("", "Deseja realmente excluir o registro da refeição?", [
        { text: "Não", style: "cancel" },
        {
          text: "Sim",
          style: "default",
          onPress: async () => {
            await deleteMeal(day, data.hour);
            navigation.navigate("home");
          },
        },
      ]);
    } catch (error) {
      console.error(error);
      Alert.alert("Excluir refeição", "Não foi possível excluir refeição");
    }
  }

  const type = data.isInDiet ? "PRIMARY" : "SECONDARY";

  return (
    <Container type={type}>
      <HeaderScreen type={type} title="Refeição" onPress={handleBackNavigate} />
      <BoxMain>
        <BoxDetails>
          <Name>{data.name}</Name>
          <Paragraph>{data.description}</Paragraph>

          <Date>Data e hora</Date>
          <Paragraph>
            {day} às {data.hour}
          </Paragraph>

          {data.isInDiet ? (
            <BoxStatus>
              <Icon type="PRIMARY" />
              <TextStatus>dentro da dieta</TextStatus>
            </BoxStatus>
          ) : (
            <BoxStatus>
              <Icon type="SECONDARY" />
              <TextStatus>fora da dieta</TextStatus>
            </BoxStatus>
          )}
        </BoxDetails>

        <BoxButton>
          <Button icon="edit" name="Editar refeição" onPress={() => {}} />
          <Button
            icon="delete"
            name="Excluir refeição"
            type="SECONDARY"
            onPress={handleDeleteMeal}
          />
        </BoxButton>
      </BoxMain>
    </Container>
  );
}
