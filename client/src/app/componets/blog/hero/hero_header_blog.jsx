import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPlus, faHeart, faCommentDots } from "@fortawesome/free-solid-svg-icons";

class HeroHeaderBlog extends React.Component {

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
    });
 
  }

  componentWillMount() {
    this.setState({
      fullscreen:{
        height: window.innerHeight,
      }
    });
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className="hero-section-blog relative" style={{'overflow': 'hidden'}}>
        <div id="blog-owl" className="owl-carousel owl-theme">
          <Slider {...settings} >
          <div className="items" style={{'height': 'calc(80vh)'}}>
            <div className="container-fluid">
              <div className="row align-items-end">
                <div className="col-lg-12 no-padding">
                  <img className="owl-img" src="/img/hero/hero-blog.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="content flex justify-content-between">
                    <div>
                      {/* eslint-disable-next-line */}
                      <a className="genric-btn3">
                        Portfolio
                      </a>
                      <h1>
                        Free, Newly released <br />
                        And Top Rating Games
                      </h1>
                    </div>
                    <div className="text-right">
                      <div className="author">
                         Fan Yi on 25th Nov, 2020
                      </div>
                      <div className="blog-summary">
                        <a href="/index" className="blog-link">
                          <FontAwesomeIcon icon={ faHeart } className="mr-1" />
                            10
                        </a>
                        <a href="/index" className="blog-link">
                          <FontAwesomeIcon icon={ faEye } className="mr-1" />
                          4 Views
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items" style={{'height': 'calc(100vh)'}}>
            <div className="container-fluid">
              <div className="row align-items-end">
                <div className="col-lg-12 no-padding">
                  <img className="owl-img" src="/img/hero/hero-blog.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="content flex justify-content-between">
                    <div>
                      <a href="/index" className="genric-btn3">
                        Art & Fantacy
                      </a>
                      <h1>
                        The Idea Of God Is <br />
                        Not Henceforth Relevant
                      </h1>
                    </div>
                    <div className="d-lg-flex align-items-center d-none">
                      <div className="text-right">
                        <div className="author">
                          Sir Alex James on 25th June, 2018
                        </div>
                        <div className="blog-summary">
                        <a href="/index" className="blog-link">
                            <FontAwesomeIcon icon={ faHeart } className="mr-1" />
                            218
                          </a>
                          <a href="/index" className="blog-link">
                            <i className="fas fa-eye" />
                            <FontAwesomeIcon icon={ faEye } className="mr-1" />
                            4.5k Views
                          </a>
                          <a href="/index" className="blog-link">
                            <FontAwesomeIcon icon={ faCommentDots } className="mr-1" />
                            07
                          </a>
                        </div>
                      </div>
                      <div className="ml-4">
                        <a
                          href="blog-details-sidebar.html"
                          className="blog-icon"
                        >
                          <FontAwesomeIcon icon={ faPlus } className="mr-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Slider>
        </div>
      </section>
    );
  }
}

export default HeroHeaderBlog;
