import { MealPercentage } from "@components/MealPercentage";
import { Container } from "./styles";

export function Statistics() {
  return (
    <Container>
      <MealPercentage percentage={90.86} />
    </Container>
  );
}
