import {uniqueFeatures} from "./uniqueFeaturesFilter.js"
// VARIÁVEIS DE RESULTADO DO QUIZ
// pEner = emoji selecionado (0 a 1)
// pNat = natureza (0 ou 1)
// pCult = cultura (0 ou 1)
// pCont = contemplação (0 ou 1)
// pGast = gastronomia (0 ou 1)
// pRec = recreação (0 ou 1)
// pCom = acompanhado? (0 a 1)

// VARIÁVEIS DE ATRIBUTO DE ROTA
// D = distância total
// I = inclinação
// Nat = natureza
// Cult = cultura
// Cont = contemplação
// Gast = gastronomia
// Rec = recreação
// segV = segurança viária
// segP = segurança pública

function calculateRouteGrade(
  pEner,
  pNat,
  pCult,
  pCont,
  pGast,
  pRec,
  pCom,
  D,
  I,
  Nat,
  Cult,
  Cont,
  Gast,
  Rec,
  segV,
  segP
) {
  // Alterei foi tudo aqui, mexam com calma
  const a1 = (pEner - 3.5) * D

  const a2 = (pEner * I)/5

  const denominator = pNat + pCult + pCont + pGast + pRec
  const b = denominator > 0
    ? (pNat * Nat + pCult * Cult + pCont * Cont + pGast * Gast + pRec * Rec) / denominator
    : 0

  const c = (pCom) * ((segV + segP) / 2)

  return 0.25*a1 + 0.15*a2 + 0.3*b + 0.3*c
}

export async function calculateBestRoutes(
  pEner,
  pNat,
  pCult,
  pCont,
  pGast,
  pRec,
  pCom,
  routesJson
) {
  let routesGrades = []

  if (!routesJson || !routesJson.features) {
    return []
  }

  const routesData = routesJson

  const routes = uniqueFeatures(routesData.features)

  routes.forEach((r) => {
    const D = r.properties.dist
    const I = r.properties.inclinacao
    const Nat = r.properties.nat
    const Cult = r.properties.cult
    const Cont = r.properties.cont
    const Gast = r.properties.gast
    const Rec = r.properties.rec
    const segV = r.properties.seg_viaria
    const segP = r.properties.seg_publica

    const calculatedGrade = calculateRouteGrade(
      pEner,
      pNat,
      pCult,
      pCont,
      pGast,
      pRec,
      pCom,
      D,
      I,
      Nat,
      Cult,
      Cont,
      Gast,
      Rec,
      segV,
      segP
    )

    routesGrades.push({ grade: calculatedGrade, route: r })
  })

  routesGrades.sort((a, b) => b.grade - a.grade)

  //as rotas já foram filtradas pelo uniqueFeatures para pegar apenas rotas únicas
  //agora pegamos apenas as top 4

  routesGrades = routesGrades.slice(0, 4)

  return routesGrades
}