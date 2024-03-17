import { Link, useNavigate, useParams } from "react-router-dom"
import { getCitieId } from "../services/citiesQueries"
import { useEffect, useState } from "react"


const Citie = () => {

    const params = useParams()
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

  return (
    <>
    {cargando ? (
      <div className="flex flex-col justify-center items-center gap-2 py-40">
      <h2 className="text.white font-bold text-4xl py-6 text-emerald-700">Loading, please wait...</h2>
      <img  className="w-[700px] h-[300px] object-cover rounded" src="/assets/cargando.gif" alt="404" />
      </div>
    ): (
      <div className="flex flex-wrap justify-center gap-2 p-40">
      <Link className="border rounded py-1 px-2 bg-teal-800" to="/Cities">Go back</Link>
      <div>
        <h3 className="text-center text.white font-semibold text-2xl py-2">{citie.name}</h3>
        <img className="rounded" src={citie.image} alt="imagen de ${citie.name}"/>
        <h3 className="text-center text.white font-semibold text-2xl py-2">[Under construction]</h3>

      </div>
    </div>
    )}
    </>
  )
}

export default Citie