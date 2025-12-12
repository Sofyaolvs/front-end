import {
  RouteTypeButtonContainer,
  RouteTypeButtonStyled,
  RouteTypeIcon,
  RouteTypeLabel,
} from "./styles.js"

export function RouteTypeButton({
  label,
  iconImg,
  onClick,
  isActive,
  sizeInPixels,
  iconSizeInPixels,
}) {
  return (
    <RouteTypeButtonContainer>
      <RouteTypeButtonStyled
        $isActive={isActive}
        onClick={onClick}
        $sizeInPixels={sizeInPixels}
        className={`quiz-button ${isActive ? 'quiz-button-active' : ''}`}
      >
        <RouteTypeIcon
          src={iconImg}
          $isActive={isActive}
          $iconSizeInPixels={iconSizeInPixels}
          className="quiz-icon"
        />
      </RouteTypeButtonStyled>
      <RouteTypeLabel>{label}</RouteTypeLabel>
    </RouteTypeButtonContainer>
  )
}
