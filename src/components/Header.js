import Icon from "../assets/images/nwslogo.png"
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <>
      <div>
        <nav className="bg-dodger-blue-2">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <div className="flex items-center justify-between h-16">
              <div className=" flex items-baseline">
                <NavLink className="flex-shrink-0" to="/">
                  <img className="h-16 w-16" src={Icon} alt="Workflow" />
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
              <div className="-mr-2 flex md:hidden">
                <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-8 w-8"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/#"
              >
                Home
              </NavLink>
              <NavLink
                className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/#"
              >
                Gallery
              </NavLink>
              <NavLink
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/#"
              >
                Content
              </NavLink>
              <NavLink
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/#"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default Header
