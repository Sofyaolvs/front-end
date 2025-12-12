import {
  ContactContainer,
  ContactDescriptionContainer,
  ContactDescriptionContent,
  ContactTitle,
  DescriptionInfo,
  DescriptionTitle,
  FooterContainer,
  FooterContent,
  LogoContent,
  LogosContainer,
  BoraLogo,
  AmcLogo,
  CitinovaLogo,
  PrefeituraLogo,
  LinksContainer,
  Icon,
  IconRoundContainer,
} from "./style.js"

import boraLogo from "../../assets/boraDeBike.svg"
import prefeituraLogo from "../../assets/prefeitura.svg"
import citinovaLogo from "../../assets/citinova.svg"
import amcLogo from "../../assets/amc.svg"
import instagramLogo from "../../assets/instagram.svg"
import emailLogo from "../../assets/email.svg"
export default function Footer() {
  return (
    <FooterContainer className="footer-contrast">
      <FooterContent>
        <LogosContainer>
          <LogoContent>
            <BoraLogo src={boraLogo} alt="Bora de Bike Logo" />
          </LogoContent>
          <LogoContent>
            <AmcLogo src={amcLogo} alt="AMC" />
          </LogoContent>
          <LogoContent>
            <CitinovaLogo src={citinovaLogo} alt="Citinova" />
          </LogoContent>
          <LogoContent>
            <PrefeituraLogo src={prefeituraLogo} alt="Prefeitura de Fortaleza" />
          </LogoContent>
        </LogosContainer>

        <ContactContainer>
          <ContactDescriptionContainer>
            <ContactDescriptionContent>
              <DescriptionTitle>E-mail para contato:</DescriptionTitle>
              <LinksContainer to={"mailto:ggciclo.amc@gmail.com"}>
                <IconRoundContainer>
                  <Icon src={emailLogo} alt="Instagram" />
                </IconRoundContainer>
                <DescriptionInfo>ggciclo.amc@gmail.com</DescriptionInfo>
              </LinksContainer>
            </ContactDescriptionContent>
            <ContactDescriptionContent>
              <DescriptionTitle>Conheça mais em:</DescriptionTitle>
              <LinksContainer
                to={"https://www.instagram.com/amctransito"}
                target="_blank"
              >
                <IconRoundContainer>
                  <Icon src={instagramLogo} alt="Instagram" />
                </IconRoundContainer>
                <DescriptionInfo>@amctransito</DescriptionInfo>
              </LinksContainer>
            </ContactDescriptionContent>
          </ContactDescriptionContainer>
        </ContactContainer>
      </FooterContent>
    </FooterContainer>
  )
}
