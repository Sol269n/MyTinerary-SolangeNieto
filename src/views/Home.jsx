import Hero from "../components/Hero"
import { ciudades } from "../data/data"
import Call from "../components/Call"
import Carousel from "../components/Carousel"

export const Home = () => {
  console.log(ciudades)
  const cities = ciudades.slice(0, 12)
  console.log(cities)

  return (
    <>
      <Hero />
      <Call />
      <main className="flex justify-center items-center py-5">
        <Carousel cities = {cities}/>
      </main>
    </>
  )
}