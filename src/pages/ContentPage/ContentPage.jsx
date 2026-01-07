import React, { useState, useEffect } from 'react'
import { Container } from '../GlobalComponents.js'

import { texts } from "../../resources/texts.js"
import { useWindowDimensions } from "../../hooks/useWindowDimensions.jsx"
import { GenericMediaHeroSection } from '../../components/GenericMediaHeroSection/GenericMediaHeroSection.jsx'
import { HeroSectionImage } from '../../components/GenericMediaHeroSection/styles.js'
import { NewsCard } from '../../components/NewsCard/NewsCard.jsx'
import { ContentFilters } from '../../components/ContentFilters/ContentFilters.jsx'
import { getAllContent } from '../../services/apiService.js'
import fotos_noticias from '../../assets/noticias.jpg'


const ContentPage = () => {
    const { isMobile, isTablet } = useWindowDimensions()
    const [contents, setContents] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [selectedTag, setSelectedTag] = useState('')
    const [searchText, setSearchText] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    useEffect(() => {
        fetchContents()
    }, [])

    const fetchContents = async () => {
        try {
            const response = await getAllContent()
            setContents(response.data)
        } catch (error) {
            console.error("Erro ao buscar dados e conteúdos:", error)
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

    const handleClearFilters = () => {
        setSelectedTag('')
        setSearchText('')
        setStartDate('')
        setEndDate('')
    }

    const filteredContents = contents.filter((content) => {

        if (selectedTag) {
            const tipoLower = content.tipo?.toLowerCase() || ''
            if (selectedTag === 'dados') {
                if (!tipoLower.includes('dado') && !tipoLower.includes('relatorio')) {
                    return false
                }
            } else if (selectedTag === 'conteudos') {
                if (!tipoLower.includes('noticia') && !tipoLower.includes('conteudo')) {
                    return false
                }
            }
        }

        if (searchText) {
            const searchLower = searchText.toLowerCase()
            const titleMatch = content.titulo?.toLowerCase().includes(searchLower)
            const descriptionMatch = content.descricao?.toLowerCase().includes(searchLower)
            if (!titleMatch && !descriptionMatch) {
                return false
            }
        }


        if (startDate || endDate) {
            const contentDate = new Date(content.dataDePublicacao)
            if (startDate) {
                const start = new Date(startDate)
                if (contentDate < start) {
                    return false
                }
            }
            if (endDate) {
                const end = new Date(endDate)
                end.setHours(23, 59, 59, 999) 
                if (contentDate > end) {
                    return false
                }
            }
        }

        return true
    })


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

            <ContentFilters
                selectedTag={selectedTag}
                onTagChange={setSelectedTag}
                searchText={searchText}
                onSearchChange={setSearchText}
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
                onClearFilters={handleClearFilters}
            />

            {isLoading ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    Carregando dados e conteúdos...
                </div>
            ) : filteredContents.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    Nenhum conteúdo encontrado
                </div>
            ) : (
                filteredContents.map((content) => (
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

