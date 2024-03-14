import { useState, useEffect } from "react"
import { getCities } from "../services/citiesQueries"
import CarouselCont from "../components/CarouselCont"

const Cities = () => {
  const [cities, setCities] = useState([])

  useEffect( () => {
    getCities().then(setCities)
  } , [] )

  console.log(cities)

  return (
    <>
      <main className="grow flex flex-col justify-center items-center gap-5">
        {/* {cities.length > 0 && (
          cities.map(citie => <CarouselCont key={citie.id} ciudad={citie} />)
          )} */}
        <h3>contenedor</h3>
      </main>
    </>
  )
}

export default Cities