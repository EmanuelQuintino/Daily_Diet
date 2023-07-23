import { TouchableOpacityProps } from "react-native";
import { Container, ContainerName, Hour, Name, StatusIcon } from "./styles";

type MealProps = TouchableOpacityProps & {
  hour: string;
  name: string;
  isInDiet: boolean;
};

export function MealCard({ hour, name, isInDiet, ...rest }: MealProps) {
  return (
    <Container {...rest}>
      <Hour>{hour}</Hour>

      <ContainerName>
        <Name numberOfLines={1}>{name}</Name>
      </ContainerName>

      <StatusIcon isInDiet={isInDiet} />
    </Container>
  );
}
