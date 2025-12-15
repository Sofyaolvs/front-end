import styled from "styled-components"
import { body1Text, titleText, label1Text } from "../../style/global"

export const ContainerCard = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 840px) {
    padding: 10px 5px;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding:1rem;
  width: 1200px;
  min-height: 200px;
  background: var(--neutral-white);
  border-radius: 24px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
  gap: 1.5rem;
  overflow:hidden;
  line-break:anywhere;

  @media (max-width: 840px) {
    flex-direction: column;
    min-height: auto;
    padding: 0.75rem;
    gap: 0.75rem;
    border-radius: 16px;
  }
`

export const CardImage = styled.img`
  width: 300px;
  min-height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 16px;

  @media (max-width: 840px) {
    width: 100%;
    height: 150px;
    border-radius: 12px;
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;

  @media (max-width: 840px) {
    gap: 0.5rem;
  }
`

export const CardTitle = styled.h3`
  ${titleText};
  color: var(--primary-blue);
  margin: 0;
  font-size: 30px;

  @media (max-width: 840px) {
    font-size: 20px;
  }
`

export const CardDescription = styled.p`
  ${body1Text};
  color: var(--neutral-dark-gray);
  margin: 0;
  font-size: 16px;
  max-width: 100%;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 840px) {
    font-size: 14px;
  }
`

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 840px) {
    gap: 0.5rem;
  }
`

export const CardDate = styled.span`
  ${label1Text};
  color: var(--neutral-black);
  white-space: nowrap;
`

export const CardSeeMore = styled.span`
  ${body1Text};
  color: var(--primary-green);
  border: none;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`
