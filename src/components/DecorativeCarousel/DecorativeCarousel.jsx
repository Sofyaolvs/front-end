import { Swiper, SwiperSlide } from "swiper/react"
import { Container } from "./styles"
import { RouteCard } from "../RouteCard/RouteCard"
import { useRoutesContext } from "../../contexts/RoutesContext.jsx"
import { useWindowDimensions } from "../../hooks/useWindowDimensions"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"

export function DecorativeCarousel() {
  const { width } = useWindowDimensions()
  const { routesData, routesDataIsLoaded } = useRoutesContext()
  const amountOfCards = Math.max(Math.floor(width / (342 + 16)), 3)

  if (!routesDataIsLoaded || !routesData) {
    return null
  }

  let filteredRoutes = routesData.features

  while (filteredRoutes.length < 20) {
    filteredRoutes = [...filteredRoutes, ...filteredRoutes]
  }

  return (
    width > 1023 && (
      <Container>
        <Swiper
          autoplay={{
            delay: 0, 
            disableOnInteraction: false,
          }}
          speed={15000} 
          // spaceBetween={16}
          slidesPerView={amountOfCards}
          centeredSlides={true}
          loop={true}
          modules={[Autoplay]}
          allowTouchMove={false}
        >
          {filteredRoutes.map((route, index) => {
            const routeProperties = route.properties
            const routeName = routeProperties.rota?.replaceAll("_", " ") || "Rota sem nome"
            const image = routeProperties.fotos?.[0] || null
            const durationInMinutes = Math.round((route.properties.dist_total / 1000) / 15 * 60)

            return (
              <SwiperSlide key={`carousel-${index}`}>
                <RouteCard
                  image={image}
                  routeName={routeName}
                  distance={route.properties.dist_total}
                  duration={durationInMinutes}
                  incline={route.properties.inclinacao?.toFixed(2) || "0.00"}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Container>
    )
  )
}
