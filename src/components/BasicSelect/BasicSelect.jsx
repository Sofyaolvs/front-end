import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react"
import {
  InputWrapper,
  Option,
  OptionsList,
  SelectedOption,
  Label,
  CustomSelect,
  ArrowDown,
  ArrowUp,
  InputContainer,
  ErrorText,
} from "./styles"
import InputError from "../../assets/input-error.svg" 
import { useAcessibilityContext } from "../../contexts/AcessibilityContext"

export const BasicSelect = forwardRef(
  ({ label, options, defaultValue, onChange, value, error, onBlur }, ref) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(defaultValue)
    const { theme } = useAcessibilityContext()
    const isContrast = theme === "contrast"
    useEffect(() => {
      setSelectedOption(value) 
    }, [value])
    useEffect(() => {
      setSelectedOption(value) 
    }, [value])

    const handleToggle = () => setIsOpen(!isOpen)

    const handleOptionClick = (value) => {
      setSelectedOption(value)
      onChange(value)
      setIsOpen(false)
      if (onBlur) onBlur()
    }

    const selectedLabel =
      options.find((option) => option.value === selectedOption)?.label || label

    useImperativeHandle(ref, () => ({
      getSelectedOption: () => selectedOption,
      focus: () => {
        document.querySelector('div[role="button"]').focus()
      },
    }))

    const handleOutsideClick = (event) => {
      if (!event.target.closest('[role="button"]')) {
        setIsOpen(false)
        if (onBlur) onBlur() 
      }
    }

    useEffect(() => {
      if (isOpen) {
        document.addEventListener("click", handleOutsideClick)
      } else {
        document.removeEventListener("click", handleOutsideClick)
      }

      return () => {
        document.removeEventListener("click", handleOutsideClick)
      }
    }, [isOpen])

    return (
      <InputContainer>
        <InputWrapper $error={!!error}>
          <CustomSelect onClick={handleToggle} role="button" tabIndex={0}>
            <SelectedOption $isOpen={isOpen} $selected={selectedOption !== ""}>
              {selectedLabel}
            </SelectedOption>
            <Label
              $isOpen={isOpen}
              $isContrast={isContrast}
              $selected={selectedOption !== ""}
            >
              {label}
            </Label>
            {isOpen && (
              <OptionsList>
                {options.map((option) => (
                  <Option
                    key={option.value}
                    $isSelected={option.value === selectedOption}
                    onClick={() => handleOptionClick(option.value)}
                  >
                    {option.label}
                  </Option>
                ))}
              </OptionsList>
            )}
            {!isOpen ? (
              <ArrowDown $error={error} />
            ) : (
              <ArrowUp $error={error} />
            )}
            {error && (
              <img className="override-contrast" src={InputError} alt="Error" />
            )}{" "}

          </CustomSelect>
        </InputWrapper>
        <ErrorText>{error ? error.message : "\n"} </ErrorText>{" "}
      </InputContainer>
    )
  }
)

export default BasicSelect
