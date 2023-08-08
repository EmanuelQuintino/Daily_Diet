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
  }

  const data = [
    {
      day: "23.07.23",
      data: [
        {
          hour: "20:00",
          meal: "Pizza",
          isInDiet: false,
        },
        {
          hour: "20:00",
          meal: "Burger",
          isInDiet: true,
        },
        {
          hour: "20:00",
          meal: "Risotto",
          isInDiet: true,
        },
      ],
    },
    {
      day: "24.07.23",
      data: [
        {
          hour: "20:00",
          meal: "Pizza",
          isInDiet: true,
        },
        {
          hour: "20:00",
          meal: "Burger",
          isInDiet: false,
        },
        {
          hour: "20:00",
          meal: "Risotto",
          isInDiet: true,
        },
      ],
    },
    {
      day: "25.07.23",
      data: [
        {
          hour: "20:00",
          meal: "Pizza",
          isInDiet: true,
        },
        {
          hour: "20:00",
          meal: "Burger",
          isInDiet: false,
        },
        {
          hour: "20:00",
          meal: "Risotto",
          isInDiet: true,
        },
      ],
    },
  ];

  async function fetchMeals() {
    const data = await getMeals();
    setMealsData(data);
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  console.log(JSON.stringify(mealsData));
  console.log(
    mealsData.sort((a, b) => {
      const [aDay, aMonth, aYear] = a.day.split(".").map(Number);
      const [bDay, bMonth, bYear] = b.day.split(".").map(Number);

      if (aYear !== bYear) {
        return bYear - aYear;
      }
      if (aMonth !== bMonth) {
        return bMonth - aMonth;
      }
      return bDay - aDay;
    })
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
