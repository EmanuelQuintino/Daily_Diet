import { useNavigation } from "@react-navigation/native";

import { BoxMain, Container, Label } from "./styles";
import { HeaderScreen } from "@components/HeaderScreen";

export function NewMeal() {
  const navigation = useNavigation();

  function hangleBackNavigate() {
    navigation.navigate("home");
  }

  const type = "NEUTRAL";

  return (
    <Container type={type}>
      <HeaderScreen
        type={type}
        title="Nova refeição"
        onPress={hangleBackNavigate}
      />
      <BoxMain>
        <Label>New Meal</Label>
      </BoxMain>
    </Container>
  );
}
