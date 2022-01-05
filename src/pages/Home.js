import Fearure from "../components/Feature"
import Contact from "../components/Contact"
import CTA from "../components/CTA"
import Hero from "../components/Hero"
import Pricing from "../components/Pricing"

function Home() {
  return (
    <>
      <section className="">
        <Hero />
        <Fearure />
        <Pricing />
        <CTA />
        <Contact />
      </section>
    </>
  )
}
export default Home
