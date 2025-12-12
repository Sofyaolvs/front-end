import styled from "styled-components"
import { body1Text, headlineText, display2Text } from "../../style/global.js"

export const NotFoundHeadlineText = styled.h1`
  ${({ $isMobile }) => ($isMobile ? headlineText : display2Text)};
  text-align: center;
  color: var(--neutral-black);
  font-weight: 700;
  margin-top: ${({ $isMobile }) => ($isMobile ? "32px" : "64px")};
  max-width: 712px;
`

export const NotFoundBodyText = styled.p`
  ${body1Text};
  text-align: ${({ $isTablet }) => ($isTablet ? "left" : "center")};
  color: var(--neutral-dark-gray);
  font-weight: 500;
  line-height: 1.5rem;
  max-width: 712px;
`

export const Bold = styled.strong`
  font-weight: 700;
`

export const ContentDivider = styled.div`
  width: 100%;
  max-width: ${({ $results }) => ($results ? "720px" : "1196px")};
  height: 1px;
  background-color: var(--neutral-light-gray);
  margin: 40px 0 40px 0;
  align-self: center;
  margin-bottom: ${({ $head }) => ($head ? "64px" : "40px")};
`

export const SearchResultsContainer = styled.div`
  display: flex;
  flex: 1;
  min-height: 708px;
  flex-direction: column;
  padding: ${({ $isMobile }) =>
    $isMobile ? "40px 16px 40px 16px" : "120px 16px 120px 16px"};
  align-items: ${({ $isMobile }) => ($isMobile ? "" : "center")};
  justify-content: ${({ $isMobile }) => ($isMobile ? "" : "center")};
`

export const SearchResultsList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 1196px;
  padding-top: 24px;
`

export const SearchQueryText = styled.h2`
  ${headlineText};
  color: var(--neutral-black);
  font-weight: 700;
  margin-top: 32px;
`
export const SearchResultLenghtText = styled.p`
  ${body1Text};
  color: var(--neutral-dark-gray);
  font-weight: 400;
  margin-top: 16px;
`

export const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const NoResultsContainer = styled.div`
  display: flex;
  min-height: 708px;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 40px 16px 40px 16px;
  padding-top: ${({ $isTablet }) => ($isTablet ? "40px" : "120px")};
  padding-bottom: ${({ $isTablet }) => ($isTablet ? "40px" : "120px")};
`

export const CenterTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`

export const BottomElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`
