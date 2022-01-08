import { NavLink } from "react-router-dom"
import { LocationMarkerIcon } from "@heroicons/react/solid"
import { DeviceMobileIcon } from "@heroicons/react/solid"
import { MailOpenIcon } from "@heroicons/react/solid"
import DividerSkyline from "./DividerSkyline"

function Contact() {
  return (
    <>

      <div className="bg-blue-700 w-full">
        <section class="w-full max-w-2xl px-6 pb-4 pt-16 mx-auto bg-blue-700 rounded-md shadow-md">
          <h2 class="text-3xl font-semibold text-center text-bubble-gum">
            Get in touch
          </h2>
          <p class="mt-3 text-center text-platinum">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <div class="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
            <NavLink to="#" class="contact-link">
              <LocationMarkerIcon className="contact-icon" />
              <span class="mt-2">PO Box 327</span>
              <span class="">Ventura, Ca. 93002</span>
            </NavLink>
            <NavLink to="#" class="contact-link">
              <DeviceMobileIcon className="contact-icon" />
              <span class="mt-2">+1 805 861 6375</span>
            </NavLink>
            <NavLink to="#" class="contact-link">
              <MailOpenIcon className="contact-icon" />
              <span class="mt-2">teambit@riseup.net</span>
            </NavLink>
          </div>
          <div class="mt-6 ">
            <div class="items-center -mx-2 md:flex">
              <div class="w-full mx-2">
                <label>Name</label>
                <input type="text" />
              </div>
              <div class="w-full mx-2 mt-4 md:mt-0">
                <label>E-mail</label>
                <input type="email" />
              </div>
            </div>
            <div class="w-full mt-4">
              <label class="">Message</label>
              <textarea />
            </div>
            <div class="flex justify-center mt-12">
              <button class="btn-smoke">Send Message</button>
            </div>
          </div>
        </section>
      </div>
     <div className="bg-blue-700"> <DividerSkyline /></div>
    </>
  )
}
export default Contact
