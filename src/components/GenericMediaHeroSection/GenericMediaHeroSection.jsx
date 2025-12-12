import {
  HeroSectionBox,
  HeroSectionContainer,
  HeroSectionContent,
  HeroSectionGradient,
  HeroSectionRadius,
} from "./styles.js"
import { DisplayText, Body1Text } from "../../style/texts.js"
import { Button } from "../Button/Button.jsx"

import { useWindowDimensions } from "../../hooks/useWindowDimensions.jsx"

export const GenericMediaHeroSection = ({
  title,
  description,
  buttonLabel,
  onClick,
  children,
}) => {
  const { isMobile } = useWindowDimensions()
  return (
    <HeroSectionContainer $isMobile={isMobile}>
      <HeroSectionRadius>
        {/* Image or Video here */}
        {children}
        <HeroSectionGradient className={"hero-section-contrast"} />
        <HeroSectionContent className={"overlay"}>
          <HeroSectionBox className={"overlay"}>
            <DisplayText color={"--neutral-white"}>{title}</DisplayText>
            <Body1Text
              color={"--neutral-white"}
              style={{ maxWidth: "32rem", fontWeight: 600 }}
            >
              {description}
            </Body1Text>
            {onClick && <Button placeholder={buttonLabel} onClick={onClick} />}
          </HeroSectionBox>
        </HeroSectionContent>
      </HeroSectionRadius>
    </HeroSectionContainer>
  )
}
