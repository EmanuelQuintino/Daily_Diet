import { Container, Icon, Text } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  icon?: keyof typeof MaterialIcons.glyphMap;
  name: string;
};

export function Button({ icon, name, ...rest }: Props) {
  return (
    <Container {...rest}>
      {icon && <Icon name={icon} />}
      <Text>{name}</Text>
    </Container>
  );
}
