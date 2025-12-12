import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  align-self: flex-start;
  width: 100%;
  min-width: 12rem;
  background:white;
`

export const Trigger = styled.div`
  padding: 0.45rem 1rem;
  padding-right: 2.5rem;
  border: 1px solid var(--secondary-orange);
  border-radius: 24px;
  font-size: 1rem;
  font-family: inherit;
  background: #F8F8F8;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%) ${({ $isOpen }) => $isOpen ? 'rotate(180deg)' : 'rotate(0)'};
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #333;
    transition: transform 0.2s ease;
  }

  &:focus {
    outline: none;
    border-color: var(--secondary-orange);
  }
`

export const Menu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: #F8F8F8;
  border: 2px solid var(--secondary-orange);
  border-radius: 16px;
  overflow: hidden;
  z-index: 100;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  display: ${({ $isOpen }) => $isOpen ? 'block' : 'none'};
`

export const Option = styled.div`
  padding: 0.75rem 1rem;
  padding-right: 2.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid var(--neutral-black);
    background: transparent;
    transition: all 0.2s ease;
  }

  
  &::after {
    content: '';
    position: absolute;
    right: calc(1.2rem + 3px);
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 2px solid transparent;
    background: transparent;
    transition: all 0.2s ease;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  &:first-child {
    border-radius: 14px 14px 0 0;
  }

  &:last-child {
    border-radius: 0 0 14px 14px;
  }

  &:only-child {
    border-radius: 14px;
  }

  ${({ $isSelected }) => $isSelected && `
    background: var(--primary-green);
    color: white;

    &:hover {
      background: var(--primary-green);
    }

    &::before {
      border-color: white;
    }

    &::after {
      border-color: white;
    }
  `}
`
