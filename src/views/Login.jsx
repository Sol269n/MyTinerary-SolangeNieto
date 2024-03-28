import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import authQueries from "../services/authQueries"
import alerts from "../utils/alerts"
import { useDispatch } from "react-redux"
import { login } from "../redux/actions/userActions"


function Login() {
  const [formData, setFormData] = useState ({
    email: "",
    password: "",
  })
  
  const navigate = useNavigate()

  const dispatch = useDispatch()

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
    authQueries.login( aux ).then( (response) => {
      if (response.status == 200) {
        dispatch(login(response.data))
        alerts.success("Welcome " + response.data.first_name)
        navigate("/")
      }else {
        alerts.error(response.statusMsg)
      }
    })
  }

  return (
    <>
    <main className="pt-20 flex flex-col justify-center items-center grow pb-5">
      <h1 className="pb-5 text-2xl font-bold uppercase">Login</h1>
      <div className="bg-cyan-950 rounded-3xl p-10 w-3/5 h-fit flex flex-col items-center">
        <form 
          onSubmit={handleSubmit} 
          onInput={handleInput}
          className="w-full flex flex-col items-center gap-4 text-black pb-5">
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
          <input 
          className="text-white text-lg py-1.5 w-[75px] rounded bg-teal-800 hover:bg-white hover:text-black" 
          type="submit" 
          value="Get into" />
        </form>
        <p className="text-lg pb-2 pt-4">You are not registered?</p>
        <Link className="text-white bg-teal-800 px-2 py-0.5 w-[95px] rounded hover:bg-white hover:text-black" to="/register">Go register</Link>
      </div>
    </main>
    </>
  )
}

export default Login