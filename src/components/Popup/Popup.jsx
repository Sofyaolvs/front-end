import {
  PopupOverlay,
  PopupContainer,
  PopupTitle,
  PopupMessage,
  PopupButtons,
  CancelButton,
  ConfirmButton
} from './styles'

const Popup = ({
  isOpen,
  title,
  message,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  onConfirm,
  onCancel,
  variant = 'default'
}) => {
  if (!isOpen) return null

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel()
    }
  }

  return (
    <PopupOverlay onClick={handleOverlayClick}>
      <PopupContainer>
        <PopupTitle $variant={variant}>{title}</PopupTitle>
        <PopupMessage>{message}</PopupMessage>
        <PopupButtons>
          <CancelButton onClick={onCancel} $variant={variant}>
            {cancelText}
          </CancelButton>
          <ConfirmButton onClick={onConfirm} $variant={variant}>
            {confirmText}
          </ConfirmButton>
        </PopupButtons>
      </PopupContainer>
    </PopupOverlay>
  )
}

export default Popup