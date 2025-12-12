import styled from "styled-components"

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const PopupContainer = styled.div`
  background-color: var(--neutral-white);
  border-radius: 16px;
  padding: 3rem;
  width: 100%;
  max-width: 502px;
  max-height: 304px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  @media (max-width: 840px) {
    padding: 2rem;
    max-width: 90%;
    max-height: none;
  }

  @media (max-width: 375px) {
    padding: 1.5rem;
  }
`

export const PopupTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: var(--neutral-black);
  margin-bottom: 1rem;
  text-align: left;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${(props) => props.$variant === 'delete' ? 'var(--primary-red)' : 'var(--primary-green)'};

  @media (max-width: 840px) {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
`

export const PopupMessage = styled.p`
  font-size: 1rem;
  color: var(--neutral-gray);
  margin-bottom: 1.5rem;

  @media (max-width: 840px) {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
  }
`

export const PopupButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;

  @media (max-width: 840px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const PopupButton = styled.button`
  flex: 1;
  padding: 0.75rem 2rem;
  border-radius: 24px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 840px) {
    width: 100%;
    padding: 0.875rem 1.5rem;
  }
`

export const CancelButton = styled(PopupButton)`
  background-color: transparent;
  border: 2px solid ${(props) => props.$variant === 'delete' ? 'var(--primary-red)' : 'var(--primary-green)'};
  color: ${(props) => props.$variant === 'delete' ? 'var(--primary-red)' : 'var(--primary-green)'};

  &:hover {
    color: var(--neutral-black);
  }
`

export const ConfirmButton = styled(PopupButton)`
  background-color: ${(props) => props.$variant === 'delete' ? 'var(--primary-red)' : 'var(--primary-green)'};
  border: none;
  color: var(--neutral-white);
`