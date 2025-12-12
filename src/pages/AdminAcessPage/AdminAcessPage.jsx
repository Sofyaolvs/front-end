import { useState } from "react"
import {
    Container,
    HeroSectionContainer,
    HeroSectionContent,
    AcessTitle,
    AcessDescription,
    HeroSectionImage,
    FormContainer,
    InputWrapper,
    InputLabel,
    StyledInput,
    StyledButton,
  } from "./styles.js"
import { useWindowDimensions } from "../../hooks/useWindowDimensions.jsx"
import { texts } from "../../resources/texts.js"
import WhereFindImage from "../../assets/where-find-header.png"
import { useNavigate } from "react-router-dom"
import { login } from "../../services/apiService.js"

export default function AdminAcessPage() {
    const { isTablet } = useWindowDimensions()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        setError("")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.email.trim() || !formData.password.trim()) {
            setError("Por favor, preencha todos os campos")
            return
        }

        setIsLoading(true)
        setError("")

        try {
            const response = await login({
                email: formData.email,
                password: formData.password
            })

            const { accessToken, refreshToken, user } = response.data
            localStorage.setItem('accessToken', accessToken)
            localStorage.setItem('refreshToken', refreshToken)
            localStorage.setItem('user', JSON.stringify(user))

            navigate(texts.pages.choosePageTexts.link)
        } catch (err) {
            console.error("Message:", err.message)

            let errorMessage = 'Credenciais incorretas'

            if (!err.response) {
                errorMessage = 'Erro ao conectar com o servidor'
            } else {
                errorMessage = err.response?.data?.message ||
                              err.response?.data?.error ||
                              `Erro ${err.response.status}: ${err.response.statusText}`
            }

            setError(errorMessage)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Container $isTablet={isTablet}>
            <HeroSectionContainer $isTablet={isTablet}>
                <HeroSectionContent $isTablet={isTablet}>
                    <AcessTitle $isTablet={isTablet}>
                        {texts.pages.adminAcessTexts.heroHeader}
                    </AcessTitle>
                    <AcessDescription $isTablet={isTablet}>
                        {texts.pages.adminAcessTexts.heroSubheader}
                    </AcessDescription>
                </HeroSectionContent>
                <HeroSectionImage src={WhereFindImage}/>
            </HeroSectionContainer>

            <FormContainer onSubmit={handleSubmit}>
                {error && (
                    <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>
                        {error}
                    </div>
                )}

                <InputWrapper>
                    <StyledInput
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={texts.pages.adminAcessTexts.inputPlaceholder}
                        disabled={isLoading}
                        required
                    />
                    <InputLabel>{texts.pages.adminAcessTexts.inputLabel}</InputLabel>
                </InputWrapper>

                <InputWrapper>
                    <StyledInput
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder={texts.pages.adminAcessTexts.inputPlaceholder2}
                        disabled={isLoading}
                        required
                    />
                    <InputLabel>{texts.pages.adminAcessTexts.inputLabel2}</InputLabel>
                </InputWrapper>

                <StyledButton type="submit" disabled={isLoading}>
                    {isLoading ? 'Entrando...' : texts.pages.adminAcessTexts.buttonPlaceholder}
                </StyledButton>
            </FormContainer>
        </Container>
    )
}