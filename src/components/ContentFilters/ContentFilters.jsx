import { useState, useRef, useEffect } from 'react'
import filterIcon from '../../assets/filterIcon.svg'
import serachIcon from '../../assets/searchIconGray.svg'
import {
  FiltersContainer,
  FilterButton,
  FilterPopup,
  FilterHeader,
  FilterTitle,
  Divider,
  FilterSection,
  FilterRow,
  FilterLabel,
  ClearText,
  SearchInputWrapper,
  SearchInputIcon,
  SearchInput,
  DateFiltersContainer,
  DateInputWrapper,
  DateInput,
  SelectDropdown,
  ButtonsContainer,
  ClearAllButton,
  ApplyButton,
} from './styles.js'


export const ContentFilters = ({
  selectedTag,
  onTagChange,
  searchText,
  onSearchChange,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onClearFilters
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  const [tempSelectedTag, setTempSelectedTag] = useState('')
  const [tempSearchText, setTempSearchText] = useState('')
  const [tempStartDate, setTempStartDate] = useState('')
  const [tempEndDate, setTempEndDate] = useState('')

  useEffect(() => {
    if (isOpen) {
      setTempSelectedTag(selectedTag)
      setTempSearchText(searchText)
      setTempStartDate(startDate)
      setTempEndDate(endDate)
    }
  }, [isOpen, selectedTag, searchText, startDate, endDate])

  const handleClearDates = () => {
    setTempStartDate('')
    setTempEndDate('')
  }

  const handleClearType = () => {
    setTempSelectedTag('')
  }

  const handleClearSearch = () => {
    setTempSearchText('')
  }

  const handleClearAll = () => {
    setTempSelectedTag('')
    setTempSearchText('')
    setTempStartDate('')
    setTempEndDate('')
    onTagChange('')
    onSearchChange('')
    onStartDateChange('')
    onEndDateChange('')
  }

  const handleApply = () => {
    onTagChange(tempSelectedTag)
    onSearchChange(tempSearchText)
    onStartDateChange(tempStartDate)
    onEndDateChange(tempEndDate)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <FiltersContainer ref={containerRef}>
      <FilterButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <img src={filterIcon} alt="Filtro" /> Filtrar
      </FilterButton>

      {isOpen && (
        <FilterPopup>
          <FilterHeader>
            <FilterTitle>Filtrar</FilterTitle>
          </FilterHeader>
          <Divider />

          <FilterSection>
            <FilterRow>
              <FilterLabel>Filtrar por data</FilterLabel>
              <ClearText onClick={handleClearDates}>Limpar</ClearText>
            </FilterRow>
            <DateFiltersContainer>
              <DateInputWrapper>
                <FilterLabel style={{fontSize:'0.75rem', fontWeight:'normal', color:'#999'}}>Data inicial:</FilterLabel>
                <DateInput
                  type='date'
                  value={tempStartDate}
                  onChange={(e) => setTempStartDate(e.target.value)}
                />
              </DateInputWrapper>

              <DateInputWrapper>
                <FilterLabel style={{fontSize:'0.75rem', fontWeight:'normal', color:'#999'}}>Data final:</FilterLabel>
                <DateInput
                  type='date'
                  value={tempEndDate}
                  onChange={(e) => setTempEndDate(e.target.value)}
                />
              </DateInputWrapper>
            </DateFiltersContainer>
          </FilterSection>

          <Divider />

          <FilterSection>
            <FilterRow>
              <FilterLabel>Tipo de conteúdo</FilterLabel>
              <ClearText onClick={handleClearType}>Limpar</ClearText>
            </FilterRow>
            <SelectDropdown value={tempSelectedTag} onChange={(e) => setTempSelectedTag(e.target.value)}>
              <option value="">Selecione...</option>
              <option value="dados">Dados</option>
              <option value="conteudos">Conteúdos</option>
            </SelectDropdown>
          </FilterSection>

          <Divider />

          <FilterSection>
            <FilterRow>
              <FilterLabel>Pesquisa por texto</FilterLabel>
              <ClearText onClick={handleClearSearch}>Limpar</ClearText>
            </FilterRow>
            <SearchInputWrapper>
              <SearchInputIcon src={serachIcon} alt="Buscar" />
              <SearchInput
                type='text'
                placeholder='Digite para buscar...'
                value={tempSearchText}
                onChange={(e) => setTempSearchText(e.target.value)}
              />
            </SearchInputWrapper>
          </FilterSection>

          <Divider />

          <ButtonsContainer>
            <ClearAllButton onClick={handleClearAll}>Limpar todos</ClearAllButton>
            <ApplyButton onClick={handleApply}>Aplicar</ApplyButton>
          </ButtonsContainer>
        </FilterPopup>
      )}
    </FiltersContainer>
  )
}
