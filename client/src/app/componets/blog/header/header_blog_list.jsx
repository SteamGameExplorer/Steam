import React from "react";
import Nav from "../../multiple/nav";
import {Link} from "react-router-dom";

class HeaderBlogList extends React.Component {


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
              <Link to={"/"}>
                <img className="logo-1" src="/img/steam2.png" alt="" />
              </Link>
              <Link to={"/"}>
                <img className="logo-2" src="/img/steam2.png" alt="" />
              </Link>
            </div>
            <div className="nav-wrap d-flex flex-row align-items-center">
              <nav id="nav-menu-container">
                <Nav></Nav>
              </nav>
            </div>
            
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderBlogList;
