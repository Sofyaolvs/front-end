import React from 'react'
import {
  ContainerCard,
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardDate,
  CardSeeMore,
} from './styles.js'
import noticiasImg from '../../assets/noticias.jpg'
import relatorioDadosImg from '../../assets/relatorio_dados.jpg'

export const NewsCard = ({ image, title, description, date, onReadMore, tipo }) => {
  const getImageByType = () => {
    const tipoLower = tipo?.toLowerCase() || ''

    if (tipoLower === 'dados' || tipoLower === 'relatorio de dados' || tipoLower === 'relatorio_dados') {
      return relatorioDadosImg
    }
    if (tipoLower === 'noticia' || tipoLower === 'noticias') {
      return noticiasImg
    }
    return image || noticiasImg
  }

  return (
    <ContainerCard>

    <CardContainer>
      <CardImage src={getImageByType()} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardFooter>
          <CardDate>{date}</CardDate>
          <span>-</span>
          <CardSeeMore onClick={onReadMore}>Ver mais</CardSeeMore>
        </CardFooter>
      </CardContent>
    </CardContainer>
    </ContainerCard>

  )
}
