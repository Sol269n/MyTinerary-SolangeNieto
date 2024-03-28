import { Link } from "react-router-dom"

const Call = () => {
  return (
    <section className="flex justify-center items-center py-10 ">
        <Link className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 relative flex justify-center items-center" to="/Cities">
        <img className="w-[400px] h-[200px] object-cover" src="/assets/river.jpg" alt="cities"/>
        <article className="absolute">
          <h1 className="  uppercase text-center text-2xl font-semibold">Cities</h1>
          <p className="font-semibold">Find your new destination</p>
        </article>
        </Link>
    </section>
  )
}

export default Call
