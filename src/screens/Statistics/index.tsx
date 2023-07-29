import { useNavigation } from "@react-navigation/native";

import { MealPercentage } from "@components/MealPercentage";
import { StatisticCard } from "@components/StatisticCard";

import { BoxNeutral, BoxPrimarySecondary, Container, Title } from "./styles";

export function Statistics() {
  const navigation = useNavigation();

  function hangleBackNavigate() {
    navigation.navigate("home");
  }
  return (
    <Container>
      <MealPercentage
        percentage={50.86}
        backButton
        onPress={hangleBackNavigate}
      />

      <Title>Estatísticas gerais</Title>

      <BoxNeutral>
        <StatisticCard
          data="22"
          title="melhor sequência de pratos dentro da dieta"
          type="NEUTRAL"
        />
      </BoxNeutral>

      <BoxNeutral>
        <StatisticCard
          data="109"
          title="refeições registradas"
          type="NEUTRAL"
        />
      </BoxNeutral>

      <BoxPrimarySecondary>
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
      </BoxPrimarySecondary>
    </Container>
  );
}
