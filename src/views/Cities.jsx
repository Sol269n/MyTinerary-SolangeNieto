import { useState, useEffect, useRef } from "react"
import { getCities } from "../services/citiesQueries"
import CardCitie from "../components/CardCitie"
import { useSelector, useDispatch } from "react-redux"
import { filterName, load } from "../redux/actions/citiesActions"


//Nota: para traernos algo uso "useSelector"
//Para emitir una accion tenemos que despacharla con "UseDispatch" (import)

const Cities = () => {
  const inputBusqueda = useRef(null)

  const dispatch = useDispatch() // creo un dispatch
  const {all, filtered, search} = useSelector( (store) => store.cities)

  useEffect( () => {
    if( all.length == 0 ){
      getCities().then( (data) => {
        dispatch(load(data))
      })
    }
  } , [] )
  console.log(all) //

  const handleInput = () => {
    dispatch(filterName(inputBusqueda.current.value))
  }

  return (
    <>
      <main className="flex flex-col justify-center items-center gap-5 p-5 grow">
        <h1 className="uppercase text-3xl pt-20">Explore cities</h1>
        <search>
          <div className="relative">
          <input 
           type="text"
           name="NameCities" 
           className="w-[500px] h-8 px-2 border rounded text-black" 
           placeholder="Look for your new destination..."
           onInput={handleInput}
           ref={inputBusqueda}
           defaultValue={search}
           />
          <img className="w-[25px] object-cover absolute top-1 right-1" src="/assets/icon-busqueda.png" alt="x-icon-busqueda"/>
          </div>
        </search>
        <section className="flex flex-wrap justify-center items-center gap-7 py-5">
          {/* {filtrados.length > 0 && citiesCards} */}
          {filtered.map((citie) => (
            <CardCitie key={citie._id} cities={[citie]} />
          ))}
        </section>
      </main>
    </>
  )
}

export default Cities