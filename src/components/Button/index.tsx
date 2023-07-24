import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Text, ButtonStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  name: string;
  onPress: () => void;
  type?: ButtonStyleProps;
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
