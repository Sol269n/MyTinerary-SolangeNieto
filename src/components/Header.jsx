import { Link, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../redux/actions/userActions"



const Header = () => {


  const user = useSelector( store => store.user.user)
  const dispatch = useDispatch()
  const location = useLocation()

  const links = [
    {
      path: "/",
      title: "Home",
      active: "/" == location.pathname,
      class: "text-lg hover:bg-white hover:text-black p-1 rounded",
      visible: true

    },
    {
      path: "/Cities",
      title: "Cities",
      active: "/Cities" == location.pathname,
      class: "text-lg hover:bg-white hover:text-black p-1 rounded",
      visible: true
    },
    {
      path: "/Register",
      title: "Register",
      active: "/Register" == location.pathname,
      class: "text-lg hover:bg-white hover:text-black p-1 rounded",
      visible: user.first_name ? false : true
    },
    {
      path: "/Login",
      title: "Login",
      active: "/Login" == location.pathname,
      class: "inline-flex gap-1 text-lg p-1 rounded transition ease-in-out delay-150 bg-cyan-700 hover:-translate-0.5 hover:scale-110 hover:bg-cyan-500 duration-300",
      img: <img className="h-[28px] object-cover px-0.5" src="/assets/login.png" alt="login" />,
      visible: user.first_name ? false : true
    },
  ];


  const handleClick = () => {
    dispatch(logout())
  }

  return (
      <header className="w-full z-10 fixed flex flex-wrap p-3 bg-cyan-950">
          <Link className="grow flex justify-start" to="/">
              <img className=" h-[32px] object-cover px-2" src="/assets/iconTravel.png" alt="logo" />
              <h2 className="font-semibold text-2xl">MyTinerary</h2>
          </Link>        
          <nav className="flex gap-4">
            {links.map( (link) => (<Anchor key={link.title} link={link} />))}
              {/* <Link className="text-lg hover:bg-white hover:text-black p-1 rounded" to="/">Home</Link>
              <Link className="text-lg hover:bg-white hover:text-black p-1 rounded" to="/Cities">Cities</Link>
              <Link className="text-lg hover:bg-white hover:text-black p-1 rounded" to="/register">Register</Link>
              <Link className="inline-flex gap-1 text-lg p-1 rounded transition ease-in-out delay-150 bg-cyan-700 hover:-translate-0.5 hover:scale-110 hover:bg-cyan-500 duration-300" to="/login"><img className="h-[28px] object-cover px-0.5" src="/assets/login.png" alt="login" />Login</Link>  */}


            {user.first_name && (
              <button onClick={handleClick} className="border-none rounded px-2 bg-red-900 ">
                   Logout 
              </button>
            )} 
          </nav>
       </header>
    )
}

const Anchor = ({link}) => {
  if (link.visible){
    return (
      <Link 
    key={link.title} 
    className={`${link.class} ${link.active ? "bg-white text-black " : ""}`}
    to={link.path}
    >
    {link.img}
    {link.title} 
  </Link>
    )
  }else{
    <></>
  }
  
}

export default Header