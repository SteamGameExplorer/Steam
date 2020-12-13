import React from "react";
import {Link} from "react-router-dom";

class Nav extends React.Component {

  constructor() {
    super();
    this.state={
      showBlogMenu: false,
      openMobileMenu: false,
      user: ''
    }

    //blog
    this.blogMenuToggle = this.blogMenuToggle.bind(this);
    this.blogMenuMouseLeave = this.blogMenuMouseLeave.bind(this);
    this.blogMenuMouseEnter = this.blogMenuMouseEnter.bind(this);

    // mobile menu
    this.showMobileMenu = this.showMobileMenu.bind(this);
  }

  componentDidMount() {
    const user = localStorage.getItem("email");
    if(user) {
      const index = user.indexOf('@');
      const userName = user.slice(0, index);
      this.setState({
        user: userName
      });
    }
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
          <Link to={"/"}>Home</Link>
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

        {this.state.user? <li className={`menu-has-children  ${this.state.showBlogMenu? ' parent-active sfHover': ''}`}>
          {/* change arrow*/}
          { this.state.openMobileMenu? 
            this.state.showBlogMenu?  <i class="lnr lnr-chevron-up"></i>: <i class="lnr lnr-chevron-down"></i>
          :''}

          <Link to={'/blog'} onClick={this.blogMenuToggle}>
            {this.state.user}
          </Link>
          <ul 
            style={this.state.showBlogMenu? {display: 'block'}: { display: 'none'}}
            onMouseLeave={ this.blogMenuMouseLeave } 
            onMouseEnter={ this.blogMenuMouseEnter }>
            <li>
              <Link to={"/user_list"}>My List</Link>
            </li>
            <li>
              <Link to='/main'>Log Out</Link>
            </li>
          </ul>
        </li> : ''}
      </ul>
      </nav>
      </>
    );
  }
}

export default Nav;
