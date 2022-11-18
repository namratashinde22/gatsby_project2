import React from "react"
import { Link, navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../utils/auth"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/home`)
    }

    return (
      <>
        <Link to="/register" className="btn btn-primary">
          Register
        </Link>
        <div className="form-container my-3">
          <form
            method="post"
            onSubmit={event => {
              this.handleSubmit(event)
              navigate("/app/home")
            }}
          >
            <div className="form-group">
              <label>
                Username
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  onChange={this.handleUpdate}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={this.handleUpdate}
                />
              </label>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default Login
