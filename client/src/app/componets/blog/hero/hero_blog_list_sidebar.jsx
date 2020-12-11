import React from "react";
import Nav from "../../multiple/nav";

class HeroBlogListSidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      fullscreen: {
        height: 'auto'
      }
    }
  }

  componentDidMount() {
    this.setState({
      fullscreen:{
        height: window.innerHeight,
      }
    })
  }

  componentWillMount() {
    this.setState({
      fullscreen:{
        height: window.innerHeight,
      }
    });
  }

  render() {
    return (
      <header id="header7">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between" style={this.state.fullscreen}>
            <div id="logo">
              <a href="index.html">
                <img className="logo-1" src="/img/logo2.png" alt="" />
              </a>
              <a href="index.html">
                <img className="logo-2" src="/img/logo.png" alt="" />
              </a>
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

export default HeroBlogListSidebar;
