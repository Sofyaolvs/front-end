import axios from "axios"
import { dadosAbertosURL } from "./dadosAbertosURL.js"

const apiDadosAbertos = axios.create({
  baseURL: "/api",
})

export async function getDadoAberto(name) {
  try {
    const response = await apiDadosAbertos.get(
      `api/3/action/package_show?id=${name}`
    )
    const proxyUrl = response.data.result.resources[0].url
    const proxyDataUrl = proxyUrl.replace(dadosAbertosURL, "")
    const dataResponse = await apiDadosAbertos.get(proxyDataUrl)
    return dataResponse.data
  } catch (error) {
    // console.error(`Erro ao coletar ${name}: `, error)
    throw error
  }
}
