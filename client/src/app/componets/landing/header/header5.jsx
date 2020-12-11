import React from "react";
import Nav from "../nav";

class Header5 extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      isNotScrolled: true
    };
  }

  componentDidMount() {

    document.addEventListener('scroll', () => {
      const isNotScrolled = window.scrollY < 100;
      if (isNotScrolled !== this.state.isNotScrolled) {
        this.setState({ isNotScrolled })
      }
    });

  }

  render() {
    return (
      <header id={this.props.headerId} className={ `parent-active ${this.state.isNotScrolled ? '' : 'header-scrolled'}`}>
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            <div id="logo">
              <a href="index.html">
                <img className="logo-1" src="/img/logo4.png" alt="" />
              </a>
              <a href="index.html">
                <img className="logo-2" src="/img/logo.png" alt="" />
              </a>
            </div>
            <div className="nav-wrap d-flex flex-row align-items-center">

                <Nav></Nav>

            </div>
            <div className="nav-wrap d-flex flex-row align-items-center">
              <a className="genric-btn" href="request-demo.html">
                Sign Up
              </a>
            </div>
            
          </div>
        </div>
      </header>
    );
  }
}

export default Header5;
