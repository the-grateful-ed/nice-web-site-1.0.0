import Icon from "../assets/images/nwslogo.png"
import { NavLink } from "react-router-dom"
import React from "react"
import { MenuIcon } from "@heroicons/react/solid"
import Divider from "../assets/Divider"

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <div>
        <nav className="bg-dodger-blue-2">
          <div className="relative max-w-7xl mx-auto px-8 py-6">
            <div className="flex items-center justify-between h-16">
              <div className=" flex items-baseline">
                <NavLink className="flex-shrink-0" to="/">
                  <img className="h-16 w-16" src={Icon} alt="Icon" />
                </NavLink>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <NavLink className="nav-link" to="/#">
                      Home
                    </NavLink>
                    <NavLink className="nav-link" to="/#">
                      Gallery
                    </NavLink>
                    <NavLink className="nav-link" to="/#">
                      Content
                    </NavLink>
                    <NavLink className="nav-link" to="/#">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="ml-4 flex items-center md:ml-6"></div>
              </div>
              <div>
                <button
                  className="text-bubble-gum cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <MenuIcon className="text-bubble-gum h-10 w-10 md:hidden" />
                </button>
              </div>
            </div>
          </div>
          <div
            className={
              " flex-grow items-center" + (navbarOpen ? "flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col lg:flex-row list-none lg:ml-auto">
              <li>
                <NavLink className="nav-link w-full" to="/#">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link w-full" to="/#">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link w-full" to="/#">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link w-full" to="/#">
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="relative z-99">
          <Divider className="z-100" />
        </div>
      </div>
    </>
  )
}
