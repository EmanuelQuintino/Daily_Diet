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
  const [maxMealSequenceTrue, setMaxMealSequenceTrue] = useState(0);
  const [percentageIsDiet, setPercentageIsDiet] = useState("");

  function hangleBackNavigate() {
    navigation.navigate("home");
  }

  async function fetchMeals() {
    const data = await getMeals();

    let trueCount = 0;
    let falseCount = 0;
    let sequenceTrue = 0;
    let maxSequenceTrue = 0;

    data.forEach((item) => {
      item.data.forEach((meal) => {
        if (meal.isInDiet === true) {
          trueCount++;
          sequenceTrue++;

          if (sequenceTrue > maxSequenceTrue) {
            maxSequenceTrue = sequenceTrue;
          }
        } else if (meal.isInDiet === false) {
          falseCount++;
          sequenceTrue = 0;
        }
      });
    });

    setIsDietCount(trueCount);
    setIsNotDietCount(falseCount);
    setTotalMeals(trueCount + falseCount);
    setMaxMealSequenceTrue(maxSequenceTrue);
    setPercentageIsDiet(
      ((trueCount / (trueCount + falseCount)) * 100).toFixed(2)
    );
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  const type = Number(percentageIsDiet) >= 70 ? "PRIMARY" : "SECONDARY";

  return (
    <>
      {percentageIsDiet && (
        <Container type={type}>
          <MealPercentage
            percentage={Number(percentageIsDiet)}
            backButton
            onPress={hangleBackNavigate}
          />

          <BoxMain>
            <Title>Estatísticas gerais</Title>

            <BoxNeutral>
              <StatisticCard
                data={String(maxMealSequenceTrue)}
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
      )}
    </>
  );
}
