import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./views/Home"
import Cities from "./views/Cities"
import LayoutMain from "./views/LayoutMain"
import Citie from "./views/Citie"
import store from "./redux/store"
import { Provider } from "react-redux"
import Register from "./views/Register"
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from "./views/Login"
import { useEffect } from "react"
import authQueries from "./services/authQueries"
import alerts from "./utils/alerts"




function App() {

  useEffect( () => {
    authQueries.loginWithToken().then((res) => {
      console.log(res)
      if (res.status == 200) {
        alerts.success("Welcome " + res.data.first_name)
      }
    })
  }, [] )

  return (
    <BrowserRouter>
      <Provider store={store}>
        <LayoutMain>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/citie/:id" element={<Citie />} />
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login/>} />
          </Routes>
        </LayoutMain>
      </Provider>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
