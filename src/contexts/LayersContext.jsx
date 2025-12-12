import { createContext, useContext, useState, useMemo, useEffect } from "react"
import { getDadoAberto } from "../services/dadosAbertosService.js"
import Estacionamento from "../assets/Estacionamento.svg"
import Road from "../assets/road.svg"
import BikeDock from "../assets/bike-dock.svg"
import DirectionsBike from "../assets/directions-bike.svg"
import Sprinkler from "../assets/sprinkler.svg"
import Signpost from "../assets/signpost.svg"
import SprinklerMarker from "../assets/marcadores/Xiringador.png"
import BikeDockMarker from "../assets/marcadores/parape-marcador.svg"
import DirectionsBikeMarker from "../assets/marcadores/bicicletar-marcador.svg"
import EstacionamentoMarker from "../assets/marcadores/estacionamento-marcador.svg"
import ApoioMarker from "../assets/marcadores/ponto-apoio-marcador.svg"
import SaudeMarker from "../assets/marcadores/ponto-saude-marcador.svg"
import RotasCiclofaixaLazerJson from "../assets/rotas_ciclofaixa_de_lazer.json"
import ParapesJson from "../assets/Parapes.json"
import EstacaoBicicletarJson from "../assets/Estacoes_bicicletar.json"
import MalhaCicloviariaJson from "../assets/Malha_cicloviaria.json"
import EstacionamentoBikeJson from "../assets/Estacionamentos_de_bicicleta.json"
import { getDadoAbertoOffline } from "../services/dadosAbertosOffline.js"
import PontoApoioIcon from "../assets/ponto-apoio.svg"
import PontoSaudeIcon from "../assets/ponto-saude.svg"

const LayersContext = createContext({})

export function useLayersContext() {
  return useContext(LayersContext)
}

export default function LayersProvider({ children }) {
  const [layersData, setLayersData] = useState([])
  const [layersDataFilter, setLayersDataFilter] = useState([])
  const [layersDataIsLoaded, setLayersDataIsLoaded] = useState(false)

  // useEffect(()=>{
  // console.log("fetching in context");
  //   fetchLayersData()
  // },[])

  async function fetchLayersData() {
    console.log("fetching")
    setLayersDataIsLoaded(false)

    try {
      const data = await Promise.all([
        // getDadoAberto("xiringadores"),
        getDadoAberto("rotas-ciclofaixa-de-lazer"),
        getDadoAberto("parapes"),
        getDadoAberto("estacoes-bicicletar"),
        getDadoAberto("malha-cicloviaria"),
        getDadoAberto("estacionamentos-de-bicicleta"),
      ])

      setLayersData(data)
      setLayersDataFilter(data)
      setLayersDataIsLoaded(true)
    } catch (error) {
      console.error(`Erro ao coletar dados do onde encontrar -> ${error}`)
      fetchLayersDataOffline()
    }
  }

  async function fetchLayersDataOffline() {
    console.log("fetching Offline")
    await Promise.all([
      // getDadoAbertoOffline("xiringadores"),
      getDadoAbertoOffline(RotasCiclofaixaLazerJson),
      getDadoAbertoOffline(ParapesJson),
      getDadoAbertoOffline(EstacaoBicicletarJson),
      getDadoAbertoOffline(MalhaCicloviariaJson),
      getDadoAbertoOffline(EstacionamentoBikeJson),
    ])
      .then((data) => {
        console.log("Offline Data:", data)
        setLayersData(data)
        setLayersDataFilter(data)
        setLayersDataIsLoaded(true)
      })
      .catch((error) => {
        console.error(`Erro ao coletar dados do onde encontrar -> ${error}`)
        setLayersDataIsLoaded(true)
        throw error
      })
  }

  async function fetchSingleLayerDataOffline(dataName) {
    console.log("fetching single Offline")
    let dataJson
    switch (dataName) {
      case "estacoes-bicicletar":
        dataJson = EstacaoBicicletarJson
        break
      case "rotas-ciclofaixa-de-lazer":
        dataJson = RotasCiclofaixaLazerJson
        break
      case "parapes":
        dataJson = ParapesJson
        break
      case "malha-cicloviaria":
        dataJson = MalhaCicloviariaJson
        break
      case "estacionamentos-de-bicicleta":
        dataJson = EstacionamentoBikeJson
        break
      default:
        console.log("Não reconhecemos esse item")
    }
    await getDadoAbertoOffline(dataJson)
      .then((data) => {
        console.log("Offline single Data:", data)
        setLayersData([data])
        setLayersDataFilter([data])
        setLayersDataIsLoaded(true)
      })
      .catch((error) => {
        console.error(`Erro ao coletar dados do onde encontrar -> ${error}`)
        setLayersDataIsLoaded(true)
        throw error
      })
  }

  async function fetchSingleLayerData(dataName) {
    console.log("fetching single")
    setLayersDataIsLoaded(false)
    await getDadoAberto(dataName)
      .then((data) => {
        setLayersData([data])
        setLayersDataFilter([data])
        setLayersDataIsLoaded(true)
      })
      .catch((error) => {
        fetchSingleLayerDataOffline(dataName)
        console.error(`Erro ao coletar dados do onde encontrar -> ${error}`)
        // setLayersDataIsLoaded(true)
      })
  }

  const formattedLayersData = useMemo(() => {
    return [
      // {
      //   name: "Xiringadores",
      //   data: layersData.filter((layer)=> layer.name == "xiringadores")[0] || [],
      //   icon: Sprinkler,
      //   marker: SprinklerMarker,
      //   style: {
      //     color: "#109CC8",
      //     filter:
      //       "invert(45%) sepia(83%) saturate(581%) hue-rotate(150deg) brightness(94%) contrast(91%)",
      //   },
      // },
      {
        name: "Rotas de lazer",
        data:
          layersData.filter(
            (layer) => layer.name.toLowerCase() == "rotas_ciclofaixa_de_lazer"
          )[0] || [],
        icon: Signpost,
        style: {
          color: "#5790f9",
          filter:
            "invert(100%) sepia(97%) saturate(3650%) hue-rotate(226deg) brightness(160%) contrast(95%)",
        },
      },
      {
        name: "Parapés",
        data:
          layersData.filter(
            (layer) => layer.name.toLowerCase() == "parapes"
          )[0] || [],
        icon: BikeDock,
        marker: BikeDockMarker,
        style: {
          color: "#009889",
          filter:
            "invert(54%) sepia(62%) saturate(5000%) hue-rotate(147deg) brightness(90%) contrast(98%)",
        },
      },
      {
        name: "Estações Bicicletar",
        data:
          layersData.filter(
            (layer) => layer.name.toLowerCase().includes("estacoesbicicletar")
          )[0] || [],
        icon: DirectionsBike,
        marker: DirectionsBikeMarker,
        style: {
          color: "#F8AE64",
          filter:
            "invert(62%) sepia(46%) saturate(3842%) hue-rotate(338deg) brightness(146%) contrast(93%)",
        },
      },
      {
        name: "Malha Cicloviária",
        data:
          layersData.filter(
            (layer) => layer.name.toLowerCase() == "malha_cicloviaria"
          )[0] || [],
        icon: Road,
        style: {
          color: "#bf63cbff",
          filter:
            "invert(33%) sepia(110%) saturate(6100%) hue-rotate(264deg) brightness(110%) contrast(89%)",
        },
      },
      {
        name: "Estacionamento de bicicleta",
        data:
          layersData.filter(
            (layer) =>
              layer.name.toLowerCase() == "estacionamentos_de_bicicleta"
          )[0] || [],
        icon: Estacionamento,
        marker: EstacionamentoMarker,
        style: {
          color: "#F15A22",
          filter:
            "invert(40%) sepia(92%) saturate(5740%) hue-rotate(362deg) brightness(124%) contrast(88%)",
        },
      },
    ]
  }, [layersData])

  return (
    <LayersContext.Provider
      value={{
        fetchLayersData,
        fetchSingleLayerData,
        formattedLayersData,
        layersData,
        layersDataFilter,
        layersDataIsLoaded,
      }}
    >
      {children}
    </LayersContext.Provider>
  )
}