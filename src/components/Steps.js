import { FiFigma } from "react-icons/fi"
import { SiSvelte } from "react-icons/si"
import { SiJamstack } from "react-icons/si"
import { BsGithub } from "react-icons/bs"

function Steps() {
  return (
    <>
      <section className="text-jet-black">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-dodger-blue text-platinum relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-dodger-blue text-platinum rounded-full inline-flex items-center justify-center">
                <FiFigma />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Planning
                </h2>
                <p className="leading-relaxed">
                  Every good project starts with good planning. We create vector
                  wireframe mockups to visually represent what the final product
                  will look like. We can start to prototype some basic
                  functionallity to align with our clients goals and
                  interactivity required.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-dodger-blue text-platinum relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-dodger-blue text-platinum rounded-full inline-flex items-center justify-center">
                <SiSvelte />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Code
                </h2>
                <p className="leading-relaxed">
                  Code is like fine are to us. We use the latest frameworks or
                  complation tools available to ensure your site is compatable,
                  flexable, scalable, responsive and feels the way you want.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-dodger-blue text-platinum relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-dodger-blue text-platinum rounded-full inline-flex items-center justify-center">
                <SiJamstack />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Go Serverless
                </h2>
                <p className="leading-relaxed">
                  Using JamStack Architecture, we deliver a dynamic web that
                  fits your needs but also fits your budget. JamStack, aka
                  Serverless, is a new technology that lets you pay for the
                  things assets you need and avoid the things you don't. This
                  way you get a fine tuned machine that is very cost effective.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-dodger-blue text-platinum relative z-10 title-font font-medium text-sm">
              4
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-dodger-blue text-platinum rounded-full inline-flex items-center justify-center">
                <BsGithub />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Perfection
                </h2>
                <p className="leading-relaxed">
                  You can trust that you will end up with a work of art that we
                  put our heart into. Once we deploy not only do we offer
                  ongoing support but you have a custom made site that you are
                  able to update even without any tech skills needed. Hosting
                  and domain fees are very minimal and we offer advertising
                  packages for ongoing promotion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Steps
