import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import { HighContrastStyle } from "../style/contrast"
import { GlobalStyle } from "../style/global"
import { validTheme } from "../utils/validTheme"

export const AcessibilityContext = createContext()

export const useAcessibilityContext = () => useContext(AcessibilityContext)

export const AcessibilityProvider = ({ children }) => {
  const [theme, setTheme] = useState(() =>
    validTheme(localStorage.getItem("theme"))
  )
  const [fontAcessibility, setFontAcessibility] = useState(0)
  const [currentPage, setCurrentPage] = useState("/")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "contrast" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }, [theme])

  const increaseFont = () => {
    setFontAcessibility((prev) => Math.min(prev + 0.03125, 0.3125))
  }

  const decreaseFont = () => {
    setFontAcessibility((prev) => Math.max(prev - 0.03125, -0.3125))
  }

  const resetFont = () => {
    setFontAcessibility(0)
  }

  return (
    <AcessibilityContext.Provider
      value={{
        theme,
        toggleTheme,
        fontAcessibility,
        increaseFont,
        decreaseFont,
        resetFont,
        currentPage,
        setCurrentPage,
      }}
    >
      <GlobalStyle fontAcessibility={fontAcessibility} />
      {theme === "contrast" && <HighContrastStyle />}
      {children}
    </AcessibilityContext.Provider>
  )
}