import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useState, useCallback } from "react";

import { MealPercentage } from "@components/MealPercentage";
import { StatisticCard } from "@components/StatisticCard";
import { getMeals } from "@storage/meals/getMeals";

import {
  BoxMain,
  BoxNeutral,
  BoxPrimarySecondary,
  Container,
  Title,
} from "./styles";

export function Statistics() {
  const navigation = useNavigation();
  const [isDietCount, setIsDietCount] = useState(0);
  const [isNotDietCount, setIsNotDietCount] = useState(0);
  const [totalMeals, setTotalMeals] = useState(0);
  const [totalMealsSequence, setTotalMealsSequence] = useState(0);
  const [percentageIsDiet, setPercentageIsDiet] = useState("");

  function hangleBackNavigate() {
    navigation.navigate("home");
  }

  async function fetchMeals() {
    const data = await getMeals();

    let trueCount = 0;
    let falseCount = 0;
    let sequenceTrue = 0;
    let sequenceTrueAux = 0;

    data.forEach((item) => {
      item.data.forEach((meal) => {
        if (meal.isInDiet === true) {
          trueCount++;
          sequenceTrueAux++;
        } else if (meal.isInDiet === false) {
          falseCount++;

          if (sequenceTrue < sequenceTrueAux) {
            sequenceTrue = sequenceTrueAux;
          }
          sequenceTrueAux = 0;
        }
      });
    });

    setIsDietCount(trueCount);
    setIsNotDietCount(falseCount);
    setTotalMeals(trueCount + falseCount);
    setTotalMealsSequence(sequenceTrue);
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
      <MealPercentage
        percentage={Number(percentageIsDiet)}
        backButton
        onPress={hangleBackNavigate}
      />

      <BoxMain>
        <Title>Estatísticas gerais</Title>

        <BoxNeutral>
          <StatisticCard
            data={String(totalMealsSequence)}
            title="melhor sequência de pratos dentro da dieta"
            type="NEUTRAL"
          />
        </BoxNeutral>

        <BoxNeutral>
          <StatisticCard
            data={String(totalMeals)}
            title="refeições registradas"
            type="NEUTRAL"
          />
        </BoxNeutral>

        <BoxPrimarySecondary>
          <StatisticCard
            data={String(isDietCount)}
            title="refeições dentro da dieta"
            type="PRIMARY"
          />

          <StatisticCard
            data={String(isNotDietCount)}
            title="refeições fora da dieta"
            type="SECONDARY"
          />
        </BoxPrimarySecondary>
      </BoxMain>
    </Container>
  );
}
