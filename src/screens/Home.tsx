import { BoxButton, Container, Text } from "./styles";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { MealPercentage } from "@components/MealPercentage";

export function Home() {
  function handleNavigateMealsDetails() {
    console.log("Meals");
  }

  return (
    <Container>
      <Header />

      <MealPercentage percentage={90.86} />

      <BoxButton>
        <Text>Refeições</Text>
        <Button
          icon="add"
          name="Nova refeição"
          onPress={handleNavigateMealsDetails}
        />
      </BoxButton>
    </Container>
  );
}
