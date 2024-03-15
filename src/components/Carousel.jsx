import { useState } from "react"
import CarouselCont from "./CarouselCont"

const Carousel = ( { cities }) => {
  const [indice, setIndice] = useState(0)

  function contenedores (){
      const slice1 = cities.slice(0, 4)
      const slice2 = cities.slice(4, 8)
      const slice3 = cities.slice(8, 12)
      return [slice1, slice2, slice3]
  }
  const slice = contenedores()
  // console.log(slice)
 
  const [citie, setCitie] = useState(slice[0])

  const next = () => {
    let aux = indice == slice.length - 1 ? 0 : indice + 1
    setIndice(aux)
    setCitie(slice[aux])
  }
  const prev = () => {
    let aux = indice == 0 ? slice.length - 1 : indice - 1
    setIndice(aux)
    setCitie(slice[aux])
  }
  return (
   <section className="flex justify-center gap-5">
     <button onClick={prev}>
       <img src="/assets/izquierda.png" alt="flecha izquierda" />
     </button>
     <CarouselCont cities={slice[indice]} />
     <button onClick={next}>
       <img src="/assets/derecha.png" alt="" />
     </button>
   </section>
  )
}

export default Carousel
