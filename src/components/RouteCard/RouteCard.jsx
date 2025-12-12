import {
  CardContainer,
  CardContent,
  CardImageBackground,
  CardTitle,
  IconInfo,
  IconText,
  OverlayBg,
  RouteInfoContainer,
} from "./styles.js"

import watchIcon from "../../assets/watchIcon.svg"
import locationIcon from "../../assets/locationIcon.svg"
import montainIcon from "../../assets/montainIcon.svg"
import { Button } from "../Button/Button.jsx"
import { formatDuration } from "../../utils/utils.js"
import placeholderImage from "../../assets/beira-mar.png"

export function RouteCard({
  image,
  routeName,
  distance,
  duration,
  incline,
  hasButton = false,
  onClick,
}) {
  // Usar imagem placeholder se não houver imagem
  const imageToDisplay = image || placeholderImage

  return (
    <CardContainer>
      <CardImageBackground
        src={imageToDisplay}
        alt={"Imagem rota"}
        onError={(e) => {
          // Se a imagem falhar ao carregar, usa o placeholder
          if (e.target.src !== placeholderImage) {
            e.target.src = placeholderImage
          }
        }}
      />
      <OverlayBg className={"route-card-contrast"}>
        <CardContent className={"overlay"}>
          <CardTitle>{routeName}</CardTitle>
          <RouteInfoContainer className={"overlay"}>
            <IconInfo className={"overlay"}>
              <img
                src={watchIcon}
                alt={"Ícone de relógio"}
                style={{ width: "24px", height: "24px" }}
              />
              <IconText>{formatDuration(duration)}</IconText>
            </IconInfo>
            <IconInfo className={"overlay"}>
              <img
                src={locationIcon}
                alt={"Ícone de Localização"}
                style={{ width: "24px", height: "24px" }}
              />
              <IconText>{(parseInt(distance)/1000).toFixed(1)} km</IconText>
            </IconInfo>
            <IconInfo className={"overlay"}>
              <img
                src={montainIcon}
                alt={"Ícone de montanha"}
                style={{ width: "24px", height: "24px" }}
              />
              <IconText>{incline} %</IconText>
            </IconInfo>
          </RouteInfoContainer>
          {hasButton ? (
            <Button
              placeholder={"Ver detalhes da rota"}
              style={{ width: "95%", marginBottom: "2rem", marginTop: "20px" }}
              onClick={onClick}
            />
          ) : (
            <div style={{ height: "48px" }} />
          )}
        </CardContent>
      </OverlayBg>
    </CardContainer>
  )
}
