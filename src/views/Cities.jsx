import { useState, useEffect, useRef } from "react"
import { getCities } from "../services/citiesQueries"
import CardCitie from "../components/CardCitie"

const Cities = () => {
  const [cities, setCities] = useState([])
  const [filtrados, setFiltrados] = useState([])

  const inputBusqueda = useRef(null)

  useEffect( () => {
    getCities().then( (data) => {
      setCities(data)
      setFiltrados(data)

    })
  } , [] )

  console.log(cities)

  const handleInput = () => {
    const filtered = filterName( cities, inputBusqueda.current.value)
    setFiltrados(filtered)
  }
  console.log(filtrados)

  const filterName = ( listaCities, value ) => 
    listaCities.filter((citie) => 
      citie.name.trim().toLowerCase().startsWith(value.trim().toLowerCase())  
    )
  
  // const citiesCards = filtrados.map((citie) => (
  //   <CarouselCont key={citie.id} cities={cities} />
  // ))


  return (
    <>
      <main className="flex flex-col justify-center items-center gap-5 p-5">
        <h1 className="text-3xl">Cities</h1>
        <search>
          <div className="relative">
          <input 
           type="text"
           name="NameCities" 
           className="w-[500px] h-8 px-2 border rounded text-black" 
           placeholder="Look for your new destination..."
           onInput={handleInput}
           ref={inputBusqueda}
           />
          <img className="w-[25px] object-cover absolute top-1 right-1" src="/assets/icon-busqueda.png" alt="x-icon-busqueda"/>
          </div>
        </search>
        <section className="flex flex-wrap justify-center items-center gap-4">
          {/* {filtrados.length > 0 && citiesCards} */}
          {filtrados.map((citie) => (
            <CardCitie key={citie._id} cities={[citie]} />
          ))}
        </section>
      </main>
    </>
  )
}

export default Cities