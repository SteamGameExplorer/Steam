import React from "react";
import Nav from "../nav";
import Signin from "../../auth/Auth.js";
import {Link} from "react-router-dom";

class HeaderHome extends React.Component {


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
              <Link to={"home"}>
                <img className="logo-2" src="/img/steam2.png" alt="" />
              </Link>
              <Link to={"home"}>
               <img className="logo-1" src="/img/steam1.png" alt="" />
              </Link>
            </div>
            <div className="nav-wrap d-flex flex-row align-items-center">

                <Nav></Nav>

            </div>
            <div className="nav-wrap d-flex flex-row align-items-center">
              <a className="genric-btn" href="request-demo.html">
                <Link to={"/auth"}>SignIn/Register</Link>
              </a>
            </div>
            
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderHome;
