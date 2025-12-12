import styled from "styled-components"

export const FileItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
  gap: 1rem;

  @media (max-width: 840px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.75rem 0;
    gap: 0.75rem;
  }
`

export const FileItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--neutral-black);
`

export const FileItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 840px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`

export const FileItemVersion = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--neutral-black);

  @media (max-width: 840px) {
    font-size: 1rem;
  }
`

export const FileItemName = styled.span`
  font-size: 1.1rem;
  color: var(--neutral-black);

  @media (max-width: 840px) {
    font-size: 1rem;
  }
`

export const FileItemDate = styled.span`
  font-size: 0.85rem;
  color: var(--neutral-black);
`

export const FileItemButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 840px) {
    img {
      width: 24px;
      height: 24px;
    }
  }
`

export const DownloadFileButton = styled.button`
  background:transparent;
  border:none;
  color:var(--primary-green);
  font-size:16px;
  border-bottom:2px solid var(--primary-green);
  cursor:pointer;
  margin-top:16px

  &:hover{
  opacity:0.7;
  }
`
