import styled from "styled-components"

export const GeojsonTitle = styled.h1`
  font-size: ${(props) => (props.$isTablet ? "1.5rem" : "2rem")};
  margin-bottom: 0.5rem;
`

export const GeojsonDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: ${(props) => (props.$isTablet ? "1rem" : "2rem")};
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;

  @media (max-width: 1240px) {
    max-width: 95%;
  }

  @media (max-width: 840px) {
    gap: 1rem;
    padding: 1rem;
    margin: 1rem auto;
  }
`

export const InputWrapper = styled.div`
  background-color: var(--neutral-white);
  padding: 4rem;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  @media (max-width: 1240px) {
    padding: 2.5rem;
  }

  @media (max-width: 840px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
`

export const FileInputContainer = styled.div`
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  border: ${(props) => props.$hasFile ? 'none' : '2px dashed var(--neutral-gray)'};
  background-color: ${(props) => props.$hasFile ? 'var(--primary-green)' : 'transparent'};
  padding: 10px;
  border-radius: 12px;
  max-width: 640px;
  margin: 0 auto;
  transition: all 0.3s ease;
`

export const FileInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 1rem;
  border-bottom: 2px solid var(--neutral-white);
`

export const FileVersion = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--neutral-white);

  @media (max-width: 840px) {
    font-size: 1rem;
  }
`

export const FileNameDisplay = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--neutral-white);
  flex: 1;
  padding: 0 1rem;

  @media (max-width: 840px) {
    font-size: 1rem;
    padding: 0 0.5rem;
  }
`

export const FileDate = styled.span`
  font-size: 1.2rem;
  color: var(--neutral-white);

  @media (max-width: 840px) {
    font-size: 0.9rem;
  }
`
  
  export const UploadIcon = styled.img`
  width: 60px;
  height: 60px;

  @media (max-width: 840px) {
    width: 48px;
    height: 48px;
  }
  `
  
  export const FileInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--neutral-gray);
  text-align: center;
  cursor: pointer;
  width: 100%;
  padding: 1rem;
`

export const FileInput = styled.input`
  display: none;
`


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 1rem;

  @media (max-width: 840px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const SubmitButton = styled.button`
  padding: 0.75rem 2rem;
  background-color:var(--secondary-orange);
  color: white;
  border: none;
  border-radius: 24px;
  transition:0.2s ease-in-out;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    opacity:0.9;
  }

  @media (max-width: 840px) {
    width: 100%;
    padding: 0.875rem 1.5rem;
  }
`

export const DeleteButton = styled.button`
  padding: 0.75rem 2rem;
  background-color:transparent;
  border: 2px solid var(--primary-red);
  color:var(--primary-red);
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 24px;
  font-weight: 700;
  transition:0.2s ease-in-out;

  &:hover {
    background-color:var(--primary-red);
    color:var(--neutral-white);
  }

  @media (max-width: 840px) {
    width: 100%;
    padding: 0.875rem 1.5rem;
  }
`

export const UploadedFilesList = styled.div`
  margin-top: 2rem;
`
