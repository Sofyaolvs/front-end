
import styled from "styled-components"
import { label1Text } from "../../style/global"

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  border-radius: 8px;
  flex-direction: row;
  gap: 0rem;
  border: ${({ $error }) =>
    $error != ""
      ? "1px solid var(--error-message) !important"
      : "1px solid var(--secondary-orange) !important"};
  background-color: var(--neutral-white);
  &:focus-within {
    outline: ${({ $error }) =>
      $error
        ? "1px solid var(--error-message) !important"
        : "1px solid var(--secondary-orange) !important"};
  }
  img,
  img.override-contrast {
    position: absolute;
    top: 12px;
    right: 24px;
    filter: none;
  }

  textarea.override-contrast {
    border: 0px solid transparent !important;
  }
`

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 0.75rem;
  transform: translateY(-50%);
  background-color: ${({ $isContrast }) => ($isContrast ? "black" : "white")};
  padding: 0 0.25rem;
  font-size: 1rem;
  pointer-events: none;
  transition: all 0.2s ease;
  opacity: 0;
`

export const InputField = styled.textarea`
  ${label1Text}
  padding: 0.65rem 1.5rem 0.65rem 1rem; /* Espaçamento interno */
  width: 100%;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: var(--neutral-white);
  resize: none; /* Desativa o redimensionamento */
  &::placeholder {
    text-align: justify;
    color: var(--neutral-dark-gray);
  }
  &:focus {
    border: 1px solid transparent;
    border-color: transparent;
    outline: none;
  }
  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    opacity: 1;
    top: -0.1rem;
    left: 0.75rem;
    transform: translate(0, -50%);
    font-size: 0.75rem;
    color: var(--neutral-black);
  }

  /* Estilizando a scrollbar */
  &::-webkit-scrollbar {
    padding-right: 4px;
    width: 8px; /* Largura da scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--neutral-gray); /* Cor do thumb da scrollbar */
    border-radius: 8px; /* Borda arredondada */
  }

  &::-webkit-scrollbar-track {
    background-color: var(--neutral-light-gray); /* Cor do track da scrollbar */
    border-radius: 8px;
  }

  /* Espaço adicional para a scrollbar */
  background-clip: padding-box;
  padding-right: 20px; /* Aumente o padding à direita */
`

export const ErrorText = styled.span`
  ${label1Text}
  margin-top: 0.25rem;
  margin-left: 1.4rem;
  height: 20px;
  color: var(--error-message) !important;
`