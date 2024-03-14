const Hero = () => {
    return (
        <section className="relative flex justify-center items-center">
          <img className="w-full h-[350px] object-cover object-bottom" src="/assets/mountains.jpg" alt="Hero" />
          <article className=" absolute text-center">
          <h1 className="text-3xl font-bold">MyTinerary</h1>
          <h2 className="text-lg font-semibold">Find your perfect trip, designed by insiders who know and love their cities!</h2>
          </article>
        </section>
    )
}

export default Hero