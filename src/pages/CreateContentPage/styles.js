import styled from "styled-components"
import {
  body1Text,
  displayText,
  display3Text,
} from "../../style/global"

export const NewsAndContentAdminTitle = styled.h2`
  ${({ $isTablet }) => ($isTablet ? `${display3Text}` : `${displayText}`)};
  line-height: ${({ $isTablet }) => ($isTablet ? `2.25rem` : `4rem`)};
`

export const NewsAndContentAdminDescription = styled.p`
  ${body1Text};
  font-weight: bold;
  text-align: center;
  max-width: 708px;
`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 1194px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: ${({ $isTablet }) => ($isTablet ? "1.5rem 1rem" : "2rem 2rem")};
  border-radius: 24px;
  background: #F8F8F8;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 840px) {
    padding: 1rem;
    gap: 0.75rem;
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const FormSelect = styled.select`
  padding: 0.45rem 1rem;
  padding-right: 3rem;
  border: 2px solid var(--neutral-gray);
  border-radius: 24px;
  font-size: 1rem;
  font-family: inherit;
  background: #F8F8F8;
  cursor: pointer;
  align-self: flex-start;
  min-width: 200px;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 12px;

  &:focus {
    outline: none;
    border-color: var(--secondary-orange);
  }

  @media (max-width: 840px) {
    min-width: 150px;
    font-size:0.9rem;
  }
`
export const FormInput = styled.input`
  padding: 0.765rem 1rem;
  border: none;
  border-radius: none;
  font-size: 2rem;
  font-family: inherit;
  background: transparent;
  font-weight:bold;

  &:focus {
    outline: none;
    border: none;
  }
  &::placeholder {
    color: var(--neutral-gray);
  }

  @media (max-width: 840px) {
    font-size: 1.5rem;
    padding: 0.5rem 0.75rem;
  }
`

export const FormTextarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  background: transparent;
  min-height: ${({ $isTablet }) => ($isTablet ? "160px" : "260px")};
  resize: none;

  &:focus {
    outline: none;
    border: none;
  }

  &::placeholder {
    color: var(--neutral-gray);
    font-size:24px;
  }

  @media (max-width: 840px) {
    min-height: 140px;
    font-size: 0.9rem;
    padding: 0.5rem 0.75rem;

    &::placeholder {
      font-size: 18px;
    }
  }
`

export const CharacterCounter = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ $isLimit }) => ($isLimit ? '#dc3545' : '#6c757d')};
  pointer-events: none;
  user-select: none;
`

export const TextareaWrapper = styled.div`
  position: relative;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${({ $isEditing }) => ($isEditing ? 'space-between' : 'flex-end')};
  align-items: center;
  width: 90%;
  max-width: 1194px;
  gap: 1rem;
  margin-top: 20px;

  @media (max-width: 840px) {
    flex-direction: ${({ $isEditing }) => ($isEditing ? 'column-reverse' : 'row')};
    width: 100%;
    gap: 0.75rem;
  }
`

export const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: var(--secondary-orange);
  color: var(--neutral-white);
  border: none;
  border-radius: 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 840px) {
    width: 100%;
    padding: 0.875rem 1.5rem;
  }
`

export const DeleteButton = styled.button`
  padding: .9rem 4rem;
  background: transparent;
  color: #dc3545;
  border: 2px solid #dc3545;
  border-radius: 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #dc3545;
    color: var(--neutral-white);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 840px) {
    width: 100%;
    padding: 0.875rem 1.5rem;
  }
`

export const DateInputWrapper = styled.div`
  width: 280px;
  margin-top: 1rem;

  input[type="date"] {
    &::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  input {
    padding: 0.5rem 1.5rem !important;
  }

  @media (max-width: 840px) {
    width: 100%;
    max-width: 280px;
  }
`

export const LinkInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    padding: 0.5rem 1.5rem !important;
  }

  > div:first-child {
    max-width: 720px;
  }

  > div:last-child {
    max-width: 28rem;
  }
`

export const NewsCardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 1194px;

  @media (max-width: 840px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const EditIcon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: transform 0.2s;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 840px) {
    display: none;
  }
`
