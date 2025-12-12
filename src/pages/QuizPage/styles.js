import styled from "styled-components"

export const QuestionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-bottom: 3rem;
  margin-top: 4rem;
`

export const QuestionBox = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 840px) {
    height: 390px;
  }

  @media (max-width: 640px) {
    height: 300px;
  }
`

export const PrevAndNextButtonsContainer = styled.div`
  display: flex;
  width: 90%;
  max-width: 700px;
  justify-content: space-between;
  gap: 20px;
`

export const ButtonLimitBox = styled.div`
  width: 100%;
  max-width: 220px;
`
