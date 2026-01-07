import { useState, useEffect } from "react"
import { useWindowDimensions } from "../../hooks/useWindowDimensions.jsx"
import WhereFindImage from "../../assets/where-find-header.png"
import editIcon from '../../assets/editIcon.svg'
import { NewsCard } from '../../components/NewsCard/NewsCard.jsx'
import { CustomSelect } from '../../components/CustomSelect/CustomSelect.jsx'
import {
  HeroSectionContainer,
  HeroSectionContent,
  HeroSectionImage,
} from "../WhereFindPage/styles.js"
import { Container } from "../GlobalComponents.js"
import {
  NewsAndContentAdminTitle,
  NewsAndContentAdminDescription,
  FormContainer,
  FormGroup,
  FormInput,
  FormTextarea,
  ButtonContainer,
  SubmitButton,
  DeleteButton,
  DateInputWrapper,
  LinkInputWrapper,
  EditIcon,
  NewsCardWrapper,
  CharacterCounter,
  TextareaWrapper,
} from "./styles.js"
import { texts } from "../../resources/texts.js"
import Popup from '../../components/Popup/Popup'
import { showSuccessToast, showDeleteToast, showErrorToast } from '../../utils/toast.jsx'
import { BasicInput } from "../../components/BasicInput/BasicInput.jsx"
import { createContent, getAllContent, updateContent, deleteContent } from "../../services/apiService.js"

export const NewsAndContentAdmin = () => {
  const { isTablet } = useWindowDimensions()
  const [tipo, setTipo] = useState("")
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    linkDeAcesso: "",
    dataDePublicacao: ""
  })
  const [showSavePopup, setShowSavePopup] = useState(false)
  const [showDeletePopup, setShowDeletePopup] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [contents, setContents] = useState([])
  const [isLoadingContents, setIsLoadingContents] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [editingId, setEditingId] = useState(null)

  useEffect(() => {
    fetchContents()
  }, [])

  const fetchContents = async () => {
    try {
      const response = await getAllContent()
      const sortedContents = response.data.sort((a, b) => {
        return new Date(b.dataDePublicacao) - new Date(a.dataDePublicacao)
      })
      setContents(sortedContents)
    } catch (error) {
      console.error("Erro ao buscar conteúdos:", error)
    } finally {
      setIsLoadingContents(false)
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'Data não disponível'
    const [year, month, day] = dateString.split('T')[0].split('-')
    const date = new Date(year, month - 1, day)
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  const tipoOptions = [
    { value: "Noticia", label: "Noticia" },
    { value: "Dados", label: "Relatório de dados" },
  ]

  const hasContent = formData.titulo.trim() !== '' || formData.descricao.trim() !== '' || formData.linkDeAcesso.trim() !== ''

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.titulo.trim()) {
      showErrorToast('Por favor, preencha o título')
      return
    }

    if (!formData.descricao.trim()) {
      showErrorToast('Por favor, preencha a descrição')
      return
    }

    if (!formData.linkDeAcesso.trim()) {
      showErrorToast('Por favor, preencha o link de acesso')
      return
    }

    if (!tipo) {
      showErrorToast('Por favor, selecione o tipo de conteúdo')
      return
    }

    if (!formData.dataDePublicacao) {
      showErrorToast('Por favor, preencha a data de publicação')
      return
    }

    try {
      new URL(formData.linkDeAcesso)
    } catch {
      showErrorToast('Por favor, insira uma URL válida')
      return
    }

    if (hasContent) {
      setShowSavePopup(true)
    }
  }

  const confirmSave = async () => {
    setIsLoading(true)
    setShowSavePopup(false)

    try {
      const contentData = {
        titulo: formData.titulo,
        descricao: formData.descricao,
        linkDeAcesso: formData.linkDeAcesso,
        dataDePublicacao: formData.dataDePublicacao,
        tipo: tipo
      }

      if (isEditing && editingId) {
        await updateContent(editingId, contentData)
        showSuccessToast('Conteúdo atualizado com sucesso!')
      } else {
        await createContent(contentData)
        showSuccessToast('Novo conteúdo salvo com sucesso!')
      }

      setFormData({
        titulo: "",
        descricao: "",
        linkDeAcesso: "",
        dataDePublicacao: ""
      })
      setTipo("")
      setIsEditing(false)
      setEditingId(null)

      await fetchContents()
    } catch (error) {
      console.error("Erro ao salvar conteúdo:", error)

      const errorMessage = error.response?.data?.message ||
                          error.response?.data?.error ||
                          'Erro ao salvar conteúdo. Tente novamente.'

      showErrorToast(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (content) => {
     console.log('Editando conteúdo:', content)
     console.log('Data original:', content.dataDePublicacao)
    let dateValue = ''
    if (content.dataDePublicacao) {
      try {
        const date = new Date(content.dataDePublicacao)
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        dateValue = `${year}-${month}-${day}`
      } catch (error) {
        console.error('Erro ao formatar data:', error)
      }
    }

    setFormData({
      titulo: content.titulo || '',
      descricao: content.descricao || '',
      linkDeAcesso: content.linkDeAcesso || '',
      dataDePublicacao: dateValue
    })
    setTipo(content.tipo || '')
    setIsEditing(true)
    setEditingId(content._id)

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = () => {
    setShowDeletePopup(true)
  }

  const confirmDelete = async () => {
    setShowDeletePopup(false)

    if (isEditing && editingId) {
      try {
        await deleteContent(editingId)
        await fetchContents()
        showSuccessToast('Conteúdo deletado com sucesso!')

        setFormData({
          titulo: "",
          descricao: "",
          linkDeAcesso: "",
          dataDePublicacao: ""
        })
        setTipo("")
        setIsEditing(false)
        setEditingId(null)
      } catch (error) {
        console.error("Erro ao deletar conteúdo:", error)
        showErrorToast('Erro ao deletar conteúdo. Tente novamente.')
      }
    } else {
      const savedData = {
        tipo: tipo,
        formData: { ...formData }
      }

      setFormData({
        titulo: "",
        descricao: "",
        linkDeAcesso: "",
        dataDePublicacao: ""
      })
      setTipo("")
      setIsEditing(false)
      setEditingId(null)

      showDeleteToast('Conteúdo deletado', () => {
        setFormData(savedData.formData)
        setTipo(savedData.tipo)
      })
    }
  }

  return (
    <Container $isTablet={isTablet}>
      <HeroSectionContainer $isTablet={isTablet}>
        <HeroSectionContent $isTablet={isTablet}>
          <NewsAndContentAdminTitle $isTablet={isTablet}>
            {texts.pages.newsAndContentAdminTexts.heroHeader}
          </NewsAndContentAdminTitle>
          <NewsAndContentAdminDescription>
            {texts.pages.newsAndContentAdminTexts.heroSubheader}
          </NewsAndContentAdminDescription>
        </HeroSectionContent>
        <HeroSectionImage
          className={"about-hero-image"}
          src={WhereFindImage}
          alt=""
        />
      </HeroSectionContainer>

      <FormContainer $isTablet={isTablet}>

        <LinkInputWrapper>
          <BasicInput
            type="url"
            id="linkDeAcesso"
            name="linkDeAcesso"
            label="Link da matéria"
            placeholder=" "
            value={formData.linkDeAcesso}
            onChange={handleInputChange}
          />
          
        <CustomSelect
          options={tipoOptions}
          value={tipo}
          onChange={setTipo}
          placeholder="Tipo de conteúdo"
        />

        </LinkInputWrapper>

        <DateInputWrapper>
          <BasicInput
            type="date"
            id="dataDePublicacao"
            name="dataDePublicacao"
            label="Data de publicação"
            placeholder=" "
            value={formData.dataDePublicacao}
            onChange={handleInputChange}
            required
          />
        </DateInputWrapper>
        <FormGroup>
          <FormInput
            type="text"
            id="titulo"
            name="titulo"
            value={formData.titulo}
            onChange={handleInputChange}
            placeholder="Título"
            maxLength={100}
            required
          />
        </FormGroup>

        <FormGroup style={{ position: 'relative' }}>
          <FormTextarea
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleInputChange}
            placeholder="Descrição do conteúdo"
            $isTablet={isTablet}
            maxLength={260}
            required
          />
          <div style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            fontSize: '14px',
            fontWeight: '500',
            color: formData.descricao.length >= 260 ? '#dc3545' : '#6c757d',
            pointerEvents: 'none',
            userSelect: 'none'
          }}>
            {260 - formData.descricao.length}
          </div>
        </FormGroup>
      </FormContainer>

      {hasContent && (
        <ButtonContainer $isEditing={isEditing}>
          {isEditing&&(
              <DeleteButton
                type="button"
                onClick={handleDelete}
                disabled={isLoading}
              >
                Deletar
              </DeleteButton>
          )}

          <SubmitButton
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (isEditing ? 'Atualizando...' : 'Publicando...') : (isEditing ? 'Atualizar Matéria' : 'Publicar Matéria')}
          </SubmitButton>
        </ButtonContainer>
      )}

      {isLoadingContents ? (
        <div style={{ textAlign: 'center', padding: '2rem', width: '100%' }}>
          Carregando dados e conteúdos existentes...
        </div>
      ) : contents.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem', width: '100%' }}>
          Nenhum dado ou conteúdo publicado ainda
        </div>
      ) : (
        contents.map((content) => (
          <NewsCardWrapper key={content._id}>
            <NewsCard
              title={content.titulo}
              description={content.descricao}
              date={formatDate(content.dataDePublicacao)}
              onReadMore={() => window.open(content.linkDeAcesso, '_blank')}
              tipo={content.tipo}
            />
            <EditIcon
              src={editIcon}
              alt="Editar"
              onClick={() => handleEdit(content)}
            />
          </NewsCardWrapper>
        ))
      )}

     

      <Popup
        isOpen={showSavePopup}
        title={isEditing ? "Atualizar Matéria" : "Publicar Matéria"}
        message={isEditing ? "Você tem certeza que deseja atualizar este conteúdo?" : "Você tem certeza que deseja salvar as alterações?"}
        confirmText="Salvar"
        cancelText="Cancelar"
        onConfirm={confirmSave}
        onCancel={() => setShowSavePopup(false)}
        variant="default"
      />

      <Popup
        isOpen={showDeletePopup}
        title="Deletar conteúdo"
        message="Deseja realmente deletar este conteúdo?"
        confirmText="Deletar"
        cancelText="Cancelar"
        onConfirm={confirmDelete}
        onCancel={() => setShowDeletePopup(false)}
        variant="delete"
      />
    </Container>
  )
}

export default NewsAndContentAdmin

