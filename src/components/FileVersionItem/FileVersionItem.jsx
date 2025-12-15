import {
  FileItemContainer,
  FileItemContent,
  FileItemInfo,
  FileItemVersion,
  FileItemName,
  FileItemDate,
  FileItemButton,
  DownloadFileButton,
} from './styles'
import BackVersionIcon from '../../assets/BackVersionIcon.svg'
import Trash from '../../assets/TrashIcon.svg'
const FileVersionItem = ({ version, fileName, uploadDate, appliedDate, onAction, onDelete, onDownload, isApplied }) => {
  const formatVersion = (num) => {
    return `${String(num).padStart(3, '0')}`
  }

  return (
    <FileItemContainer>
      <FileItemContent>
        <FileItemInfo>
          <FileItemVersion>{formatVersion(version)}</FileItemVersion>
          <FileItemName>{fileName}</FileItemName>
          {isApplied && (
            <span style={{

              padding: '4px 12px',
              backgroundColor: '#4caf50',
              color: 'white',
              borderRadius: '12px',
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }}>
              ✓ Aplicada
            </span>
          )}
        </FileItemInfo>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {appliedDate && (
            <FileItemDate style={{ fontSize: '0.90rem', color: '#000000ff' }}>
              <strong>Aplicada:</strong> {appliedDate}
            </FileItemDate>
          )}
          <FileItemDate>
            <strong>Upload:</strong> {uploadDate}
          </FileItemDate>
        </div>
      </FileItemContent>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        <FileItemButton onClick={onDownload}>
          <img src={BackVersionIcon} alt="Download" />
        </FileItemButton>

        <DownloadFileButton onClick={onAction} disabled={isApplied}>
          {isApplied ? 'Versão atual' : 'Aplicar versão'}
        </DownloadFileButton>

        <DownloadFileButton onClick={onDelete} style={{ border: 'none' }}>
          <img src={Trash} alt="Deletar" style={{ width: '20px', height: '20px' }} />
        </DownloadFileButton>
      </div>
    </FileItemContainer>
  )
}

export default FileVersionItem
