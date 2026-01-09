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
  const a = (1 / pEner) * ((D + I) / 2)

  const b =
    (pNat * Nat + pCult * Cult + pCont * Cont + pGast * Gast + pRec * Rec) /
    (pNat + pCult + pCont + pGast + pRec)

  const c = (1 / pCom) * ((segV + segP) / 2)

  const result = b + c - a

  console.log({
    D,
    I,
    a,
    b,
    c,
    result
  })

  return result
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

  routes.forEach((r, index) => {
    const D = r.properties.dist
    const I = r.properties.inclinacao
    const Nat = r.properties.nat
    const Cult = r.properties.cult
    const Cont = r.properties.cont
    const Gast = r.properties.gast
    const Rec = r.properties.rec
    const segV = r.properties.seg_viaria
    const segP = r.properties.seg_publica

    console.log(`\n--- Rota: ${r.properties.rota} (${r.properties.sentido}) ---`)
    console.log(`dist_total: ${r.properties.dist_total}m`)

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

  //as rotas vem com ida e volta sempre ao lado da outra, entao eu
  //todavia, agora tem umas circulares e outras com 'desvios',
  //sendo necessário filtrar as rotas para usar apenas a primeira daquelas com um id unico como base

  routesGrades = routesGrades.filter((r, i) => i % 2 === 0)

  routesGrades = routesGrades.slice(0, 4)

  return routesGrades
}