import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#">
          My Daily Journal
        </a>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          {this.props.authenticated
            ? <ul className="navbar-nav" id="main-nav">
                <li className="nav-item">
                  <a className="nav-link">Logout</a>
                </li>
              </ul>
            : <ul className="navbar-nav" id="main-nav">
                <li className="nav-item">
                  <a className="nav-link">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Signup</a>
                </li>
              </ul>}
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header)
