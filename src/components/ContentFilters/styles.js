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
  padding: 0.6rem 1rem;
  background-color:transparent;
  border-color: var(--primary-green);
  color:var(--neutral-dark-gray);
  border: 2px solid var(--primary-green);
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
  z-index: 1000;
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
  color: #333;
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
  color: ${props => props.$active ? '#fff' : '#333'};
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 0.85rem;
  }
`

export const SearchInput = styled.input`
  padding: 0.7rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;

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
  padding-bottom: 0.5rem;
`

export const FilterTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ddd;
  margin: 0.75rem 0;
`

export const FilterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
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
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
  background-color: #fff;
  cursor: pointer;

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
  color: #666;
  border: 1px solidvar(var(--primary-green));
  border-radius: 24px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ApplyButton = styled.button`
  padding: 0.75rem 1.5rem;
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
