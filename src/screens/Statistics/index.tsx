import { MealPercentage } from "@components/MealPercentage";
import { Container } from "./styles";

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
    </Container>
  );
}
