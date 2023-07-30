import { useNavigation } from "@react-navigation/native";

import { BoxMain, Container, Label } from "./styles";

export function NewMeal() {
  const navigation = useNavigation();

  function hangleBackNavigate() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Label>New Meal</Label>
      <Label>New Meal</Label>
      <Label>New Meal</Label>
      <Label>New Meal</Label>
      <BoxMain>
        <Label>New Meal</Label>
      </BoxMain>
    </Container>
  );
}
