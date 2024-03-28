
const CarouselCont = ({cities}) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {cities.map((citie) => (
        <section key={citie.name} className="relative flex justify-start items-end">
          <img className="w-[400px] h-[200px] object-cover rounded" src={citie.image} alt={`imagen de ${citie.image}`} />
          <div className="absolute w-full text-start px-2 bg-black bg-opacity-50">
            <h2 className="uppercase text-xl">{citie.name}</h2>
            <h3>{citie.country}</h3>
          </div>
        </section>
      ))}
    </div>
  )
}

export default CarouselCont
