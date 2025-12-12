import { StyledButton } from "./style.js"

export function Button({
  onClick,
  placeholder,
  backgroundColor,
  placeholderColor,
  ...props
}) {
  return (
    <StyledButton
      onClick={onClick}
      $backgroundColor={backgroundColor}
      $placeholderColor={placeholderColor}
      {...props}
    >
      {placeholder}
    </StyledButton>
  )
}
