import SearchIcon from "../../assets/searchIconGreen.svg"
import { texts } from "../../resources/texts"

export const navModules = [
  {
    title: texts.headerNavTexts.menu[0],
    link: "/",
  },
  {
    title: texts.headerNavTexts.menu[1],
    link: "/pedale-por-fortaleza",
  },
  {
    title: texts.headerNavTexts.menu[2],
    link: "/onde-encontrar",
  },
  {
    title: texts.headerNavTexts.menu[3],
    link: "/conteudos",
  },
  {
    title: texts.headerNavTexts.menu[4],
    link: "/sobre",
  },
  {
    title: texts.headerNavTexts.menu[5],
    link: "/contato",
  },
]

export const getAllLinks = () => {
  return navModules.map((module) => module.link)
}
