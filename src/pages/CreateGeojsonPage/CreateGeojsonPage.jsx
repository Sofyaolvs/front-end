import { useState, useEffect } from 'react'
import { useWindowDimensions } from "../../hooks/useWindowDimensions.jsx"
import {
    HeroSectionContainer,
    HeroSectionContent,
    HeroSectionImage } from '../WhereFindPage/styles'
import WhereFindImage from "../../assets/where-find-header.png"
import { Container } from '../GlobalComponents'
import {
  GeojsonTitle,
  GeojsonDescription,
  FormContainer,
  InputWrapper,
  FileInputContainer,
  FileInputLabel,
  FileInput,
  FileInfoContainer,
  FileVersion,
  FileNameDisplay,
  FileDate,
  ButtonContainer,
  SubmitButton,
  DeleteButton,
  UploadIcon,
  UploadedFilesList
} from './styles'
import { texts } from "../../resources/texts.js"
import uploadIcon from '../../assets/uploadIcon.svg'
import FileVersionItem from '../../components/FileVersionItem/FileVersionItem'
import Popup from '../../components/Popup/Popup'
import { showSuccessToast, showDeleteToast, showErrorToast } from '../../utils/toast.jsx'
import { uploadGeoJSONFile, getAllGeoJSON, applyGeoJSONVersion, deleteGeoJSON, downloadGeoJSON } from '../../services/apiService.js'
import { useRoutesContext } from '../../contexts/RoutesContext.jsx'


const CreateGeojsonPage = () => {
  const { isTablet } = useWindowDimensions()
  const { refreshRoutesData } = useRoutesContext()
  const [selectedFile, setSelectedFile] = useState(null)
  const [uploadDate, setUploadDate] = useState(null)
  const [fileVersion, setFileVersion] = useState(1)
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  const [showSavePopup, setShowSavePopup] = useState(false)
  const [showDeletePopup, setShowDeletePopup] = useState(false)
  const [showDeleteVersionPopup, setShowDeleteVersionPopup] = useState(false)
  const [fileToDelete, setFileToDelete] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchGeoJSONFiles()
  }, [])

  const fetchGeoJSONFiles = async () => {
    try {
      const response = await getAllGeoJSON()
      const files = response.data.map(item => ({
        id: item._id,
        version: item.version,
        fileName: `geojson_${item.version}`,
        uploadDate: new Date(item.uploadDate),
        uploadDateFormatted: formatDate(new Date(item.uploadDate)),
        appliedDate: item.appliedDate ? new Date(item.appliedDate) : null,
        appliedDateFormatted: item.appliedDate ? formatDateWithTime(new Date(item.appliedDate)) : null,
        isApplied: item.isApplied
      }))

      files.sort((a, b) => {
        const dateA = a.appliedDate || a.uploadDate
        const dateB = b.appliedDate || b.uploadDate
        return dateB - dateA
      })

      const limitedFiles = files.slice(0, 3)

      setUploadedFiles(limitedFiles)
      if (files.length > 0) {
        const maxVersion = Math.max(...files.map(f => parseInt(f.version) || 0))
        setFileVersion(maxVersion + 1)
      }
    } catch (error) {
      console.error("Erro ao buscar arquivos GeoJSON:", error)
    }
  }

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const formatDateWithTime = (date) => {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return `${day}/${month}/${year} às ${hours}:${minutes}:${seconds}`
  }

  const formatVersion = (version) => {
    return `V${String(version).padStart(3, '0')}`
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const maxSize = 20 * 1024 * 1024
      if (file.size > maxSize) {
        showErrorToast('O arquivo GeoJSON ultrapassa o limite de 20MB. Por favor, escolha um arquivo menor.')
        e.target.value = '' // Limpar input
        return
      }
      setSelectedFile(file)
      setUploadDate(new Date())
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file && (file.name.endsWith('.geojson') || file.name.endsWith('.json'))) {
      const maxSize = 20 * 1024 * 1024
      if (file.size > maxSize) {
        showErrorToast('O arquivo GeoJSON ultrapassa o limite de 20MB. Por favor, escolha um arquivo menor.')
        return
      }
      setSelectedFile(file)
      setUploadDate(new Date())
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedFile) {
      setShowSavePopup(true)
    }
  }

  const confirmSave = async () => {
    setIsLoading(true)
    setShowSavePopup(false)

    try {
      const response = await uploadGeoJSONFile(selectedFile)
      console.log("GeoJSON enviado com sucesso:", response.data)

      setSelectedFile(null)
      setUploadDate(null)
      document.getElementById('geojson-file').value = ''

      await fetchGeoJSONFiles()

      showSuccessToast('Novo GeoJSON salvo com sucesso!')
    } catch (error) {
      console.error("Erro ao enviar GeoJSON:", error)
      const errorMessage = error.response?.data?.message ||
                          error.response?.data?.error ||
                          'Erro ao enviar arquivo. Tente novamente.'
      showErrorToast(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const handleFileAction = async (fileId) => {
    try {
      await applyGeoJSONVersion(fileId)
      showSuccessToast('Versão aplicada com sucesso!')
      await fetchGeoJSONFiles()
      // Atualizar os dados de rotas em toda a aplicação
      await refreshRoutesData()
    } catch (error) {
      console.error("Erro ao aplicar versão:", error)
      const errorMessage = error.response?.data?.message ||
                          error.response?.data?.error ||
                          'Erro ao aplicar versão. Tente novamente.'
      showErrorToast(errorMessage)
    }
  }

  const handleDelete = () => {
    setShowDeletePopup(true)
  }

  const confirmDelete = () => {
    const savedFile = selectedFile
    const savedDate = uploadDate

    setSelectedFile(null)
    setUploadDate(null)
    document.getElementById('geojson-file').value = ''
    setShowDeletePopup(false)

    showDeleteToast('GeoJSON deletado', () => {
      setSelectedFile(savedFile)
      setUploadDate(savedDate)
    })
  }

  const handleDeleteVersion = (fileId) => {
    setFileToDelete(fileId)
    setShowDeleteVersionPopup(true)
  }

  const confirmDeleteVersion = async () => {
    try {
      // Verificar se a versão que está sendo deletada é a aplicada
      const fileBeingDeleted = uploadedFiles.find(file => file.id === fileToDelete)
      const wasApplied = fileBeingDeleted?.isApplied

      await deleteGeoJSON(fileToDelete)
      setShowDeleteVersionPopup(false)
      setFileToDelete(null)
      showSuccessToast('Versão deletada com sucesso!')

      const response = await getAllGeoJSON()
      const files = response.data.map(item => ({
        id: item._id,
        version: item.version,
        fileName: `geojson_${item.version}`,
        uploadDate: new Date(item.uploadDate),
        uploadDateFormatted: formatDate(new Date(item.uploadDate)),
        appliedDate: item.appliedDate ? new Date(item.appliedDate) : null,
        appliedDateFormatted: item.appliedDate ? formatDateWithTime(new Date(item.appliedDate)) : null,
        isApplied: item.isApplied
      }))

      if(wasApplied && files.length > 0){
        // Encontrar a versão mais recente (maior número de versão)
        const mostRecentFile = files.reduce((max, file) => {
          return (parseInt(file.version) > parseInt(max.version)) ? file : max
        }, files[0])

        // Aplicar a versão mais recente automaticamente
        await applyGeoJSONVersion(mostRecentFile.id)
        showSuccessToast('Versão mais recente aplicada!')
        await refreshRoutesData()
      }

      await fetchGeoJSONFiles()
    } catch (error) {
      console.error("Erro ao deletar versão:", error)
      const errorMessage = error.response?.data?.message ||
                          error.response?.data?.error ||
                          'Erro ao deletar versão. Tente novamente.'
      showErrorToast(errorMessage)
      setShowDeleteVersionPopup(false)
      setFileToDelete(null)
    }
  }

  const handleDownload = async (fileId, fileName) => {
    try {
      const response = await downloadGeoJSON(fileId)

      const blob = new Blob([response.data], { type: 'application/json' })
      const url = window.URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = url
      link.download = `${fileName}.geojson`
      document.body.appendChild(link)
      link.click()

      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

      showSuccessToast('Download realizado com sucesso!')
    } catch (error) {
      console.error("Erro ao fazer download:", error)
      const errorMessage = error.response?.data?.message ||
                          error.response?.data?.error ||
                          'Erro ao fazer download. Tente novamente.'
      showErrorToast(errorMessage)
    }
  }

  return (
    <Container>
      <HeroSectionContainer $isTablet={isTablet}>
        <HeroSectionContent $isTablet={isTablet}>
          <GeojsonTitle $isTablet={isTablet}>
          {texts.pages.geoJsonTexts.heroHeader}
          </GeojsonTitle>
          <GeojsonDescription>
          {texts.pages.geoJsonTexts.heroSubheader}
          </GeojsonDescription>
        </HeroSectionContent>
        <HeroSectionImage
          className={"about-hero-image"}
          src={WhereFindImage}
          alt=""
        />
      </HeroSectionContainer>

      <FormContainer $isTablet={isTablet}>
        <InputWrapper>
          <FileInputContainer
            $hasFile={!!selectedFile}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {selectedFile ? (
              <FileInfoContainer>
                <FileVersion>{formatVersion(fileVersion)}</FileVersion>
                <FileNameDisplay>{selectedFile.name}</FileNameDisplay>
                <FileDate>{formatDate(uploadDate)}</FileDate>
              </FileInfoContainer>
            ) : (
              <FileInputLabel htmlFor="geojson-file">
                <UploadIcon src={uploadIcon} alt="Upload" />
                Arraste ou cole um arquivo
              </FileInputLabel>
            )}
            <FileInput
              type="file"
              id="geojson-file"
              accept=".geojson,.json"
              onChange={handleFileChange}
            />
          </FileInputContainer>
        </InputWrapper>

        {selectedFile && (
          <ButtonContainer>
            <DeleteButton
              type="button"
              onClick={handleDelete}
              disabled={isLoading}
            >
              Deletar
            </DeleteButton>
            <SubmitButton
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'Enviando...' : 'Enviar GeoJSON'}
            </SubmitButton>
          </ButtonContainer>
        )}

        {uploadedFiles.length > 0 && (
          <UploadedFilesList>
            {uploadedFiles.map((file) => (
              <FileVersionItem
                key={file.id}
                version={file.version}
                fileName={file.fileName}
                uploadDate={file.uploadDateFormatted}
                appliedDate={file.appliedDateFormatted}
                isApplied={file.isApplied}
                onAction={() => handleFileAction(file.id)}
                onDelete={() => handleDeleteVersion(file.id)}
                onDownload={() => handleDownload(file.id, file.fileName)}
              />
            ))}
          </UploadedFilesList>
        )}
      </FormContainer>

      <Popup
        isOpen={showSavePopup}
        title="Salvar GeoJSON"
        message="Você tem certeza que deseja salvar as alterações?"
        confirmText="Salvar"
        cancelText="Cancelar"
        onConfirm={confirmSave}
        onCancel={() => setShowSavePopup(false)}
        variant="default"
      />


      <Popup
        isOpen={showDeletePopup}
        title="Deletar arquivo"
        message="Você tem certeza que deseja deletar o arquivo GeoJson?"
        confirmText="Deletar"
        cancelText="Cancelar"
        onConfirm={confirmDelete}
        onCancel={() => setShowDeletePopup(false)}
        variant="delete"
      />

      <Popup
        isOpen={showDeleteVersionPopup}
        title="Deletar versão"
        message="Você tem certeza que deseja deletar esta versão do GeoJSON? Esta ação não pode ser desfeita."
        confirmText="Deletar"
        cancelText="Cancelar"
        onConfirm={confirmDeleteVersion}
        onCancel={() => {
          setShowDeleteVersionPopup(false)
          setFileToDelete(null)
        }}
        variant="delete"
      />
    </Container>
  )
}

export default CreateGeojsonPage
