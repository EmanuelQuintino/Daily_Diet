import { useNavigation } from "@react-navigation/native";

import {
  BoxButton,
  BoxForm,
  BoxInput,
  BoxIsInDiet,
  BoxMain,
  BoxTextArea,
  BoxYesNo,
  Container,
  Label,
} from "./styles";

import { HeaderScreen } from "@components/HeaderScreen";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ButtonIsInDiet } from "@components/ButtonIsInDiet";

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
        <BoxForm>
          <BoxInput>
            <Input label="Nome" placeholder="Digite o nome da refeição" />
          </BoxInput>

          <BoxTextArea>
            <Input
              label="Descrição"
              placeholder="Faça uma breve descrição da refeição"
            />
          </BoxTextArea>

          <BoxInput>
            <Input label="Data" placeholder="21/07/2023" />
            <Input label="Hora" placeholder="23:23" />
          </BoxInput>

          <BoxIsInDiet>
            <Label>Está dentro da dieta?</Label>
            <BoxYesNo>
              <ButtonIsInDiet name="Sim" type="PRIMARY" onPress={() => {}} />
              <ButtonIsInDiet name="Não" type="SECONDARY" onPress={() => {}} />
            </BoxYesNo>
          </BoxIsInDiet>
        </BoxForm>

        <BoxButton>
          <Button name="Cadastrar refeição" onPress={() => {}} />
        </BoxButton>
      </BoxMain>
    </Container>
  );
}
