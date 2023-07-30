import {
  Container,
  ButtonContainer,
  ArrowIconBackButton,
  Title,
  StyleProps,
} from "./styles";

type Props = {
  title: string;
  type: StyleProps;
  onPress?: () => void;
};

export function HeaderScreen({ title, type = "NEUTRAL", onPress }: Props) {
  return (
    <Container type={type}>
      <ButtonContainer onPress={onPress}>
        <ArrowIconBackButton type={type} />
      </ButtonContainer>
      <Title>{title}</Title>
    </Container>
  );
}
