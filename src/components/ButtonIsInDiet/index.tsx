import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Text, ButtonStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  name: string;
  onPress: () => void;
  type?: ButtonStyleProps;
  checked?: boolean;
};

export function ButtonIsInDiet({
  name,
  onPress,
  type = "PRIMARY",
  checked = false,
  ...rest
}: Props) {
  return (
    <Container onPress={onPress} type={type} checked={checked} {...rest}>
      <Icon type={type} />
      <Text type={type}>{name}</Text>
    </Container>
  );
}
