import { Container, Icon, Text } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  icon?: keyof typeof MaterialIcons.glyphMap;
  name: string;
  onPress: () => void;
  type?: "PRIMARY" | "SECONDARY";
};

export function Button({
  icon,
  name,
  onPress,
  type = "PRIMARY",
  ...rest
}: Props) {
  return (
    <Container {...rest} onPress={onPress} type={type}>
      {icon && <Icon name={icon} type={type} />}
      <Text type={type}>{name}</Text>
    </Container>
  );
}
