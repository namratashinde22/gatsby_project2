import { Link } from "gatsby"
import React from "react"

function register() {
  return (
    <div className="form-container my-3">
      <form>
        <div id="user-data">
          <div className="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" className="form-control" />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" className="form-control" />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary mt-3">
            Register
          </button>{" "}
          <Link to="/" className="btn btn-secondary mt-3">
            Login
          </Link>
        </div>
      </form>
    </div>
  )
}

export default register
