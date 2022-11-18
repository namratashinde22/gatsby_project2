import React from "react"
import { FaAlignRight } from "react-icons/fa"
// import pageLinks from "../constants/links"
import { Link, navigate } from "gatsby"
import { logout } from "../utils/auth"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h3 className="logo">Logo</h3>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {/* {pageLinks.map(link => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            )
          })} */}
          <Link to="/app/lineup">Lineup</Link>
          <Link to="/app/experience">Experience</Link>
          <Link to="/app/planyourjourney">Plan your journey</Link>
          <Link to="/app/buytickets" className="button">
            Buy Tickets
          </Link>
          <a
            className="nav-links"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
            log out
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
