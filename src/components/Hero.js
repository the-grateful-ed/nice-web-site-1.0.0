import HeroImg from "../assets/images/hero.png"

function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text-container">
            <h1>
              Technology is
              <br className="hero-header-break" />
              our craft
            </h1>
            <p className="hero-text-block">
              Nice Web Solutions is a small team offering custom micro-run web
              code, designed just for you. Our work is produced in small,
              limited runs and is highly valuable.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="btn-smoke">Build with us</button>
              <button className="btn-dodger-blue w-full">Contact Us</button>
            </div>
          </div>
          <div className="hero-image-container">
            <img className="hero-image" alt="hero" src={HeroImg} />
          </div>
        </div>
      </section>
    </>
  )
}
export default Hero
