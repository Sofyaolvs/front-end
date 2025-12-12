import {
  BreadcrumbWrapper,
  BreadcrumbItem,
  InnerContainer,
  Crumb,
  ArrowRight,
  Container,
  BackContainer,
  ArrowBack,
} from "./styles"

import { useWindowDimensions } from "../../hooks/useWindowDimensions"

import RightArrowGray from "../../assets/angle-right-solid-gray.svg"
import RightArrowWhite from "../../assets/angle-right-solid-white.svg"
import ArrowBackIosOrange from "../../assets/arrow-back-ios-orange.svg"
import ArrowBackIosWhite from "../../assets/arrow-back-ios-white.svg"

const BreadcrumbComponent = ({ contrast, bread, style }) => {
  const { isTablet } = useWindowDimensions()

  return (
    <Container style={style} $isTablet={isTablet}>
      <BreadcrumbWrapper>
        {isTablet ? (
          <BackContainer to={bread[bread.length - 2].path}>
            <ArrowBack
              src={contrast ? ArrowBackIosWhite : ArrowBackIosOrange}
              alt="Arrow Back"
            />
            <BreadcrumbItem key={bread.length - 2} $isTablet={isTablet}>
              <InnerContainer>
                <Crumb
                  as="span"
                  $secondToLast={true}
                  $contrast={contrast}
                  $isTablet={isTablet}
                >
                  {bread[bread.length - 2].label}
                </Crumb>
              </InnerContainer>
            </BreadcrumbItem>
          </BackContainer>
        ) : (
          bread.map((crumb, index) => (
            <BreadcrumbItem key={index}>
              <InnerContainer>
                {index === bread.length - 1 ? (
                  <Crumb
                    $last={true}
                    $contrast={contrast}
                    style={{ pointerEvents: "none" }}
                  >
                    {crumb.label}
                  </Crumb>
                ) : (
                  <Crumb
                    to={crumb.path}
                    state={crumb.state}
                    $contrast={contrast}
                  >
                    {crumb.label}
                  </Crumb>
                )}
                {index !== bread.length - 1 &&
                  (contrast ? (
                    <ArrowRight src={RightArrowWhite} alt="Right Arrow White" />
                  ) : (
                    <ArrowRight src={RightArrowGray} alt="Right Arrow" />
                  ))}
              </InnerContainer>
            </BreadcrumbItem>
          ))
        )}
      </BreadcrumbWrapper>
    </Container>
  )
}

export default BreadcrumbComponent
