import React from "react";
import {Link} from "react-router-dom";

class Nav extends React.Component {

  constructor() {
    super();
    this.state={
      showBlogMenu: false,
      openMobileMenu: false,
    }

    //blog
    this.blogMenuToggle = this.blogMenuToggle.bind(this);
    this.blogMenuMouseLeave = this.blogMenuMouseLeave.bind(this);
    this.blogMenuMouseEnter = this.blogMenuMouseEnter.bind(this);

    // mobile menu
    this.showMobileMenu = this.showMobileMenu.bind(this);
  }

  //blog menu
  blogMenuToggle(event){
    const currentState = this.state.showBlogMenu;

    this.setState({
      showBlogMenu: !currentState,
    });

    event.preventDefault();
  }

  blogMenuMouseLeave(event) {
    event.preventDefault();

    setTimeout(function () {
      this.setState({showBlogMenu: false});
    }.bind(this), 800);
    
  }

  blogMenuMouseEnter(event) {
    event.preventDefault();
    this.setState({showBlogMenu: true});
  }

  // show mobile menu
  showMobileMenu( event ){
    const currentState = this.state.openMobileMenu;
    this.setState({ openMobileMenu: !currentState });

    // open mobile menu
    if(! this.state.openMobileMenu ){
      document.body.classList.add('mobile-nav-active');
    }else{
      document.body.classList.remove('mobile-nav-active');
    }
    
    event.preventDefault();
  }

  render() {
    return (
<>
<button type="button" id="mobile-nav-toggle" onClick={this.showMobileMenu}><i className="lnr lnr-menu"></i></button>
<div id="mobile-body-overly"  onClick={this.showMobileMenu} style={ this.state.openMobileMenu? {display: 'block'} : { display: 'none'} }></div>

    <nav id={ this.state.openMobileMenu? "mobile-nav" : "nav-menu-container" }>
      <ul className={ this.state.openMobileMenu? "" : "parent-active nav-menu nav-menu2" } style={{touchAction: 'pan-y'}}> 
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link to={"/search"}>Recommendation</Link>
        </li>
        <li>
          <Link to={"/popular"}>Popular</Link>
        </li>
        <li>
          <Link to={"/history"}>History</Link>
        </li>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>        
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      </nav>


      </>
    );
  }
}

export default Nav;
