import { NavLink } from "react-router-dom"
import { LocationMarkerIcon } from "@heroicons/react/solid"
import { DeviceMobileIcon } from "@heroicons/react/solid"
import { MailOpenIcon } from "@heroicons/react/solid"
import DividerSkyline from "../assets/DividerSkyline"

function Contact() {
  return (
    <>
      <div className="bg-blue-700 w-full">
        <section className="w-full max-w-2xl px-6 pb-4 pt-16 mx-auto rounded-md shadow-md">
          <h2 className="text-bubble-gum text-center">
            Get in touch
          </h2>
          <p className="contact-sub-heading">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <div className="contact-container">
            <NavLink to="#" className="contact-link">
              <LocationMarkerIcon className="contact-icon" />
              <span className="mt-2">PO Box 327</span>
              <span className="">Ventura, Ca. 93002</span>
            </NavLink>
            <NavLink to="#" className="contact-link">
              <DeviceMobileIcon className="contact-icon" />
              <span className="mt-2">+1 805 861 6375</span>
            </NavLink>
            <NavLink to="#" className="contact-link">
              <MailOpenIcon className="contact-icon" />
              <span className="mt-2">teambit@riseup.net</span>
            </NavLink>
          </div>
          <div className="mt-6 ">
            <div className="items-center -mx-2 md:flex">
              <div className="w-full mx-2">
                <label>Name</label>
                <input type="text" />
              </div>
              <div className="w-full mx-2 mt-4 md:mt-0">
                <label>E-mail</label>
                <input type="email" />
              </div>
            </div>
            <div className="w-full mt-4 mx-4 md:mx-0">
              <label className="">Message</label>
              <textarea />
            </div>
            <div className="flex justify-center mt-12">
              <button className="btn-smoke">Send Message</button>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-blue-700">
        <DividerSkyline />
      </div>
    </>
  )
}
export default Contact
