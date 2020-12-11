import React from "react";
import {Link} from "react-router-dom";

class Nav extends React.Component {

  constructor() {
    super();
    this.state={
      showHomeMenu: false,
      showBlogMenu: false,
      openMobileMenu: false,
    }

    this.homeMenuToggle = this.homeMenuToggle.bind(this);
    this.homeMenuToggleHover = this.homeMenuToggleHover.bind(this);
    this.homeMenuShow = this.homeMenuShow.bind(this);

    this.BlogMenuToggle = this.BlogMenuToggle.bind(this);

  //
    this.showMobileMenu = this.showMobileMenu.bind(this);
  }



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




  homeMenuToggle(event)  {
    const currentState = this.state.showHomeMenu;

    this.setState({
      showBlogMenu: false,
      showHomeMenu: !currentState,
    });
    event.preventDefault();
  }

  BlogMenuToggle(event){
    const currentState = this.state.showBlogMenu;

    this.setState({
      showHomeMenu: false,
      showBlogMenu: !currentState,
    });

    event.preventDefault();
  }

  homeMenuToggleHover(event){

    const currentState = this.state.showHomeMenu;

   setTimeout(
    function() {
        
      this.setState({
        showHomeMenu: !currentState,
        showBlogMenu: false,
      });
    }
    .bind(this),
    3000
);


    event.preventDefault();
  }


  homeMenuShow(event){

    this.setState({
      showHomeMenu: true,
      showBlogMenu: false,
    });

    event.preventDefault();
  }

  render() {
    return (
<>
<button type="button" id="mobile-nav-toggle" onClick={this.showMobileMenu}><i className="lnr lnr-menu"></i></button>
<div id="mobile-body-overly"  onClick={this.showMobileMenu} style={ this.state.openMobileMenu? {display: 'block'} : { display: 'none'} }></div>

    <nav id={ this.state.openMobileMenu? "mobile-nav" : "nav-menu-container" }>
      <ul className={ this.state.openMobileMenu? "" : "parent-active nav-menu nav-menu2" } style={{touchAction: 'pan-y'}}> 
        <li className={`menu-has-children  ${this.state.showHomeMenu? 'parent-active sfHover': ''}`}>

          {/* change arrow*/}
        { this.state.openMobileMenu? 
          this.state.showHomeMenu?  <i class="lnr lnr-chevron-up"></i>: <i class="lnr lnr-chevron-down"></i>
        :''}

          <Link to={'/multiple'} onClick={this.homeMenuToggle} className='sf-with-ul'>Home</Link>
          <ul style={this.state.showHomeMenu? {display: 'block'}: { display: 'none'}}>
            <li>
              <Link to={"/multiple/index"}>Home - Saas</Link>
            </li>
            <li>
              <Link to={"/multiple/index2"}>Home - Saas Fixed</Link>
            </li>
            <li>
              <Link to={"/multiple/index3"}>Home - Product</Link>
            </li>
            <li>
              <Link to={"/multiple/index4"}>Home - Saas Image</Link>
            </li>
            <li>
              <Link to={"/multiple/index5"}>Home - Product Image</Link>
            </li>
            <li>
              <Link to={"/multiple/index6"}>Home - Saas Slider</Link>
            </li>
            <li>
              <Link to={"/multiple/index7"}>Home - Product Slider</Link>
            </li>
            <li>
              <Link to={"/multiple/index8"}>Home - Products Fixed</Link>
            </li>
            <li>
              <Link to={"/multiple/index9"}>Home - Sass Video</Link>
            </li>
            <li>
              <Link to={"/multiple/index10"}>Home - Product Video</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={"/multiple/features"}>Features</Link>
        </li>
        <li>
          <Link to={"/multiple/about"}>About Us</Link>
        </li>
        <li>
          <Link to={"/multiple/pricing"}>Pricing</Link>
        </li>
        <li className={`menu-has-children  ${this.state.showBlogMenu? ' parent-active sfHover': ''}`}>

          {/* change arrow*/}
          { this.state.openMobileMenu? 
            this.state.showBlogMenu?  <i class="lnr lnr-chevron-up"></i>: <i class="lnr lnr-chevron-down"></i>
          :''}

          <Link to={'/blog'} onClick={this.BlogMenuToggle}>Blog </Link>
          <ul style={this.state.showBlogMenu? {display: 'block'}: { display: 'none'}}>
            <li>
              <Link to={"/blog/home"}>Blog Home</Link>
            </li>
            <li>
              <Link to={"/blog/home-sidebar"}>Blog Home Sidebar</Link>
            </li>
            <li>
              <Link to={"/blog/list"}>Blog List</Link>
            </li>
            <li>
              <Link to={"/blog/list-sidebar"}>Blog List Sidebar</Link>
            </li>
            <li>
              <Link to={"/blog/details"}>Blog Details</Link>
            </li>
            <li>
              <Link to={"/blog/details-sidebar"}>Blog Details Sidebar</Link>
            </li>
          </ul>
        </li>

        
        <li>
          <Link to={"/multiple/contact"}>Contact</Link>
        </li>
      </ul>
      </nav>


      </>
    );
  }
}

export default Nav;
