import React from "react"
import {
  InputContainer,
  InputWrapper,
  Label,
  InputField,
  ErrorText,
} from "./styles"
import { useAcessibilityContext } from "../../contexts/AcessibilityContext"
import InputError from "../../assets/input-error.svg"

export const BasicInput = React.forwardRef(
  ({ label, error, onBlur, onFocus, ...props }, ref) => {
    const { theme } = useAcessibilityContext()
    const isContrast = theme === "contrast"
    return (
      <InputContainer>
        <InputWrapper $error={!!error}>
          <InputField
            className="override-contrast"
            ref={ref}
            {...props}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          <Label $isContrast={isContrast}>{label}</Label>
          {error && (
            <img className={"override-contrast"} src={InputError} alt="Error" />
          )}
        </InputWrapper>
        <ErrorText>{error ? error.message : "\n"} </ErrorText>
      </InputContainer>
    )
  }
)
