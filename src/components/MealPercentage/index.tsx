import { Container, PercentageText, MealsText, ArrowButton, Button } from "./styles";

type Props = {
  percentage: number;
};

export function MealPercentage({ percentage }: Props) {
  return (
    <Container>
      <Button>
        <ArrowButton />
      </Button>
      <PercentageText>{String(percentage).replace(".", ",")}%</PercentageText>
      <MealsText>das refeições dentro da dieta</MealsText>
    </Container>
  );
}
