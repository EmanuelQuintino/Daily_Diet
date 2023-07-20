import { Container, Icon, Text } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  icon?: keyof typeof MaterialIcons.glyphMap;
  name: string;
  onPress: () => void;
};

export function Button({ icon, name, onPress, ...rest }: Props) {
  return (
    <Container {...rest} onPress={onPress}>
      {icon && <Icon name={icon} />}
      <Text>{name}</Text>
    </Container>
  );
}
