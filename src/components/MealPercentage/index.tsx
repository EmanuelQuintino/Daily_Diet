import {
  Container,
  PercentageText,
  MealsText,
  ArrowIcon,
  ButtonContainer,
  ArrowIconBackButton,
} from "./styles";

export type MealPercentageProps = {
  percentage: number;
  goal?: number;
  backButton?: boolean;
};

export function MealPercentage({
  percentage,
  goal = 70,
  backButton = false,
}: MealPercentageProps) {
  return (
    <Container percentage={percentage} goal={goal}>
      <ButtonContainer backButton={backButton}>
        {backButton ? (
          <ArrowIconBackButton percentage={percentage} goal={goal} />
        ) : (
          <ArrowIcon percentage={percentage} goal={goal} />
        )}
      </ButtonContainer>
      <PercentageText>{String(percentage).replace(".", ",")}%</PercentageText>
      <MealsText>das refeições dentro da dieta</MealsText>
    </Container>
  );
}
