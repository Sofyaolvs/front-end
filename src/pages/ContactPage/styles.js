import styled from "styled-components"
import { body1Text, displayText, display3Text } from "../../style/global"
import { BasicButton } from "../../components/BasicButton/BasicButton"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: ${({ $isTablet }) => ($isTablet ? "2.5rem" : "7.5rem")};
  padding-bottom: calc(4rem);
`
export const HeroSectionContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  clip-path: ${({ $isTablet }) =>
    $isTablet
      ? "ellipse(180% 100% at 50% 0%);"
      : "ellipse(100% 100% at 0% 0%))"};
`
export const HeroSectionImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 262px;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: 840px) {
    object-position: center;
  }
`
export const HeroSectionContent = styled.article`
  position: absolute;
  max-width: 1194px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--neutral-white);
  z-index: 1;
  padding: ${({ $isTablet }) => ($isTablet ? "0 1rem 0 1rem" : "0")};
`

export const WhereToFindTitle = styled.h2`
  ${({ $isTablet }) => ($isTablet ? `${display3Text}` : `${displayText}`)};
  line-height: ${({ $isTablet }) => ($isTablet ? `2.25rem` : `4rem`)};
`

export const WhereToFindDescription = styled.p`
  ${body1Text};
  font-weight: bold;
  text-align: center;
  max-width: 708px;
`

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* gap: 157px; */

  @media screen and (max-width: 840px) {
    flex-direction: column;
    gap: 32px;
  }
  @media screen and (max-width: 1240px) {
    justify-content: center;
  }
`

export const IlustrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 830px;
  row-gap: 1.5rem; //24px;
`

export const IlustrationImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 420px;
  min-height: 194px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;

  @media screen and (max-width: 840px) {
    max-height: 210px;
    min-height: 97px;
    max-width: 30rem;
  }
`

export const ContactForm = styled.form`
  padding: 0 1rem;
  width: 100%;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  /* margin-bottom: 20px; */
`

const STATUS_COLORS = {
  normal: "var(--secondary-orange)",
  error: "#A7111D",
  success: "#3D8255",
}

export const SubmitButton = styled(BasicButton).attrs({ type: "submit" })`
  ${body1Text}
  width: 100%;
  padding: 1rem 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: var(--neutral-white);

  border: none;
  border-radius: 32px;

  background-color: var(--secondary-orange);
  background-color: ${({ $statusColor }) =>
    $statusColor == "normal"
      ? "var(--secondary-orange)"
      : `var(--${$statusColor}-message)`};

  font-weight: 700;

  img {
    width: 22px;
    height: 22px;
  }

`
