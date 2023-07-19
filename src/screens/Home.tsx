import { Container } from "./styles";

import { Header } from "@components/Header";
import { MealPercentage } from "@components/MealPercentage";

export function Home() {
  return (
    <Container>
      <Header />
      <MealPercentage percentage={90.86} />
    </Container>
  );
}
