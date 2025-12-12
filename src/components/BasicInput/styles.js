import styled from "styled-components"
import { label1Text } from "../../style/global"

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0rem;
  position: relative;
  border: ${({ $error }) =>
    $error != ""
      ? "1px solid var(--error-message) !important"
      : "1px solid var(--secondary-orange) !important"};
  border-radius: 32px;
  background-color: var(--neutral-white);
  &:focus-within {
    outline: ${({ $error }) =>
      $error
        ? "1px solid var(--error-message) !important"
        : "1px solid var(--secondary-orange) !important"};
  }

  img,
  img.override-contrast {
    padding: 0 1.5rem;
    filter: none;
  }
  input.override-contrast {
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
  opacity: 1;
  color: var(--neutral-dark-gray);
`

export const InputField = styled.input`
  ${label1Text}
  padding: 0.65rem 1.5rem;
  width: 100%;
  background-color: var(--neutral-white);
  border: 0px solid transparent;
  outline: none;
  border-radius: 32px;
  &::placeholder {
    text-align: justify;
    color: var(--neutral-dark-gray);
  }

  &:focus + ${Label}, :not(:placeholder-shown) + ${Label} {
    opacity: 1;
    top: -0.1rem;
    left: 0.75rem;
    transform: translate(0, -50%);
    font-size: 0.75rem;
    color: var(--neutral-black);
  }
  &:not(:placeholder-shown) + ${Label} {
    opacity: 1;
    top: -0.1rem;
    left: 0.75rem;
    transform: translate(0, -50%);
    font-size: 0.75rem;
    color: var(--neutral-black);
  }
`
export const ErrorText = styled.span`
  ${label1Text}
  margin-top: 0.25rem;
  margin-left: 1.4rem;
  height: 20px;
  color: var(--error-message) !important;
`