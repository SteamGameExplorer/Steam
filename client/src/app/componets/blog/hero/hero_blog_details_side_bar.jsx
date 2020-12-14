import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faDribbble, faBehance, faFacebookF } from "@fortawesome/free-brands-svg-icons";

class HeroBlogDetailsSideBar extends React.Component {

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
      <section className="hero-section-blog-details relative">
        <div>
          <img className="blog-img" src="/img/blog/blog-details-bg.jpg" alt="" />
        </div>
        <div className="content">
          <div className="container">
            <div className="row no-margin align-items-center justify-content-between content-wrap">
              <div className="d-flex align-items-center content-wrap-child">
                <div className="text">
                  <div className="text-white">
                    <p className="mb-0">Fan Yi on 29th Nov, 2020</p>
                  </div>
                </div>
                <div className="d-flex icons">
                  <div className="text icon">
                    <div className="text-white">
                      <FontAwesomeIcon icon={ faHeart } className="mr-1" />
                      10
                    </div>
                  </div>
                  <div className="text icon">
                    <div className="text-white">
                      <FontAwesomeIcon icon={ faEye } className="mr-1" />
                        4 Views
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a href="#facebook" className="social-link">
                  <FontAwesomeIcon icon={ faFacebookF } className="mr-1" />
                </a>
                <a href="#twitter" className="social-link">
                  <FontAwesomeIcon icon={ faTwitter } className="mr-1" />
                </a>
                <a href="#dribbble" className="social-link">
                <FontAwesomeIcon icon={ faDribbble } className="mr-1" />
                </a>
                <a href="#behance" className="social-link">
                  <FontAwesomeIcon icon={ faBehance } className="mr-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroBlogDetailsSideBar;
