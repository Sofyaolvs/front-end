import { useSearch } from "../../contexts/SearchContext.jsx"
import { CardContainer, TitleText, BodyText, LoadingBlock } from "./style.js"

const SearchResultCard = ({ data, isLoading }) => {
  const { searchText } = useSearch()

  const highlightText = (text, searchText) => {
    if (!text || !searchText) return text

    const regex = new RegExp(`\\b(${searchText})\\b`, "gi")
    const parts = text.split(regex)

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span
          key={index}
          style={{ backgroundColor: "yellow", fontWeight: "bold" }}
        >
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    )
  }

  const flattenAndFilterTexts = (texts) => {
    return texts
      .flat(Infinity)
      .filter(Boolean)
      .map((text) => (typeof text === "string" ? text : String(text)))
  }

  const descriptionTexts = flattenAndFilterTexts(data.texts || [])
  const routeTexts = flattenAndFilterTexts(data.matchingTexts || []).join(" ")
  const title = data.name ? data.name.toLowerCase() : ""

  return (
    <>
      {isLoading ? (
        <LoadingBlock />
      ) : (
        <CardContainer>
          <TitleText
            style={{ textDecoration: "none" }}
            to={`${data.link}`}
            state={{ from: "busca", searchText: searchText }}
          >
            {title}
          </TitleText>
          {title === "sobre o projeto" || title === "inicio" ? (
            <BodyText>
              {highlightText(descriptionTexts.join(" ")).slice(0, 420) + "..."}
            </BodyText>
          ) : (
            <BodyText>
              {descriptionTexts && descriptionTexts.length > 0 ? (
                descriptionTexts.map((text, index) => {
                  const slicedText =
                    text.length > 420 ? text.slice(0, 420) + "..." : text
                  return (
                    <span key={index}>
                      {highlightText(slicedText, searchText)}{" "}
                    </span>
                  )
                })
              ) : (
                <span>
                  {highlightText(routeTexts.slice(0, 420) + "...", searchText)}
                </span>
              )}
            </BodyText>
          )}
        </CardContainer>
      )}
    </>
  )
}

export default SearchResultCard
