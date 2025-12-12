import React, { useState, useEffect } from 'react'
import { Container } from '../GlobalComponents.js'

import { texts } from "../../resources/texts.js"
import { useWindowDimensions } from "../../hooks/useWindowDimensions.jsx"
import { GenericMediaHeroSection } from '../../components/GenericMediaHeroSection/GenericMediaHeroSection.jsx'
import { HeroSectionImage } from '../../components/GenericMediaHeroSection/styles.js'
import { NewsCard } from '../../components/NewsCard/NewsCard.jsx'
import { getAllContent } from '../../services/apiService.js'
import fotos_noticias from '../../assets/noticias.jpg'


const ContentPage = () => {
    const { isMobile, isTablet } = useWindowDimensions()
    const [contents, setContents] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchContents()
    }, [])

    const fetchContents = async () => {
        try {
            const response = await getAllContent()
            setContents(response.data)
        } catch (error) {
            console.error("Erro ao buscar conteúdos:", error)
        } finally {
            setIsLoading(false)
        }
    }

    const formatDate = (dateString) => {
        if (!dateString) return 'Data não disponível'
        const date = new Date(dateString)
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            timeZone:'UTC'
        })
    }

    const handleButtonClick = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    }


  return (
    <Container $isTablet={isTablet}>
            <GenericMediaHeroSection
            title={texts.pages.contentTexts.heroHeader}
            description={
                <>
                {texts.pages.contentTexts.heroSubheader}
                </>
            }
            buttonLabel={texts.buttonsTexts[8]}
            onClick={handleButtonClick}
            >
            <HeroSectionImage src={fotos_noticias} alt="Garota pedalando" />
            </GenericMediaHeroSection>

            {isLoading ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    Carregando conteúdos...
                </div>
            ) : contents.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    Nenhum conteúdo encontrado
                </div>
            ) : (
                contents.map((content) => (
                    <NewsCard
                        key={content._id}
                        image={fotos_noticias}
                        title={content.titulo}
                        description={content.descricao}
                        date={formatDate(content.dataDePublicacao)}
                        onReadMore={() => window.open(content.linkDeAcesso, '_blank')}
                        tipo={content.tipo}
                    />
                ))
            )}

    </Container>
  )
}

export default ContentPage

