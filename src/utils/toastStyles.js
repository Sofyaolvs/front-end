import styled, { keyframes } from 'styled-components'

const toastProgress = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`

export const ToastContainer = styled.div`
  background: #58B3A6 !important;
  color: #FFFFFF !important;
  border-radius: 8px !important;
  padding: 16px !important;
  padding-bottom: 20px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
  min-width: 550px !important;
  position: relative !important;
  overflow: hidden !important;
  display: flex !important;
  align-items: center !important;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4px;
    width: 100%;
    background: #FFC20E;
    animation: ${toastProgress} 5s linear forwards;
  }

  @media (max-width: 840px) {
    min-width: 320px !important;
    max-width: calc(100vw - 32px) !important;
    padding: 12px !important;
    padding-bottom: 16px !important;
  }

  @media (max-width: 480px) {
    min-width: 280px !important;
  }

`

export const ToastContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding-right: 30px;

  @media (max-width: 840px) {
    gap: 12px;
    padding-right: 20px;
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`

export const ToastCheckIcon = styled.svg`
  color: #FFFFFF;
  flex-shrink: 0;
  margin-right: 12px;

  @media (max-width: 840px) {
    margin-right: 8px;
    width: 24px;
    height: 24px;
  }
`

export const ToastMessage = styled.span`
  font-size: 16px;
  font-weight: 500;
  flex: 1;

  @media (max-width: 840px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`

export const ToastUndoButton = styled.button`
  background: transparent;
  border: 2px solid #FFFFFF;
  color: #FFFFFF;
  padding: 12px 32px;
  border-radius: 24px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.2s ease;
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;

  &:hover {
    background: #FFFFFF;
    color: #58B3A6;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 840px) {
    padding: 10px 24px;
    font-size: 14px;
    min-width: 100px;
    margin-right: 1rem;
  }

  @media (max-width: 480px) {
    padding: 8px 20px;
    font-size: 13px;
    min-width: 90px;
    margin-right: 0.5rem;
  }
`

export const toastifyStyles = `
  .toastify.on {
    opacity: 1 !important;
  }

  .toastify {
    padding: 0 !important;
    background: transparent !important;
  }

  .toastify-close,
  .toast-close,
  button[aria-label="Close"] {
    position: absolute !important;
    top: 50% !important;
    right: 16px !important;
    transform: translateY(-50%) !important;
    background: transparent !important;
    border: none !important;
    border-left: 1px solid rgba(255, 255, 255, 0.253) !important;
    color: transparent !important;
    font-size: 0 !important;
    cursor: pointer !important;
    opacity: 0.8 !important;
    padding: 0 !important;
    padding-left: 24px !important;
    width: 46px !important;
    height: 26px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin: 0 !important;
    line-height: 1 !important;
    z-index: 10 !important;
  }

  .toastify-close::before,
  .toastify-close::after,
  .toast-close::before,
  .toast-close::after,
  button[aria-label="Close"]::before,
  button[aria-label="Close"]::after {
    content: '' !important;
    position: absolute !important;
    width: 22px !important;
    height: 1.5px !important;
    background: #FFFFFF !important;
    left: 50% !important;
    top: 50% !important;
  }

  .toastify-close::before,
  .toast-close::before,
  button[aria-label="Close"]::before {
    transform: translate(-50%, -50%) rotate(45deg) !important;
  }

  .toastify-close::after,
  .toast-close::after,
  button[aria-label="Close"]::after {
    transform: translate(-50%, -50%) rotate(-45deg) !important;
  }

  @media (max-width: 840px) {
    .toastify-close,
    .toast-close,
    button[aria-label="Close"] {
      right: 12px !important;
      padding-left: 18px !important;
      width: 40px !important;
      height: 22px !important;
    }

    .toastify-close::before,
    .toastify-close::after,
    .toast-close::before,
    .toast-close::after,
    button[aria-label="Close"]::before,
    button[aria-label="Close"]::after {
      width: 18px !important;
      height: 1.2px !important;
    }
  }

  @media (max-width: 480px) {
    .toastify-close,
    .toast-close,
    button[aria-label="Close"] {
      right: 8px !important;
      padding-left: 14px !important;
      width: 36px !important;
      height: 20px !important;
    }

    .toastify-close::before,
    .toastify-close::after,
    .toast-close::before,
    .toast-close::after,
    button[aria-label="Close"]::before,
    button[aria-label="Close"]::after {
      width: 16px !important;
      height: 1px !important;
    }
  }
`
