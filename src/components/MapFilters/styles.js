import styled from "styled-components"
import { label2Text } from "../../style/global"
export const ButtomsContainer = styled.div`
  width: 100%; /* Defina a largura do contêiner */
  white-space: nowrap; /* Impede que os itens quebrem linha */
`
export const ButtomsScroller = styled.div`
  display: flex; /* Alinha os itens em uma linha usando flexbox */
  padding: 10px 8px;
  gap: 8px;
  overflow-x: auto; /* Permite o scroll horizontal */

  /* background-color: blue; */
  /* display: flex; */
  /* flex-wrap: nowrap; */
  /* overflow-x: scroll; */

  @media (max-width: 840px) {
    padding: 8px 6px;
    gap: 6px;
  }
`
export const Buttom = styled.label`
  /* width: 100%; */
  margin: 0 0px;
  height: 40px;
  padding: 4px 16px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: var(--neutral-white);
  border: 3px solid var(--neutral-gray);

  color: var(--neutral-gray);
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  ${label2Text}

  @media (max-width: 840px) {
    height: 36px;
    padding: 4px 12px;
    gap: 8px;
    font-size: 0.85rem;
  }

  input {
    display: none; /* Esconde o input, mas ele ainda está presente para o comportamento de "checked" */
  }

  img {
    width: 28px;
    height: 28px;
    //inactive
    filter: invert(36%) sepia(0%) saturate(0%) hue-rotate(190deg)
      brightness(87%) contrast(83%);
    /* margin-right: 16px; */
  }
  span {
    /* vertical-align: middle; */
    white-space: nowrap;
  }

  /* Estilos aplicados quando o input está marcado */
  &:has(input:checked) {
    border-color: ${({ color }) =>
      color ||
      "var(--secondary-orange)"}; /* Usa a cor recebida ou laranja como fallback */
    color: ${({ color }) =>
      color ||
      "var(--secondary-orange)"}; /* Usa a cor recebida ou laranja como fallback */
  }
  input:checked + img {
    filter: ${({ filter }) =>
      filter ||
      "invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)"}; /* Usa o filtro recebido ou o padrão */
  }
`
