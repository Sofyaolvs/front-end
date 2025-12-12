import { QuestionThreeContainer } from "./styles.js"
import { RouteTypeButton } from "../../../components/RouteTypeButton/RouteTypeButton.jsx"

import sozinhoIcon from "../../../assets/sozinho_icon.svg"
import acompanhadoIcon from "../../../assets/acompanhado_icon.svg"
import { useWindowDimensions } from "../../../hooks/useWindowDimensions.jsx"

export function QuestionThree({ isAccompanied, setIsAccompanied }) {
  const { isMobile } = useWindowDimensions()

  return (
    <QuestionThreeContainer>
      <RouteTypeButton
        iconImg={sozinhoIcon}
        label={"Sozinho"}
        onClick={() => setIsAccompanied(false)}
        isActive={isAccompanied !== null && !isAccompanied}
        sizeInPixels={isMobile ? 160 : 222}
        iconSizeInPixels={isMobile ? 90 : 133}
      />
      <RouteTypeButton
        iconImg={acompanhadoIcon}
        label={"Acompanhado"}
        onClick={() => setIsAccompanied(true)}
        isActive={isAccompanied !== null && isAccompanied}
        sizeInPixels={isMobile ? 160 : 222}
        iconSizeInPixels={isMobile ? 90 : 133}
      />
    </QuestionThreeContainer>
  )
}
