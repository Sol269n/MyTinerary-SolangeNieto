import Hero from "../components/Hero"
import { ciudades } from "../data/data"
import Call from "../components/Call"
import Carousel from "../components/Carousel"

export const Home = () => {

  const cities = ciudades.slice(0, 12)


  return (
    <>
      <Hero />
      <Call />
      <main className="flex justify-center items-center py-5 grow">
        <Carousel key={cities.id} cities={cities}/>
      </main>
    </>
  )
}