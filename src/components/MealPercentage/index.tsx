import {
  Container,
  PercentageText,
  MealsText,
  ArrowIcon,
  ButtonContainer,
} from "./styles";

export type MealPercentageProps = {
  percentage: number;
  goal?: number;
};

export function MealPercentage({ percentage, goal = 70 }: MealPercentageProps) {
  return (
    <Container percentage={percentage} goal={goal}>
      <ButtonContainer>
        <ArrowIcon percentage={percentage} goal={goal} />
      </ButtonContainer>
      <PercentageText>{String(percentage).replace(".", ",")}%</PercentageText>
      <MealsText>das refeições dentro da dieta</MealsText>
    </Container>
  );
}
