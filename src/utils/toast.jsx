import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'
import { createRoot } from 'react-dom/client'
import {
  ToastContainer,
  ToastContent,
  ToastCheckIcon,
  ToastMessage,
  ToastUndoButton,
  toastifyStyles
} from './toastStyles'

let stylesInjected = false
const injectStyles = () => {
  if (!stylesInjected) {
    const styleElement = document.createElement('style')
    styleElement.textContent = toastifyStyles
    document.head.appendChild(styleElement)
    stylesInjected = true
  }
}

/**
 * @param {string} message
 * @param {function} onUndo
 * @param {number} duration
 */
export const showSuccessToast = (message = 'Novo conteúdo salvo', onUndo, duration = 5000) => {
  injectStyles()

  const toastElement = document.createElement('div')
  const root = createRoot(toastElement)

  const handleUndo = () => {
    if (onUndo) {
      onUndo()
      toast.hideToast()
    }
  }

  root.render(
    <ToastContainer>
      <ToastContent>
        <ToastCheckIcon width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </ToastCheckIcon>
        <ToastMessage>{message}</ToastMessage>
        <ToastUndoButton onClick={handleUndo}>Desfazer</ToastUndoButton>
      </ToastContent>
    </ToastContainer>
  )

  const toast = Toastify({
    node: toastElement,
    duration: duration,
    close: true,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    className: 'toast-custom-wrapper',
    escapeMarkup: false,
    onClick: function() {}
  })

  toast.showToast()

  return toast
}

/**
 * @param {string} message
 * @param {function} onUndo
 * @param {number} duration
 */
export const showDeleteToast = (message = 'Conteúdo deletado', onUndo, duration = 5000) => {
  injectStyles()

  const toastElement = document.createElement('div')
  const root = createRoot(toastElement)

  const handleUndo = () => {
    if (onUndo) {
      onUndo()
      toast.hideToast()
    }
  }

  root.render(
    <ToastContainer>
      <ToastContent>
        <ToastCheckIcon width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </ToastCheckIcon>
        <ToastMessage>{message}</ToastMessage>
        <ToastUndoButton onClick={handleUndo}>Desfazer</ToastUndoButton>
      </ToastContent>
    </ToastContainer>
  )

  const toast = Toastify({
    node: toastElement,
    duration: duration,
    close: true,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    className: 'toast-custom-wrapper',
    escapeMarkup: false,
    onClick: function() {}
  })

  toast.showToast()

  return toast
}

/**
 * @param {string} message
 * @param {number} duration
 */
export const showErrorToast = (message = 'Erro', duration = 5000) => {
  injectStyles()

  const toastElement = document.createElement('div')
  const root = createRoot(toastElement)

  root.render(
    <ToastContainer style={{ backgroundColor: '#f44336' }}>
      <ToastContent>
        <ToastCheckIcon width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </ToastCheckIcon>
        <ToastMessage>{message}</ToastMessage>
      </ToastContent>
    </ToastContainer>
  )

  const toast = Toastify({
    node: toastElement,
    duration: duration,
    close: true,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    className: 'toast-custom-wrapper',
    escapeMarkup: false,
    onClick: function() {}
  })

  toast.showToast()

  return toast
}
