import HeroImg from "../assets/images/hero.png"

function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text-container">
            <h1>
              Before they sold out
              <br className="hero-header-break" />
              readymade gluten
            </h1>
            <p className="hero-text-block">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="btn-smoke">Button</button>
              <button className="btn-dodger-blue w-full">Button</button>
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
