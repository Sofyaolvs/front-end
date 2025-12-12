import styled from "styled-components"
import { label1Text } from "../../style/global"

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const InputWrapper = styled.div`
  width: 100%;

  position: relative;
  border: ${({ $error }) =>
    $error != ""
      ? "1px solid var(--error-message) !important"
      : "1px solid var(--secondary-orange) !important"};
  border-radius: 32px;
  background-color: var(--neutral-white);
  &:focus-within {
    outline: 1px solid var(--secondary-orange);
    outline: ${({ $error }) =>
      $error
        ? "1px solid var(--error-message) !important"
        : "1px solid var(--secondary-orange) !important"};
  }

  img,
  img.override-contrast {
    filter: none;
  }
`
export const CustomSelect = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 0rem;
  border-radius: 32px;
  img {
    padding: 0 1.5rem;
  }
`

export const SelectedOption = styled.div`
  ${label1Text}
  width: 100%;
  padding: 0.65rem 1.5rem;
  border: 0px solid transparent;
  outline: none;
  border-radius: 32px;
  background-color: white;
  color: ${({ $selected }) =>
    $selected ? "var(--neutral-black)" : "var(--neutral-dark-gray) !important"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
`

export const Label = styled.label`
  position: absolute;
  top: ${({ $isOpen, $selected }) =>
    $isOpen || $selected ? "-0.1rem" : "50%"};
  left: 0.75rem;
  transform: translate(
    0,
    ${({ $isOpen, $selected }) => ($isOpen || $selected ? "-50%" : "0")}
  );
  background-color: ${({ $isContrast }) => ($isContrast ? "black" : "white")};
  padding: 0 0.25rem;
  font-size: ${({ $isOpen, $selected }) =>
    $isOpen || $selected ? "0.75rem" : "1rem"};
  pointer-events: none;
  transition: all 0.2s ease;
  opacity: ${({ $isOpen, $selected }) => ($isOpen || $selected ? 1 : 0)};
`

export const OptionsList = styled.ul`
  ${label1Text}
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid var(--secondary-orange);
  border-radius: 16px;
  margin: 8px 0 0;
  padding: 0;
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
  z-index: 100;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

export const Option = styled.li`
  padding: 0.65rem 1.5rem;
  color: var(--neutral-black);
  background-color: var(--neutral-white);
  &:first-child {
    display: none;
  }
  &:hover {
    background-color: var(--neutral-light-gray);
  }
`

export const ArrowDown = styled.div`
  position: absolute;
  cursor: pointer;
  top: 12px;
  right: ${({ $error }) => ($error ? "64px" : "24px")};
  &::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-radius: 8px;
    border-top: 8px solid var(--neutral-black);
  }
`
export const ArrowUp = styled.div`
  position: absolute;
  cursor: pointer;
  top: 12px;
  right: ${({ $error }) => ($error ? "64px" : "24px")};
  &::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-radius: 8px;
    border-bottom: 8px solid var(--neutral-black);
  }
`
export const ErrorText = styled.span`
  ${label1Text}
  margin-top: 0.25rem;
  margin-left: 1.4rem;
  height: 20px;
  color: var(--error-message) !important;
`