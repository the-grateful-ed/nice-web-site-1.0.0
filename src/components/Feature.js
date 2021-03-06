import DividerSlant from "../assets/DividerSlant"
import DividerSlant2 from "../assets/DividerSlant2"
import { VscSettingsGear } from "react-icons/vsc"
import { GoSettings } from "react-icons/go"
import { BsStars } from "react-icons/bs"
import { HiOutlineFire } from "react-icons/hi"

function Feature() {
  return (
    <>
      <DividerSlant />
      <section className="bg-platinum">
        <div className="container px-6 py-10 mx-auto">
          <h1>
            explore our <br /> awesome
            <span className="text-blue-500"> Components</span>
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
            <div className="p-6 border rounded-xl border-strong-blue bg-white shadow-2xl">
              <div className="md:flex md:items-start md:-mx-4 bg-white">
                <span className="feature-icon-bg">
                  <VscSettingsGear />
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1>Build Together with Us</h1>
                  <p className="mt-3 text-jet-black">
                    We are really with you the entire way. We can offer the personal level of care and attention that you can't get elsewhere. From wireframe to final draft, we make sure you are happy with your web project.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 border rounded-xl border-blue-700 bg-white shadow-2xl">
              <div className="md:flex md:items-start md:-mx-4">
                <span className="feature-icon-bg ">
                  <GoSettings />
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1>The Right Tools for the Job</h1>
                  <p className="mt-3 text-jet-black">
                    We not only stay up to date with the newest tools for the job but are very skilled in all the tools. We make sure that your page is compatable on all divices, quick to load and easy for the search engines to index.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 border rounded-xl border-blue-700 bg-white shadow-2xl">
              <div className="md:flex md:items-start md:-mx-4 ">
                <span className="feature-icon-bg ">
                  <HiOutlineFire />
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1>Cost Effective Solutions</h1>

                  <p className="mt-3 text-jet-black">
                    Even after deployment we make sure your dollars are well spent. Using JamStack framework, your hosting is provided most of the time at no cost. You can maintain your website for dollars a year.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border rounded-xl border-blue-700 bg-white shadow-2xl">
              <div className="md:flex md:items-start md:-mx-4 ">
                <span className="feature-icon-bg">
                  <BsStars />
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1>Simple & clean designs</h1>

                  <p className="mt-3 text-jet-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident ab nulla quod dignissimos vel non corrupti
                    doloribus voluptatum eveniet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DividerSlant2 />
    </>
  )
}
export default Feature
