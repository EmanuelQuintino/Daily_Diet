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
        {...rest}
        placeholder={placeholder}
        textAlignVertical="top"
        multiline
      />
    </Container>
  );
}
