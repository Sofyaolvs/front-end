import styled from 'styled-components'

export const FiltersContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 90rem;
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.6rem;
  background-color:transparent;
  color:var(--neutral-dark-gray);
  border: 2px solid ${props => props.$isOpen ? 'var(--primary-green)' : 'var(--neutral-light-gray)'};
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.5rem;
  }
`

export const FilterPopup = styled.div`
  position: absolute;
  top: calc(100% - 1rem);
  right: 2rem;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    left: 1rem;
    right: 1rem;
    min-width: auto;
    max-width: calc(100vw - 2rem);
  }
`

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const FilterLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--neutral-dark-gray);
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`

export const TagButton = styled.button`
  padding: 0.5rem 1.25rem;
  border: 2px solid ${props => props.$active ? 'var(--secondary-orange)' : '#ddd'};
  background-color: ${props => props.$active ? 'var(--secondary-orange)' : '#fff'};
  color: ${props => props.$active ? '#fff' : 'var(--neutral-dark-gray'};
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 0.85rem;
  }
`

export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const SearchInputIcon = styled.img`
  position: absolute;
  left: 1rem;
  width: 18px;
  height: 18px;
  pointer-events: none;
`

export const SearchInput = styled.input`
  padding: 0.7rem 1rem 0.7rem 2.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
  width: 100%;

  &::placeholder {
    color: #b0b0b0;
  }

  &:focus {
    border-color: var(--secondary-orange);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

export const DateFiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const DateInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 150px;
`

export const DateInput = styled.input`
  padding: 0.75rem ;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
  color: #999;

  &::-webkit-calendar-picker-indicator {
    opacity: 0.6;
  }

  &:focus {
    border-color: var(--secondary-orange);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

export const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const FilterTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--neutral-dark-gray);
`

export const Divider = styled.hr`
  width: calc(100% + 3rem);
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  border: none;
  border-top: 1px solid #ddd;
  margin-top: 0;
  margin-bottom: 0;
`

export const FilterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ClearText = styled.span`
  font-size: 0.85rem;
  color: var(--primary-green);
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`

export const SelectDropdown = styled.select`
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
  background-color: #fff;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1 1L7 7L13 1' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 14px;

  &:focus {
    border-color: var(--secondary-orange);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ClearAllButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: var(--primary-green);
  border: 2px solid var(--primary-green);
  border-radius: 24px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary-green);
    color:#ffff;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ApplyButton = styled.button`
  padding: 0.75rem 3rem;
  background-color: var(--secondary-orange);
  color: #fff;
  border: none;
  border-radius: 24px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
