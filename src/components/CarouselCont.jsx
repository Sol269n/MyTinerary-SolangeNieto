
const CarouselCont = ({cities}) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {cities.map((citie) => (
        <section key={citie.id}>
          <img className="w-[400px] h-[200px] object-cover rounded" src={citie.image} alt={`imagen de ${citie.image}`} />
          <div className="bg-cyan-950 text-center">
            <h3>{citie.name} - {citie.country}</h3>
          </div>
        </section>
      ))}
    </div>
  )
}

export default CarouselCont
