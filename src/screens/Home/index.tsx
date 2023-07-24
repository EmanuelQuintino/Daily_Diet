import { SectionList } from "react-native";
import { useState, useEffect } from "react";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
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

type MealsDataProps = {
  day: string;
  data: {
    hour: string;
    meal: string;
    isInDiet: boolean;
  }[];
}[];

export function Home() {
  const [mealsData, setMealsData] = useState<MealsDataProps>([]);
  function handleNavigateMealsStatistics() {
    console.log("Meals Statistics");
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

  useEffect(() => {
    setMealsData(data);
  }, []);

  return (
    <Container>
      <Header />

      <MealPercentage percentage={90.86} />

      <BoxButton>
        <LabelButton>Refeições</LabelButton>
        <Button
          icon="add"
          name="Nova refeição"
          onPress={handleNavigateMealsStatistics}
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
