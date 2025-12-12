import { Container } from "../GlobalComponents.js"
import { DisplayText2 } from "../../style/texts.js"
import { useEffect, useState } from "react"
import { ProgressBar } from "../../components/ProgressBar/ProgressBar.jsx"
import { QuestionOne } from "./QuestionOne/QuestionOne.jsx"
import {
  ButtonLimitBox,
  PrevAndNextButtonsContainer,
  QuestionBox,
  QuestionsContainer,
} from "./styles.js"
import { Button } from "../../components/Button/Button.jsx"
import { QuestionTwo } from "./QuestionTwo/QuestionTwo.jsx"
import { QuestionThree } from "./QuestionThree/QuestionThree.jsx"

import gastronomiaIcon from "../../assets/gastronomia_icon.svg"
import culturalIcon from "../../assets/cultural_icon.svg"
import naturezaIcon from "../../assets/natureza_icon.svg"
import recreacaoIcon from "../../assets/recreacao_icon.svg"
import comtemplacaoIcon from "../../assets/comtemplacao_icon.svg"
import meSurpreendaIcon from "../../assets/me_surpreenda_icon.svg"
import { calculateBestRoutes } from "../../utils/routeRecomendation.js"
import { useNavigate } from "react-router-dom"
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation.jsx"
import BreadcrumbComponent from "../../components/BreadcrumbComponent/BreadcrumbComponent.jsx"
import { useRoutesContext } from "../../contexts/RoutesContext.jsx"
import { showErrorToast } from "../../utils/toast.jsx"

export function QuizPage() {
  const navigate = useNavigate()
  const { routesData, routesDataIsLoaded, error } = useRoutesContext()
  const [isLoading, setIsLoading] = useState(false)
  const [actualQuestion, setActualQuestion] = useState(0)
  const [selectedEmoji, setSelectedEmoji] = useState(2)
  const [isAccompanied, setIsAccompanied] = useState(null)
  const [routeTypes, setRouteTypes] = useState([
    {
      label: "Gastronomia",
      iconImg: gastronomiaIcon,
      value: 0,
      isSelected: false,
    },
    {
      label: "Cultural",
      iconImg: culturalIcon,
      value: 1,
      isSelected: false,
    },
    {
      label: "Natureza",
      iconImg: naturezaIcon,
      value: 2,
      isSelected: false,
    },
    {
      label: "Recreação",
      iconImg: recreacaoIcon,
      value: 3,
      isSelected: false,
    },
    {
      label: "Contemplação",
      iconImg: comtemplacaoIcon,
      value: 4,
      isSelected: false,
    },
    {
      label: "Me surpreenda",
      iconImg: meSurpreendaIcon,
      value: 5,
      isSelected: false,
    },
  ])
  const selectedTypes = routeTypes.filter((routeType) => routeType.isSelected)

  const questionsTitles = [
    <>Como está a sua disposição para pedalar?</>,
    <>Que tipo de experiência você busca hoje?</>,
    <>E para finalizar, você irá pedalar acompanhado?</>,
  ]

  function previousQuestion() {
    if (actualQuestion > 0) {
      setActualQuestion(actualQuestion - 1)
    }
  }

  function nextQuestion() {
    if (actualQuestion === 0) {
      setActualQuestion(actualQuestion + 1)
      return
    }
    if (actualQuestion === 1) {
      if (selectedTypes.length > 0) {
        setActualQuestion(actualQuestion + 1)
      }
      return
    }
    if (actualQuestion === 2 && isAccompanied !== null) {
      handleCalculateBestRoutes()
    }
  }

  async function showLoading() {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsLoading(false)
  }

  async function handleCalculateBestRoutes() {
    if (!routesData || error) {
      showErrorToast("Erro ao carregar rotas.Tente novamente mais tarde.")
      return
    }

    const questionOneDicionary = { 0: 5, 1: 2, 2: 3, 3: 4, 4: 5 }
    const pEner = questionOneDicionary[selectedEmoji]
    const pGast = selectedTypes.find((rT) => rT.value === 0) ? 1 : 0
    const pCult = selectedTypes.find((rT) => rT.value === 1) ? 1 : 0
    const pNat = selectedTypes.find((rT) => rT.value === 2) ? 1 : 0
    const pRec = selectedTypes.find((rT) => rT.value === 3) ? 1 : 0
    const pCont = selectedTypes.find((rT) => rT.value === 4) ? 1 : 0
    const pCom = isAccompanied ? 0.5 : 1

    const bestRoutes = await calculateBestRoutes(
      pEner,
      pNat,
      pCult,
      pCont,
      pGast,
      pRec,
      pCom,
      routesData
    )

    if (bestRoutes.length === 0) {
      showErrorToast("Não foi possível calcular as melhores rotas. Verifique se há rotas disponíveis na API.")
      return
    }

    await showLoading()
    sessionStorage.setItem("bestRoutes", JSON.stringify(bestRoutes))
    navigate("/rotas-encontradas", { state: { bestRoutes: bestRoutes } })
  }

  const bread = [
    { label: "Início", path: "/" },
    { label: "Pedale por Fortaleza", path: "/pedale-por-fortaleza" },
    { label: "Quiz", path: "/quiz" },
  ]

  return (
    <>
      <BreadcrumbComponent bread={bread} contrast={false} />
      <Container>
        <QuestionsContainer>
          {!isLoading ? (
            <>
              <DisplayText2
                style={{ textAlign: "center", width: "95%", maxWidth: "800px" }}
              >
                {questionsTitles[actualQuestion]}
              </DisplayText2>

              <ProgressBar step={actualQuestion} />

              <QuestionBox>
                {actualQuestion === 0 ? (
                  <QuestionOne
                    selectedEmoji={selectedEmoji}
                    setSelectedEmoji={setSelectedEmoji}
                  />
                ) : actualQuestion === 1 ? (
                  <QuestionTwo
                    routeTypes={routeTypes}
                    setRouteTypes={setRouteTypes}
                  />
                ) : (
                  <QuestionThree
                    isAccompanied={isAccompanied}
                    setIsAccompanied={setIsAccompanied}
                  />
                )}
              </QuestionBox>

              <PrevAndNextButtonsContainer>
                <ButtonLimitBox style={{ left: 0 }}>
                  <Button
                    onClick={previousQuestion}
                    backgroundColor={"#fff"}
                    placeholderColor={
                      actualQuestion === 0
                        ? "var(--neutral-gray)"
                        : "var(--secondary-orange)"
                    }
                    placeholder={"Voltar"}
                    style={{
                      border: `3px solid ${
                        actualQuestion === 0
                          ? "var(--neutral-gray)"
                          : "var(--secondary-orange)"
                      }`,
                    }}
                  />
                </ButtonLimitBox>
                <ButtonLimitBox style={{ right: 0 }}>
                  <Button
                    onClick={nextQuestion}
                    placeholder={"Continuar"}
                    backgroundColor={
                      (actualQuestion === 1 && selectedTypes.length === 0) ||
                      (actualQuestion === 2 && isAccompanied === null)
                        ? "var(--neutral-gray)"
                        : "var(--secondary-orange)"
                    }
                    style={{
                      border: `3px solid ${
                        (actualQuestion === 1 && selectedTypes.length === 0) ||
                        (actualQuestion === 2 && isAccompanied === null)
                          ? "var(--neutral-gray)"
                          : "var(--secondary-orange)"
                      }`,
                    }}
                  />
                </ButtonLimitBox>
              </PrevAndNextButtonsContainer>
            </>
          ) : (
            <LoadingAnimation />
          )}
        </QuestionsContainer>
      </Container>
    </>
  )
}
