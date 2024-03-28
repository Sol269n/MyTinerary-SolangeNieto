 import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {getAllCountries} from "../services/countriesQueries"
import authQueries from "../services/authQueries"
import alerts from "../utils/alerts"




function Register() {
  const [formData, setFormData] = useState ({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    country: "",
  })
  
  const [countries, setCountries] = useState([])
  const navigate = useNavigate()

  useEffect( () => {
    getAllCountries().then(setCountries)
  }, [])

  function handleInput(e) {
    const name = e.target.name
    const value = e.target.value
    const aux = {...formData}
    aux[name] = value
    setFormData(aux)
  }

  function handleSubmit(e) {
    e.preventDefault()
    // authQueries.register(formData)

    const aux = {...formData}


    for (const key in aux) {
      if(! aux[key]) delete aux[key]
    }
    authQueries.register( aux ).then( (response) => {
      if (response.status == 201) {
        alerts.success("Account created, you can log in")
        navigate("/login")
      }else {
        alerts.error(response.statusMsg)
      }
    })
  }

  return (
    <>
    <main className="pt-20 flex flex-col justify-center items-center grow pb-5">
      <h1 className="pb-5 text-2xl font-bold uppercase">Register</h1>
      <div className="bg-cyan-950 rounded-3xl p-10 w-3/5 h-fit flex flex-col items-center">
        <form 
          onSubmit={handleSubmit} 
          onInput={handleInput}
          className="w-full flex flex-col items-center gap-4 text-black pb-5">
          <input 
          className="px-2 py-1.5 outline-none rounded w-4/5" 
          type="text" 
          placeholder="Firts name" 
          name="first_name"
          />
          <input 
          className="px-2 py-1.5 outline-none rounded w-4/5" 
          type="text" 
          placeholder="Last name" 
          name="last_name"/>
          <input 
          className="px-2 py-1.5 outline-none rounded w-4/5" 
          type="text" 
          placeholder="Email" 
          name="email"/>
          <input 
          className="px-2 py-1.5 outline-none rounded w-4/5" 
          type="password" 
          placeholder="Password" 
          name="password" />
          <select className="outline-none rounded w-4/5 py-1.5" name="country">
            {countries.length > 0 && 
            countries.map((country) => (
            <option key={country} value={country}>{" "}{country}{" "}</option>
            ))}
          </select>
          <input 
          className="px-2 py-1.5 outline-none rounded w-4/5" 
          type="text" 
          placeholder="Url image" 
          name="image"/>
          <input 
          className="text-white text-lg py-1.5 w-[70px] rounded bg-teal-800 hover:bg-white hover:text-black" 
          type="submit" 
          value="Send" />
        </form>
        <p className="text-lg pb-2 pt-4">Are you already registered?</p>
        <Link className="text-white bg-teal-800 px-2 py-0.5 w-[96px] rounded  hover:bg-white hover:text-black" to="/login">Go to login</Link>
      </div>
        

    </main>
    </>
  )
}

export default Register