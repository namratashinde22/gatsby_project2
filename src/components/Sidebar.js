import React from "react"
import links from "../constants/links"
import { Link, navigate } from "gatsby"
import { FaTimes } from "react-icons/fa"
import { logout } from "../utils/auth"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? "sidebar-links" : null}>
          {/* {links.map(link => {
            return (
              <li key={link.id}>
                <Link to={link.url} onClick={toggleSidebar} >
                  {link.text}
                </Link>
              </li>
            )
          })} */}
          <li>
            <Link to="/app/lineup">Lineup</Link>
          </li>
          <li>
            <Link to="/app/experience">Experience</Link>
          </li>
          <li>
            <Link to="/app/planyourjourney">Plan your journey</Link>
          </li>
          <li>
            <Link to="/app/buytickets">Buy Tickets</Link>
          </li>
          <li>
            <a
              className="side-links"
              onClick={event => {
                event.preventDefault()
                logout(() => navigate(`/app/login`))
              }}
            >
              log out
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
