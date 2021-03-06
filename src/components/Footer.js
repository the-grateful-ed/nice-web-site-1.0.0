import { NavLink } from "react-router-dom"
import { BsGithub } from "react-icons/bs"
import { GrTwitter } from "react-icons/gr"

function Footer() {
  return (
    <>
      <footer>
        <div className="flex flex-col">
          <div className="md:hidden mt-7 mx-auto w-11 h-px rounded-full"></div>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
            <nav className="">
              <NavLink
                aria-current="page"
                to="#"
                className="hover:text-gray-700 "
              >
                Components
              </NavLink>
              <NavLink to="#">Contacts</NavLink>
              <NavLink to="#">Customization</NavLink>
            </nav>
            <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full"></div>
            <div className="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-aluminum-foil space-x-4">
              <BsGithub />
              <GrTwitter />
            </div>
            <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full "></div>
            <div className="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
              <span className="text-xm font-thin">
                © 2021 Nice Web Solutions
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
