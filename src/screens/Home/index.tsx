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

export type MealDataProps = {
  day: string;
  data: {
    name: string;
    hour: string;
    isInDiet: boolean;
    description: string;
  };
};

export type MealsDataProps = {
  day: string;
  data: {
    name: string;
    hour: string;
    isInDiet: boolean;
    description: string;
  }[];
}[];

export function Home() {
  const [mealsData, setMealsData] = useState<MealsDataProps>([]);
  const [percentageIsDiet, setPercentageIsDiet] = useState("");

  const navigation = useNavigation();

  function handleNavigateStatistics() {
    navigation.navigate("statistics");
  }

  function handleNavigateNewMeal() {
    navigation.navigate("newmeal");
  }

  function handleNavigateMealDetails(day: string, hour: string) {
    navigation.navigate("mealdetails", { dayHour: `${day}-${hour}` });
  }

  async function fetchMeals() {
    const data = await getMeals();
    setMealsData(data);

    let trueCount = 0;
    let falseCount = 0;

    data.forEach((item) => {
      item.data.forEach((meal) => {
        if (meal.isInDiet === true) {
          trueCount++;
        } else if (meal.isInDiet === false) {
          falseCount++;
        }
      });
    });

    setPercentageIsDiet(
      ((trueCount / (trueCount + falseCount)) * 100).toFixed(2)
    );
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <HeaderHome />

      <MealPercentage
        percentage={Number(percentageIsDiet)}
        onPress={handleNavigateStatistics}
      />

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
            <TitleSectionList>
              {day.split("/")[0]}.{day.split("/")[1]}.
              {String(day.split("/")[2]).slice(-2)}
            </TitleSectionList>
          )}
          renderItem={({ item, section }) => (
            <MealCard
              hour={item.hour}
              name={item.name}
              isInDiet={item.isInDiet}
              onPress={() => handleNavigateMealDetails(section.day, item.hour)}
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
