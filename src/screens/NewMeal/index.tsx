import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";

import {
  BoxButton,
  BoxForm,
  BoxInput,
  BoxIsInDiet,
  BoxMain,
  BoxTextArea,
  BoxYesNo,
  Container,
  Label,
} from "./styles";

import { HeaderScreen } from "@components/HeaderScreen";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ButtonIsInDiet } from "@components/ButtonIsInDiet";
import { newMeal } from "@storage/meals/newMeal";
import { AppError } from "@utils/AppError";

export function NewMeal() {
  const [mealName, setMealName] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [mealDate, setMealDate] = useState("");
  const [mealHour, setMealHour] = useState("");
  const [isInDiet, setIsInDiet] = useState(Boolean);
  const [yesButton, setYesButton] = useState(false);
  const [noButton, setNoButton] = useState(false);
  const navigation = useNavigation();

  function hangleBackNavigate() {
    navigation.navigate("home");
  }

  function handleMealDate(hour: string) {
    const dateText = hour
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{2})(\d)/, "$1/$2/$3");

    if (mealDate.length < 10) {
      setMealDate(dateText);
    }
  }

  function handleMealHour(hour: string) {
    const hourText = hour.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1:$2");

    if (mealHour.length < 5) {
      setMealHour(hourText);
    }
  }

  function handlePressYes() {
    setIsInDiet(true);
    setYesButton(true);
    setNoButton(false);
  }

  function handlePressNo() {
    setIsInDiet(false);
    setYesButton(false);
    setNoButton(true);
  }

  async function hangleRegisterNewMeal() {
    const mealData = {
      day: mealDate,
      data: [
        {
          hour: mealHour,
          name: mealName,
          description: mealDescription,
          isInDiet,
        },
      ],
    };

    try {
      if (
        mealDate.trim().length === 0 ||
        mealHour.trim().length === 0 ||
        mealName.trim().length === 0 ||
        mealDescription.trim().length === 0 ||
        (yesButton === false && noButton === false)
      ) {
        return Alert.alert(
          "Nova refeição",
          "Informe todos os campos por favor"
        );
      }

      await newMeal(mealData);
      navigation.navigate("feedback", { isInDiet });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova refeição", error.message);
      } else {
        Alert.alert(
          "Nova refeição",
          "Não foi possível cadastrar nova refeição"
        );
        console.error(error);
      }
    }
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
        <BoxForm>
          <BoxInput>
            <Input
              label="Nome"
              placeholder="Digite o nome da refeição"
              value={mealName}
              onChangeText={setMealName}
            />
          </BoxInput>

          <BoxTextArea>
            <Input
              label="Descrição"
              placeholder="Faça uma breve descrição da refeição"
              value={mealDescription}
              onChangeText={setMealDescription}
            />
          </BoxTextArea>

          <BoxInput>
            <Input
              label="Data"
              placeholder="21/07/2023"
              value={mealDate}
              onChangeText={handleMealDate}
            />
            <Input
              label="Hora"
              placeholder="23:23"
              value={mealHour}
              onChangeText={handleMealHour}
            />
          </BoxInput>

          <BoxIsInDiet>
            <Label>Está dentro da dieta?</Label>
            <BoxYesNo>
              <ButtonIsInDiet
                name="Sim"
                type="PRIMARY"
                onPress={handlePressYes}
                checked={yesButton}
              />
              <ButtonIsInDiet
                name="Não"
                type="SECONDARY"
                onPress={handlePressNo}
                checked={noButton}
              />
            </BoxYesNo>
          </BoxIsInDiet>
        </BoxForm>

        <BoxButton>
          <Button name="Cadastrar refeição" onPress={hangleRegisterNewMeal} />
        </BoxButton>
      </BoxMain>
    </Container>
  );
}
