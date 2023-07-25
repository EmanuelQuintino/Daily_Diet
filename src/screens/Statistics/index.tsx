import { Container } from "./styles";
import { MealPercentage } from "@components/MealPercentage";
import { StatisticCard } from "@components/StatisticCard";

export function Statistics() {
  function hangleBackNavigate() {
    console.log("Back Navigate");
  }
  return (
    <Container>
      <MealPercentage
        percentage={50.86}
        backButton
        onPress={hangleBackNavigate}
      />

      <StatisticCard
        data="22"
        title="melhor sequência de pratos dentro da dieta"
        type="NEUTRAL"
      />

      <StatisticCard data="109" title="refeições registradas" type="NEUTRAL" />

      <StatisticCard
        data="99"
        title="refeições dentro da dieta"
        type="PRIMARY"
      />

      <StatisticCard
        data="10"
        title="refeições fora da dieta"
        type="SECONDARY"
      />
    </Container>
  );
}
