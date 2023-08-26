import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

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
import { MealDataProps } from "@screens/MealDetails";
import { updateMeal } from "@storage/meals/updateMeal";

export function FormMeal() {
  const [mealName, setMealName] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [mealDay, setMealDay] = useState("");
  const [mealDayToUpdate, setMealDayToUpdate] = useState("");
  const [mealHourToUpdate, setMealHourToUpdate] = useState("");
  const [mealHour, setMealHour] = useState("");
  const [isInDiet, setIsInDiet] = useState(Boolean);
  const [yesButton, setYesButton] = useState(false);
  const [noButton, setNoButton] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  function hangleBackNavigate() {
    navigation.goBack();
  }

  function handleMealDay(day: string) {
    let formatDay = day.replace(/\D/g, "");

    if (formatDay.length >= 3 && formatDay.length <= 4) {
      formatDay = `${formatDay.slice(0, 2)}/${formatDay.slice(2)}`;
    } else if (formatDay.length >= 5 && formatDay.length <= 7) {
      formatDay = `${formatDay.slice(0, 2)}/${formatDay.slice(
        2,
        4
      )}/${formatDay.slice(4)}`;
    } else if (formatDay.length > 7) {
      formatDay = `${formatDay.slice(0, 2)}/${formatDay.slice(
        2,
        4
      )}/${formatDay.slice(4, 8)}`;
    }

    setMealDay(formatDay);
  }

  function handleMealHour(hour: string) {
    let formatHour = hour.replace(/\D/g, "");

    if (formatHour.length >= 3 && formatHour.length <= 4) {
      formatHour = `${formatHour.slice(0, 2)}:${formatHour.slice(2)}`;
    } else if (formatHour.length > 4) {
      formatHour = `${formatHour.slice(0, 2)}:${formatHour.slice(2, 4)}`;
    }

    setMealHour(formatHour);
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
      day: mealDay,
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
        mealDay.trim().length === 0 ||
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

  async function handleUpdateMeal() {
    const mealData = {
      day: mealDay,
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
        mealDay.trim().length === 0 ||
        mealHour.trim().length === 0 ||
        mealName.trim().length === 0 ||
        mealDescription.trim().length === 0 ||
        (yesButton === false && noButton === false)
      ) {
        return Alert.alert(
          "Atualizar refeição",
          "Informe todos os campos por favor"
        );
      }

      await updateMeal(mealDayToUpdate, mealHourToUpdate, mealData);

      Alert.alert("Atualizar refeição", "Refeição atualizada com sucesso!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("home"),
        },
      ]);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Atualizar refeição", error.message);
      } else {
        Alert.alert(
          "Atualizar refeição",
          "Não foi possível atualizar refeição"
        );
        console.error(error);
      }
    }
  }

  function verifyRouteParamsToUpdate() {
    if (route.params) {
      setIsUpdate(true);

      const { day, data } = route.params as MealDataProps;

      setMealName(data.name);
      setMealDescription(data.description);
      setMealDay(day);
      setMealHour(data.hour);
      setMealDayToUpdate(day);
      setMealHourToUpdate(data.hour);
      setIsInDiet(data.isInDiet);

      if (data.isInDiet) {
        setYesButton(true);
        setNoButton(false);
      } else {
        setYesButton(false);
        setNoButton(true);
      }
    }
  }

  useEffect(() => {
    verifyRouteParamsToUpdate();
  }, []);

  const type = "NEUTRAL";

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Container type={type}>
          <HeaderScreen
            type={type}
            title={isUpdate ? "Editar refeição" : "Nova refeição"}
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
                  value={mealDay}
                  onChangeText={handleMealDay}
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
              {isUpdate ? (
                <Button name="Salvar alterações" onPress={handleUpdateMeal} />
              ) : (
                <Button
                  name="Cadastrar refeição"
                  onPress={hangleRegisterNewMeal}
                />
              )}
            </BoxButton>
          </BoxMain>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
