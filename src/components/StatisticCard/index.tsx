import { StyleProps, Container, Title, Data } from "./styles";

type Props = {
  data: string;
  title: string;
  type?: StyleProps;
};

export function StatisticCard({ data, title, type = "NEUTRAL" }: Props) {
  return (
    <Container type={type}>
      <Data>{data}</Data>
      <Title>{title}</Title>
    </Container>
  );
}
