import { MealPercentage } from "@components/MealPercentage";
import { Container } from "./styles";

export function Statistics() {
  return (
    <Container>
      <MealPercentage percentage={50.86} />
    </Container>
  );
}
