const Hero = () => {
    return (
        <section className="relative flex justify-center items-center pt-10">
          <img className="w-full h-[450px] object-cover object-bottom" src="/assets/mountains.jpg" alt="Hero" />
          <article className=" absolute text-center">
          <h1 className=" uppercase text-4xl font-bold">MyTinerary</h1>
          <h2 className="text-xl font-semibold">Find your perfect trip, designed by insiders who know and love their cities!</h2>
          </article>
        </section>
    )
}

export default Hero