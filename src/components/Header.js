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
                    <NavLink className="nav-link" to="/build">
                      Build
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
                  className="menu-button"
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
            <ul className="w-full py-2 text-center text-2xl">
              <li>
                <NavLink className="nav-link w-full" to="/#">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link " to="/#">
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
