import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="w-full z-10 fixed flex flex-wrap p-3 bg-cyan-950">
            <Link className="grow flex justify-start" to="/">
                <img className=" h-[32px] object-cover px-2" src="/assets/iconTravel.png" alt="logo" />
                <h2 className="font-semibold text-2xl">MyTinerary</h2>
            </Link>
           
            <nav className="grow flex justify-end gap-4">
                <Link className="text-lg hover:bg-white hover:text-black p-1 rounded" to="/">Home</Link>
                <Link className="text-lg  hover:bg-white hover:text-black p-1 rounded" to="/Cities">Cities</Link>
                <Link className="text-lg  hover:bg-white hover:text-black p-1 rounded" to="/register">Register</Link>
                <Link className="inline-flex gap-1 text-lg p-1 rounded transition ease-in-out delay-150 bg-cyan-700 hover:-translate-0.5 hover:scale-110 hover:bg-cyan-500 duration-300" to="/login"><img className="h-[28px] object-cover px-0.5" src="/assets/login.png" alt="login" />Login</Link>
            </nav>
        </header>
    )
}

export default Header