import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { logout } from '../actions'
import LoginModal from './login_modal'
import SignupModal from './signup_modal'

class Header extends Component {
  constructor(props) {
    super(props)

    this.logout = this.logout.bind(this)
  }

  logout() {
    this.props.logout(() => {
      this.props.history.push('/')
    })
  }

  render() {
    var className = 'navbar navbar-toggleable-md navbar-inverse bg-inverse'
    if (this.props.location.pathname === '/') {
      className += ' homeNav'
    }
    return (
      <nav className={className}>
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
        <Link to={'/'} className="navbar-brand">
          My Daily Journal
        </Link>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          {this.props.authenticated
            ? <ul className="navbar-nav" id="main-nav">
                <li className="nav-item">
                  <Link to="/journals" style={{ textDecoration: 'none' }}>
                    <button className="nav-link">Journals</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <button onClick={this.logout} className="nav-link">
                    Logout
                  </button>
                </li>
              </ul>
            : <ul className="navbar-nav" id="main-nav">
                <li className="nav-item nav-link">
                  <LoginModal />
                </li>
                <li className="nav-item nav-link">
                  <SignupModal />
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

export default withRouter(connect(mapStateToProps, { logout })(Header))
