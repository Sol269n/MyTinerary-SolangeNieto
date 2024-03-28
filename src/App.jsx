import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./views/Home"
import Cities from "./views/Cities"
import LayoutMain from "./views/LayoutMain"
import Citie from "./views/Citie"
import { useDispatch } from "react-redux"
import Register from "./views/Register"
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from "./views/Login"
import { useEffect } from "react"
import authQueries from "./services/authQueries"
import alerts from "./utils/alerts"
import { login } from "./redux/actions/userActions"




function App() {

  const dispatch = useDispatch()

  useEffect( () => {
    authQueries.loginWithToken().then((res) => {
      if (res.status == 200) {
        dispatch(login(res.data) )
        alerts.success("Welcome " + res.data.first_name)
      }else{
      
      }
    })
  }, [] )

  return (
    <BrowserRouter>
      <LayoutMain>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/citie/:id" element={<Citie />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login/>} />
        </Routes>
      </LayoutMain>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
