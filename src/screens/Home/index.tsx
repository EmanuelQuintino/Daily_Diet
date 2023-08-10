import { SectionList } from "react-native";
import { useState, useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { HeaderHome } from "@components/HeaderHome";
import { MealPercentage } from "@components/MealPercentage";
import { MealCard } from "@components/MealCard";

import {
  BoxButton,
  BoxSectionList,
  Container,
  LabelButton,
  TextEmptyList,
  TitleSectionList,
} from "./styles";
import { getMeals } from "@storage/meals/getMeals";

export type MealsDataProps = {
  day: string;
  data: {
    meal: string;
    hour: string;
    isInDiet: boolean;
    description: string;
  }[];
}[];

export function Home() {
  const [mealsData, setMealsData] = useState<MealsDataProps>([]);

  const navigation = useNavigation();

  function handleNavigateStatistics() {
    navigation.navigate("statistics");
  }

  function handleNavigateNewMeal() {
    navigation.navigate("newmeal");
  }

  function handleNavigateMealDetails() {
    console.log("Meal Details");
    navigation.navigate("isInDietFeedback");
  }

  async function fetchMeals() {
    const data = await getMeals();
    setMealsData(data);
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <HeaderHome />

      <MealPercentage percentage={90.86} onPress={handleNavigateStatistics} />

      <BoxButton>
        <LabelButton>Refeições</LabelButton>
        <Button
          icon="add"
          name="Nova refeição"
          onPress={handleNavigateNewMeal}
        />
      </BoxButton>

      <BoxSectionList>
        <SectionList
          sections={mealsData}
          keyExtractor={(item, index) => item.hour + index}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({ section: { day } }) => (
            <TitleSectionList>{day}</TitleSectionList>
          )}
          renderItem={({ item }) => (
            <MealCard
              hour={item.hour}
              name={item.meal}
              isInDiet={item.isInDiet}
              onPress={handleNavigateMealDetails}
            />
          )}
          ListEmptyComponent={
            <TextEmptyList>Adicionar nova refeição</TextEmptyList>
          }
        />
      </BoxSectionList>
    </Container>
  );
}
