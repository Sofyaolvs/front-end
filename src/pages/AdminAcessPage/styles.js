import styled from "styled-components"
import {
  body1Text,
  displayText,
  display3Text,
} from "../../style/global"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: ${({ $isTablet }) => ($isTablet ? "2.5rem" : "7.5rem")};
  padding-bottom: calc(80px);
`;

export const HeroSectionContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  clip-path: ${({ $isTablet }) =>
    $isTablet
      ? "ellipse(180% 100% at 50% 0%);"
      : "ellipse(100% 100% at 0% 0%))"};
`;

export const HeroSectionImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 262px;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: 840px) {
    object-position: center;
  }
`;

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
`;


export const AcessTitle = styled.h2`
  ${({ $isTablet }) => ($isTablet ? `${display3Text}` : `${displayText}`)};
  line-height: ${({ $isTablet }) => ($isTablet ? `2.25rem` : `4rem`)};
`;


export const AcessDescription = styled.p`
  ${body1Text};
  font-weight: bold;
  text-align: center;
  max-width: 708px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 464px;
  padding: 2rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  border: 1px solid var(--secondary-orange);
  border-radius: 32px;
  background-color: var(--neutral-white);

  &:focus-within {
    outline: 1px solid var(--secondary-orange);
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 1.5rem;
  transform: translateY(-50%);
  background-color: white;
  padding: 0 0.25rem;
  font-size: 1rem;
  pointer-events: none;
  transition: all 0.2s ease;
  opacity: 0;
  color: var(--neutral-dark-gray);
`;

export const StyledInput = styled.input`
  ${body1Text};
  width: 100%;
  padding: 12px 24px;
  background-color: var(--neutral-white);
  border: none;
  outline: none;
  border-radius: 32px;
  font-size: 16px;

  &::placeholder {
    text-align: justify;
    color: var(--neutral-dark-gray);
    transition: opacity 0.2s ease;
  }

  &:focus::placeholder,
  &:not(:placeholder-shown)::placeholder {
    opacity: 0;
  }

  &:focus + ${InputLabel},
  &:not(:placeholder-shown) + ${InputLabel} {
    opacity: 1;
    top: -0.1rem;
    left: 1.5rem;
    transform: translate(0, -50%);
    font-size: 0.75rem;
    color: var(--neutral-black);
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 18px 89px;
  background-color: var(--secondary-orange);
  color: var(--neutral-white);
  border: none;
  border-radius: 32px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

`;

export const BottomSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 2%;

  @media (max-width: 1240px) {
    flex-direction: column-reverse;
  }
`
export const SectionTextsContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 33.3rem; /* 336px */
  align-items: ${(props) =>
    props?.$center === true ? "center" : "flex-start"};
  text-align: ${(props) => (props?.$center === true ? "center" : "left")};
  align-self: ${(props) => (props?.$center === true ? "center" : "unset")};

  @media (max-width: 1240px) {
    max-width: 36rem;
  }
`

