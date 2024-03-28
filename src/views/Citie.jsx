import { Link, useNavigate, useParams } from "react-router-dom"
import { getCitieId } from "../services/citiesQueries"
import { useEffect, useState } from "react"


const Citie = () => {

    const params = useParams() // Obtiene los parámetros de la URL
    const [citie, setCitie] = useState({})
    const [cargando, setCargando] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        getCitieId(params.id).then((res) => {
          if (res.data) {
            setCitie(res.data)
          } else {
            alert("No results found")
            navigate("/Cities")
          }
        })
        .finally(() => setCargando(false))
    }, [])

    console.log(citie)

    function priceEmoji(price) {
      const roundedPrice = Math.round(price) // Redondeamos el precio a un número entero
      return '💵 '.repeat(roundedPrice)
  }

  return (
    <>
    {cargando ? (
      <div className="flex flex-col justify-center items-center  gap-2 py-40 grow">
      <h2 className="text.white font-bold text-4xl py-6 text-emerald-700">Loading, please wait...</h2>
      <img  className="w-[700px] h-[300px] object-cover rounded" src="/assets/cargando.gif" alt="404" />
      </div>
    ): (
      <div className="flex flex-wrap justify-center gap-2 pt-20 pb-5 grow">
        <div className="px-4">
        <Link className="hover:bg-white hover:text-black w-[78px] h-[35px] border-none rounded py-1 px-2 bg-teal-800" to="/Cities">Go back</Link>
        </div>
        
        <div className="w-4/5">
          
          <section className="pb-5 ">
            <div className="relative flex justify-center items-center">
              <img className="w-full h-[500px] object-cover rounded " src={citie.image} alt="imagen de ${citie.name}"/>
              <div className="absolute h-full w-full flex flex-col justify-end items-start px-5 pb-5 bg-black bg-opacity-50">
                <h3 className="uppercase text-4xl">{citie.name}</h3>
                <h3 className=" font-semibold text-2xl">{citie.country}</h3>
                <p className="text-lg">{citie.description}</p>
              </div>
            </div>
          </section>

          <div>
            {citie.itineraries.length > 0 ? (
              <section className="bg-cyan-950 rounded-3xl flex flex-wrap gap-5 p-5">
                <div className="flex flex-col justify-start gap-2">
                  <img className="w-[300px] object-cover rounded" src={citie.itineraries[0].guide_image} alt="foto de guide" />
                  <h2 className="text-lg text-start px-4 bg-cyan-700 rounded-r-lg">Guide: {citie.itineraries[0].guide}</h2>
                </div>
                <div>
                  <h2 className="uppercase text-3xl ">{citie.itineraries[0].title}</h2>
                  <p className="pb-5 font-light">{citie.itineraries[0].hashtags.join(" ")}</p> {/* une los elementos del array en una cadena */}
                  <p>Price: {priceEmoji(citie.itineraries[0].price)}</p>
                  <p className="pb-5">Duration: {citie.itineraries[0].duration} hours</p>
                  <h3 className="text-lg w-[500px]">{citie.itineraries[0].description}</h3>
                </div>
                <section>
                  <h2 className=" font-serif text-2xl">Images of activities:</h2>
                  <ul className="flex flex-wrap justify-center gap-4 pt-5">
                    {citie.itineraries[0].activities.map((activities, index) => (
                      <li key={index} className="">
                        <img className="w-[473px] h-[300px] rounded object-cover" src={activities} alt="Imagen de actividad"/>
                      </li>
                    ))}
                  </ul>
                </section>
              </section>
            ) : (
              <p className="text-xl text-center">At the moment there are no itineraries available</p>
            )}
            </div>
        </div>
      </div>
    )}
    </>
  )
}

export default Citie