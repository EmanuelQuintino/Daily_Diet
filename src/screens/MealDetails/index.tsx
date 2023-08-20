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
import { useEffect, useState } from "react";
import { getMealByDayHours } from "@storage/meals/getMealByDayHour";

export type MealDataProps = {
  day: string;
  data: {
    name: string;
    hour: string;
    isInDiet: boolean;
    description: string;
  };
};

export function MealDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const [isModalVisible, setModalVisible] = useState(false);
  const [meal, setMeal] = useState<MealDataProps>();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const { dayHour } = route.params as { dayHour: string };
  const [day, hour] = dayHour.split("-");

  function handleBackNavigate() {
    navigation.navigate("home");
  }

  function handleEditNavigate() {
    navigation.navigate("editmeal", { day, data: meal!.data });
  }

  async function handleDeleteMeal() {
    try {
      await deleteMeal(day, hour);
      navigation.navigate("home");
      toggleModal();
    } catch (error) {
      console.error(error);
      Alert.alert("Excluir refeição", "Não foi possível excluir refeição");
    }
  }

  async function fetchMeal() {
    try {
      const mealData = await getMealByDayHours(day, hour);
      setMeal(mealData);
    } catch (error) {
      console.error(error);
      Alert.alert("Obter refeição", "Não foi possível obter refeição");
    }
  }

  // console.log(meal);

  useEffect(() => {
    fetchMeal();
  }, []);

  const type = meal?.data.isInDiet ? "PRIMARY" : "SECONDARY";

  return (
    <Container type={type}>
      <HeaderScreen type={type} title="Refeição" onPress={handleBackNavigate} />
      <ModalDelete
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        handleDeleteMeal={handleDeleteMeal}
      />
      <BoxMain>
        <BoxDetails>
          <Name>{meal?.data.name}</Name>
          <Paragraph>{meal?.data.description}</Paragraph>

          <Date>Data e hora</Date>
          <Paragraph>
            {day} às {meal?.data.hour}
          </Paragraph>

          {meal?.data.isInDiet ? (
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
          <Button
            icon="edit"
            name="Editar refeição"
            onPress={handleEditNavigate}
          />
          <Button
            icon="delete"
            name="Excluir refeição"
            type="SECONDARY"
            onPress={toggleModal}
          />
        </BoxButton>
      </BoxMain>
    </Container>
  );
}
