import { Container, ContainerName, Hour, Name, StatusIcon } from "./styles";

type MealProps = {
  hour: string;
  name: string;
  isInDiet: boolean;
};

export function MealCard({ hour, name, isInDiet }: MealProps) {
  return (
    <Container>
      <Hour>{hour}</Hour>

      <ContainerName>
        <Name numberOfLines={1}>{name}</Name>
      </ContainerName>

      <StatusIcon isInDiet={isInDiet} />
    </Container>
  );
}
