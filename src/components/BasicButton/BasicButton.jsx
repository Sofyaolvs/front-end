import { Button, Loader } from "./styles"
export const BasicButton = ({
  children,
  isLoading = false,
  color,
  borderWidth = 4,
  size = 24,
  ...props
}) => {
  return (
    <Button {...props}>
      {isLoading ? (
        <Loader $color={color} $borderWidth={borderWidth} $size={size} />
      ) : (
        children
      )}
    </Button>
  )
}
