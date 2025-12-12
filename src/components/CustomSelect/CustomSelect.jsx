import { useState, useEffect, useRef } from "react"
import { Container, Trigger, Menu, Option } from "./styles"

export const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder = "Selecione..."
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelect = (optionValue) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  const selectedOption = options.find(opt => opt.value === value)

  return (
    <Container ref={selectRef}>
      <Trigger
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : placeholder}
      </Trigger>

      <Menu $isOpen={isOpen}>
        {options.map((option) => (
          <Option
            key={option.value}
            $isSelected={value === option.value}
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </Option>
        ))}
      </Menu>
    </Container>
  )
}

export default CustomSelect
