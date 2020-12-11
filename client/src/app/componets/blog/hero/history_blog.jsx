import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";

class HistoryBlog extends React.Component {

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
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className="hero-section-blog relative" style={{ overflow: "hidden"}}>
        <div id="blog-owl" className="owl-carousel owl-theme">
          <Slider {...settings}>
          <div className="items">
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
                      <h1>
                        View The Trend <br />
                        Of Games in Different Period
                      </h1>
                    </div>
                    <div className="d-lg-flex align-items-center d-none">
                      <div className="text-right">
                        <div className="author">
                          Fan Yi on 27th Nov, 2020
                        </div>
                        <div className="blog-summary">
                        <a href="/index" className="blog-link">
                            <FontAwesomeIcon icon={ faHeart } className="mr-1" />
                            10
                          </a>
                          <a href="/index" className="blog-link">
                            <i className="fas fa-eye" />
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
          </div>
          </Slider>
        </div>
      </section>
    );
  }
}

export default HistoryBlog;
