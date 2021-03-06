import React, { Component } from 'react'

//import Login from './login'
import Header from './header'
//import Modal from './modal'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = { isOpen: false }
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <section id="cover">
        <div className="overlay">
          <Header />
          <div className="container container-table">
            <div className="row vertical-center-row">
              <div className="text-center col-md-8 offset-md-2">
                <p className="quote">
                  <em>
                    "By recording your dreams and goals on paper, you set in
                    motion the process of becoming the person you most want to
                    be"<br /> Mark Victor Hansen
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Home
