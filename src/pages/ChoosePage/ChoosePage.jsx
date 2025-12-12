import { Container, CardsContainer } from "./styles"
import fotoGeoJson from '../../assets/foto_geojson.jpg'
import fotoConteudos from '../../assets/foto_conteudos.jpg'
import InfoCard from '../../components/InfoCard/InfoCard'
import { texts } from "../../resources/texts.js"

export default function ChoosePage() {
    return (
        <Container>
            <CardsContainer>

            <InfoCard
            title={texts.pages.choosePageTexts.cardTitles[0]}
            backgroundImage={fotoConteudos}
            link={texts.pages.choosePageTexts.cardLinks[0]}
            />

            <InfoCard
            title={texts.pages.choosePageTexts.cardTitles[1]}
            backgroundImage={fotoGeoJson}
            link={texts.pages.choosePageTexts.cardLinks[1]}
            />
            </CardsContainer>
        </Container>
    )
}