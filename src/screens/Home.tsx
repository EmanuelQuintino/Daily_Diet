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
  function handleNavigateMealsDetails() {
    console.log("Meals");
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
  ];

  useEffect(() => {
    // setMealsData(data);
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
          onPress={handleNavigateMealsDetails}
        />
      </BoxButton>

      <MealCard
        hour={"20:20"}
        name={"item meal wdagda gdaga g o iadg ifsgngsfog"}
        isInDiet={true}
      />
      <MealCard
        hour={"20:40"}
        name={"da gdaga goiad da gdaga g oiad"}
        isInDiet={false}
      />

      <BoxSectionList>
        <SectionList
          sections={mealsData}
          keyExtractor={(item, index) => item.hour + index}
          renderSectionHeader={({ section: { day } }) => (
            <TitleSectionList>{day}</TitleSectionList>
          )}
          renderItem={({ item }) => (
            <MealCard
              hour={item.hour}
              name={item.meal}
              isInDiet={item.isInDiet}
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
