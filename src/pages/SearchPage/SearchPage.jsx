import React, { useEffect, useState } from "react"
import { useSearch } from "../../contexts/SearchContext"
import { useParams, useNavigate } from "react-router-dom"

import Loader from "../../components/LoaderComponent/LoaderComponent"

import { useWindowDimensions } from "../../hooks/useWindowDimensions"

import SearchBox from "../../components/SearchBox/SearchBox"
import SearchResultCard from "../../components/SearchResultCard/SearchResultCard"

import {
  NotFoundHeadlineText,
  NotFoundBodyText,
  Bold,
  NoResultsContainer,
  ContentDivider,
  SearchResultsContainer,
  SearchResultsList,
  SearchQueryText,
  SearchResultLenghtText,
  SearchResultContainer,
  CenterTextContainer,
  BottomElements,
} from "./style"
import { Button } from "../../components/Button/Button"

const SearchPage = () => {
  const { searchText, setSearchText, filteredTexts } = useSearch()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [searchText])

  const navigate = useNavigate()

  const results = () => {
    if (filteredTexts.length != 0) {
      return false
    } else return true
  }

  const handleNavigateHome = () => {
    navigate("/")
  }

  const head = true
  const { isTablet, isMobile } = useWindowDimensions()

  return (
    <>
      {searchText === "" ? (
        <NoResultsContainer>
          <SearchBox searchText={searchText} setSearchText={setSearchText} />
          <CenterTextContainer>
            <NotFoundHeadlineText $isTablet={isTablet} $isMobile={isMobile}>
              Faça sua busca
            </NotFoundHeadlineText>
            <NotFoundBodyText>
              {isMobile ? "" : "Você pode fazer sua busca no campo acima:"}
            </NotFoundBodyText>
          </CenterTextContainer>
          <ContentDivider $results={results} />
          <BottomElements>
            <Button
              placeholder={"Retornar para a Página Inicial"}
              onClick={handleNavigateHome}
            />
          </BottomElements>
        </NoResultsContainer>
      ) : filteredTexts.length !== 0 ? (
        <SearchResultsContainer $isMobile={isMobile}>
          <SearchBox searchText={searchText} setSearchText={setSearchText} />
          <SearchQueryText>"{searchText}"</SearchQueryText>
          {isLoading ? (
            <Loader />
          ) : (
            <SearchResultLenghtText>
              Foram encontrados {filteredTexts.length} resultados para sua
              pesquisa
            </SearchResultLenghtText>
          )}
          <SearchResultsList>
            <ContentDivider $head={head} />
            {filteredTexts.map((result, index) => (
              <SearchResultContainer key={index}>
                {index >= filteredTexts.length || index == 0 ? (
                  ""
                ) : (
                  <ContentDivider />
                )}
                <SearchResultCard isLoading={isLoading} data={result} />
              </SearchResultContainer>
            ))}
          </SearchResultsList>
        </SearchResultsContainer>
      ) : (
        <NoResultsContainer>
          <SearchBox searchText={searchText} setSearchText={setSearchText} />
          <CenterTextContainer>
            <NotFoundHeadlineText $isTablet={isTablet} $isMobile={isMobile}>
              Nenhum resultado correspondente
            </NotFoundHeadlineText>

            <NotFoundBodyText>
              {isMobile
                ? ""
                : "Você pode tentar buscar de outro jeito, tente novamente acima:"}
            </NotFoundBodyText>
          </CenterTextContainer>
          <ContentDivider $results={results} />
          <BottomElements>
            <NotFoundBodyText $isTablet={isTablet}>
              Não conseguimos encontrar a página que você está procurando. Tente
              voltar à <Bold>página inicial</Bold> ou entre em contato conosco
              para obter mais informações.
            </NotFoundBodyText>
            <Button
              placeholder={"Retornar para a Página Inicial"}
              onClick={handleNavigateHome}
            />
          </BottomElements>
        </NoResultsContainer>
      )}
    </>
  )
}

export default SearchPage
