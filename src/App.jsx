import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout.jsx"
import HomePage from "./pages/HomePage/HomePage.jsx"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx"
import AboutPage from "./pages/AboutPage/AboutPage.jsx"
import SearchPage from "./pages/SearchPage/SearchPage.jsx"
import WhereFindPage from "./pages/WhereFindPage/WhereFindPage.jsx"
import ContactPage from "./pages/ContactPage/ContactPage.jsx"
import AllRoutesPage from "./pages/AllRoutesPage/AllRoutesPage.jsx"
import RouteDetails from "./pages/RoutesDetails/RoutesDetails.jsx"
import { CycleAroundFortalezaPage } from "./pages/CycleAroundFortalezaPage/CycleAroundFortalezaPage.jsx"
import { QuizPage } from "./pages/QuizPage/QuizPage.jsx"
import { QuizResultPage } from "./pages/QuizResult/QuizResultPage.jsx"
import ScrollToTop from "./utils/scrollToTop.jsx"
import ContentPage from "./pages/ContentPage/ContentPage.jsx"
import AdminAcessPage from "./pages/AdminAcessPage/AdminAcessPage.jsx"
import ChoosePage from "./pages/ChoosePage/ChoosePage.jsx"
import CreateContentPage from "./pages/CreateContentPage/CreateContentPage.jsx"
import CreateGeojsonPage  from "./pages/CreateGeojsonPage/CreateGeojsonPage.jsx"

function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="onde-encontrar" element={<WhereFindPage />} />
          <Route path="conteudos" element={<ContentPage/>} />
          <Route path="sobre" element={<AboutPage />} />
          <Route path="busca" element={<SearchPage />} />
          <Route path="busca/:query" element={<SearchPage />} />
          <Route path="contato" element={<ContactPage />} />
          <Route
            path="pedale-por-fortaleza"
            element={<CycleAroundFortalezaPage />}
          />
          <Route path="quiz" element={<QuizPage />} />
          <Route path="rotas-encontradas" element={<QuizResultPage />} />
          <Route path="/rotas" element={<AllRoutesPage />} />
          <Route path="/rotas/:routeId" element={<RouteDetails />} />
          <Route
            path="/rotas-encontradas/:routeId"
            element={<RouteDetails />}
          />
          <Route path="rotas-encontradas/rotas/" element={<AllRoutesPage />} />
          <Route
            path="rotas-encontradas/rotas/:routeId"
            element={<RouteDetails />}
          />
          <Route path="admin" element={<AdminAcessPage/>} />
          <Route path="admin/escolher-pagina" element={<ChoosePage/>} />
          <Route path="admin/criar-conteudo" element={<CreateContentPage/>} />
          <Route path="admin/criar-geojson" element={<CreateGeojsonPage/>} />

          <Route path="*" element={<NotFoundPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
