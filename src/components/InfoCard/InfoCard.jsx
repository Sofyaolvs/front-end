import {
  CardContainer,
  CardBackground,
  CardContent,
  CardTitle,
} from "./styles"

export default function InfoCard({ title, backgroundImage, link = "#" }) {
  return (
    <CardContainer to={link}>
      <CardBackground $backgroundImage={backgroundImage} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
      </CardContent>
    </CardContainer>
  )
}
