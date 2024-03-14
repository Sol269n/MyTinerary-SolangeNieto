import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="flex flex-wrap p-3 bg-cyan-950">
            <img className=" h-[32px] object-cover px-2" src="/assets/iconTravel.png" alt="" />
          <h2 className="font-semibold text-2xl">MyTinerary</h2>
           
            <nav className="grow flex justify-end gap-4">
                <Link className="text-lg" to="/">Home</Link>
                <Link className="text-lg" to="/Cities">Cities</Link>
                <Link className="inline-flex gap-1 text-lg" to="#"><img className="h-[28px] object-cover px-0.5" src="/assets/login.png" alt="login" />Login</Link>
            </nav>
        </header>
    )
}

export default Header