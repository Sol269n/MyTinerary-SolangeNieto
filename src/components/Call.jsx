import { Link } from "react-router-dom"

const Call = () => {
  return (
    <section className="flex justify-center items-center p-5">
        <Link className="relative flex justify-center items-center " to="/Cities">
        <img className="w-[400px] h-[200px] object-cover" src="/assets/river.jpg" alt="cities" />
        <p className="absolute text-center text-2xl font-semibold">Cities</p>
        </Link>
      </section>
  )
}

export default Call
