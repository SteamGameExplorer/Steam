import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye, faCommentDots, faPlus } from "@fortawesome/free-solid-svg-icons";

class HeroBlogListPage extends React.Component {

  componentDidMount() {
    document.body.classList.add('parent-active');
    document.body.classList.add('version-blog');
  }

  componentWillUnmount() {
    document.body.classList.remove('parent-active');
    document.body.classList.remove('version-blog');
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className="hero-section-blog relative" style={{ overflow: 'hidden'}}>
        <div id="blog-owl" className="owl-carousel owl-theme">
          <Slider {...settings}>
          <div className="items">
            <div className="container-fluid">
              <div className="row align-items-end">
                <div className="col-lg-12 no-padding">
                  <img className="owl-img" src="/img/hero/hero-bg3.png" alt="" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="content flex justify-content-between">
                    <div>
                      <a href="/index" className="genric-btn3">
                      Annual inventory
                      </a>
                      <h1>
                         Game Of The Year <br />
                        In The History
                      </h1>
                    </div>
                    <div className="d-lg-flex align-items-center d-none">
                      <div className="text-right">
                        <div className="author">
                          Ruizi Zhang on 25th Nov, 2020
                        </div>
                        <div className="blog-summary">
                        <a href="/index" className="blog-link">
                            <FontAwesomeIcon icon={ faHeart } className="mr-1" />
                            10045
                          </a>
                          <a href="/index" className="blog-link">
                            <FontAwesomeIcon icon={ faEye } className="mr-1" />
                            4.8k Views
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

export default HeroBlogListPage;

