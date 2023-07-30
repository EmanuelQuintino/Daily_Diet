import { useNavigation } from "@react-navigation/native";

import { BoxMain, Container, Label } from "./styles";
import { HeaderScreen } from "@components/HeaderScreen";

export function NewMeal() {
  const navigation = useNavigation();

  function hangleBackNavigate() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <HeaderScreen
        type="NEUTRAL"
        title="Nova refeição"
        onPress={hangleBackNavigate}
      />
      <BoxMain>
        <Label>New Meal</Label>
      </BoxMain>
    </Container>
  );
}
