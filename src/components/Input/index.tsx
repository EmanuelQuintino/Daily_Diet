import { TextInputProps } from "react-native";
import { Container, Label, InputText } from "./styles";

type Props = TextInputProps & {
  label?: string;
};

export function Input({ label, placeholder, ...rest }: Props) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputText
        placeholder={placeholder}
        textAlignVertical="top"
        multiline
        {...rest}
      />
    </Container>
  );
}
