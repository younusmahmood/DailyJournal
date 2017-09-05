import React, { Component } from 'react'

import Login from './login'

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-8">
          <h1>Welcome to Daily Journal!</h1>
        </div>
        <div className="col-sm-2">
          <Login />
        </div>
      </div>
    )
  }
}

export default Home
