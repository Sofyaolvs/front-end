import { QuestionTwoGrid } from "./styles.js"
import { RouteTypeButton } from "../../../components/RouteTypeButton/RouteTypeButton.jsx"
import { useWindowDimensions } from "../../../hooks/useWindowDimensions.jsx"

export function QuestionTwo({ routeTypes, setRouteTypes }) {
  const { isMobile } = useWindowDimensions()

  function handleSelectedOption(option) {
    if (option.label === "Me surpreenda") {
      const updatedRouteTypes = routeTypes.map((routeType) => {
        routeType.isSelected =
          routeType.label === "Me surpreenda" ? !routeType.isSelected : false
        return routeType
      })
      setRouteTypes(updatedRouteTypes)
    } else {
      const updatedRouteTypes = routeTypes.map((routeType) => {
        if (routeType.label === "Me surpreenda") routeType.isSelected = false

        routeType.isSelected =
          option.label === routeType.label
            ? !routeType.isSelected
            : routeType.isSelected
        return routeType
      })
      setRouteTypes(updatedRouteTypes)
    }
  }

  return (
    <QuestionTwoGrid>
      {routeTypes.map((routeType, index) => (
        <RouteTypeButton
          key={index}
          label={routeType.label}
          iconImg={routeType.iconImg}
          value={routeType.value}
          isActive={routeType.isSelected}
          onClick={() => handleSelectedOption(routeType)}
          sizeInPixels={isMobile ? 105 : 132}
          iconSizeInPixels={isMobile ? 50 : 70}
        />
      ))}
    </QuestionTwoGrid>
  )
}
