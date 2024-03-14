
const CarouselCont = ({citie}) => {
  return (
    <div className="flex flex-wrap gap-4">
        <section  className="">
            <img className="w-[400px] h-[200px] object-cover rounded" src={citie[0].image} alt="imagen de {citie[0].image} " />
            <div className="bg-cyan-950 text-center ">
              <h3>{citie[0].name} - {citie[0].country}</h3> 
            </div>
        </section>
        <section  className="">
            <img className="w-[400px] h-[200px] object-cover rounded" src={citie[1].image} alt="imagen de {citie[1].image} " />
            <div className="bg-cyan-950 text-center ">
              <h3>{citie[1].name} - {citie[1].country}</h3> 
            </div>
        </section>
        <section  className="">
            <img className="w-[400px] h-[200px] object-cover rounded" src={citie[2].image} alt="imagen de {citie[2].image} " />
            <div className="bg-cyan-950 text-center ">
              <h3>{citie[2].name} - {citie[2].country}</h3> 
            </div>
        </section>
        <section  className="">
            <img className="w-[400px] h-[200px] object-cover rounded" src={citie[3].image} alt="imagen de {citie[3].image} " />
            <div className="bg-cyan-950 text-center ">
              <h3>{citie[3].name} - {citie[3].country}</h3> 
            </div>
        </section>
    </div>
  )
}

export default CarouselCont
