import { Link } from "react-router-dom"


function CardCitie({cities}) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {cities.map((citie) => (
        <section key={citie._id} className="relative flex justify-start items-end transition ease-in-out delay-150 hover:-translate-0.5 hover:scale-110 duration-200">
          <img className="w-[400px] h-[200px] object-cover rounded" src={citie.image} alt={`imagen de ${citie.image}`} />
          <div className="absolute w-full text-start px-2 bg-black bg-opacity-50">
            <h3 className="uppercase text-xl">{citie.name}</h3>
            <div className="flex flex-wrap items-center justify-between gap-5 pb-1">
              <h3 className="">{citie.country}</h3>
              <Link
                to={"/Citie/" + citie._id}
                className="rounded transition ease-in-out delay-150 bg-black px-2 py-0.5 hover:bg-cyan-700 bg-opacity-50 hover:bg-opacity-50"
              >
                See more...
              </Link>
           </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default CardCitie