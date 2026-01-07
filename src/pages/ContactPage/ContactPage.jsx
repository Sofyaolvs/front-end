import { useState } from "react"
import {
  Container,
  HeroSectionImage,
  HeroSectionContainer,
  HeroSectionContent,
  ContentWrapper,
  IlustrationContainer,
  IlustrationImage,
  ContactForm,
  SubmitButton,
  WhereToFindTitle,
  WhereToFindDescription,
} from "./styles.js"
import { BasicInput } from "../../components/BasicInput/BasicInput.jsx"
import { BasicSelect } from "../../components/BasicSelect/BasicSelect.jsx"
import WhereFindImage from "../../assets/where-find-header.png"
import { BasicTextarea } from "../../components/BasicTextarea/BasicTextarea.jsx"
import { useForm, Controller } from "react-hook-form"
import faleConosco from "../../assets/faleconosco.png"
import CheckedCircle from "../../assets/check_circle.svg"
import Cancel from "../../assets/cancel.svg"
import { texts } from "../../resources/texts.js"
import { sendContactUsEmail } from "../../services/apiService.js"

import { useWindowDimensions } from "../../hooks/useWindowDimensions.jsx"

export default function ContactPage() {
  const [formFail, setFormFail] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    formState,
    reset,
    setError,
    clearErrors,
    setValue,
    trigger,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      textarea: "",
    },
  })
  const { errors, isValid, isSubmitSuccessful, isSubmitting } = formState

  const { isTablet } = useWindowDimensions()

  const options = [
    { value: "", label: "Selecione o assunto do contato" },
    { value: "Dúvida", label: "Dúvida" },
    { value: "Sugestão", label: "Sugestão" },
    { value: "Comentários", label: "Comentários" },
  ]

  const onSubmit = async (data) => {
    await sendContactUsEmail(data)
      .then((response) => {
        console.log("Resposta capturada:", response)
        reset()
        clearErrors()
        setFormFail(false)

        setTimeout(() => {
          reset({}) 
          clearErrors()
        }, 3000)
      })
      .catch((error) => {
        console.error("Erro capturado:", error.message)
        setFormFail(true)
        setError("notRegisteredInput", {
          type: "custom",
          message: error.message,
        })

        setTimeout(() => {
          clearErrors()
          setFormFail(false)
          setValue("fullName", data.fullName)
        }, 5000)
      })
  }

  return (
    <Container $isTablet={isTablet}>
      <HeroSectionContainer $isTablet={isTablet}>
        <HeroSectionContent $isTablet={isTablet}>
          <WhereToFindTitle $isTablet={isTablet}>
            {texts.pages.contactTexts.heroHeader}
          </WhereToFindTitle>
          <WhereToFindDescription>
            {texts.pages.contactTexts.heroSubheader}
          </WhereToFindDescription>
        </HeroSectionContent>
        <HeroSectionImage
          className={"contact-hero-image"}
          src={WhereFindImage}
          alt=""
        />
      </HeroSectionContainer>
      <ContentWrapper>
        {!isTablet && (
          <IlustrationContainer>
            <IlustrationImage src={faleConosco} alt="Ilustração" />
          </IlustrationContainer>
        )}

        <ContactForm onSubmit={handleSubmit(onSubmit)}>
          <BasicInput
            {...register("fullName", {
              required: { value: true, message: "*Campo obrigatório" },
              maxLength: {
                value: 50,
                message: "O campo deve ter no máximo 50 caracteres",
              },
              minLength: {
                value: 8,
                message: "O campo deve ter no mínimo 8 caracteres",
              },
            })}
            type="text"
            label="Nome completo"
            placeholder={"Digite seu nome completo"}
            error={errors.fullName}
            onBlur={() => trigger("fullName")}
            required
          />
          <BasicInput
            {...register("email", {
              required: { value: true, message: "*Campo obrigatório" },
              maxLength: {
                value: 50,
                message: "O campo deve ter no máximo 50 caracteres",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Por favor, insira um e-mail válido",
              },
            })}
            type="email"
            id="form-email"
            label="E-mail"
            placeholder={"Digite seu e-mail"}
            error={errors.email}
            onBlur={() => trigger("email")}
            required
          />
          <Controller
            name="subject"
            control={control}
            rules={{ required: "*Campo obrigatório" }}
            render={({ field }) => (
              <BasicSelect
                {...field}
                label="Assunto"
                options={options}
                error={errors.subject}
                defaultValue={field.defaultValue}
                value={field.value}
                onBlur={() => trigger("subject")}
              />
            )}
          />
          <BasicTextarea
            {...register("textarea", {
              required: { value: true, message: "*Campo obrigatório" },
              maxLength: {
                value: 200,
                message: "O campo deve ter no máximo 200 caracteres",
              },
              minLength: {
                value: 10,
                message: "O campo deve ter no mínimo 10 caracteres",
              },
            })}
            rows={5}
            label="Mensagem"
            placeholder={"Escreva sua Mensagem"}
            error={errors.textarea}
            onBlur={() => trigger("textarea")}
            required
          />
          <SubmitButton
            disabled={!isValid && !formFail}
            $error={formFail}
            $statusColor={
              isSubmitSuccessful ? "success" : formFail ? "error" : "normal"
            }
            type="submit"
            isLoading={isSubmitting}
          >
            {isSubmitSuccessful && !formFail && (
              <img src={CheckedCircle} alt="Success" />
            )}
            {formFail && <img src={Cancel} alt="Error" />}
            {!isSubmitSuccessful && !formFail && "Enviar"}
            {isSubmitSuccessful && !formFail && "Mensagem enviada"}
            {formFail && "Erro ao enviar mensagem"}
          </SubmitButton>
        </ContactForm>
      </ContentWrapper>
    </Container>
  )
}
