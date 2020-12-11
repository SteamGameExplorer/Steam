import React from "react";
import Slider from "react-slick";

class StartExecution extends React.Component {
  render() {

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className="execution-secation section-gap aquablue-bg">
        <div className="container">
          <div className="row justify-content-center section-title-wrap">
            <div className="col-lg-12">
              <div className="title-img">
                <img src="/img/title-icon.png" alt="" />
              </div>
              <h1>The Easiest way of Exploration </h1>
              <p>
                We provide you several ways of exploration of your next game according to different search engine.
              </p>
            </div>
          </div>
          <div className="row justify-content-center pb-80">
            <div className="col-lg-8">
              <div className="active-execution-carusel">
                <Slider {...settings}>
                <img className="img-fluid" src="/img/carusel/c1.png" alt="" />
                <img className="img-fluid" src="/img/carusel/c2.png" alt="" />
                <img className="img-fluid" src="/img/carusel/c3.png" alt="" />
                </Slider>
              </div>
            </div>
          </div>
          <div className="row ex-porcess-wrap">
            <div className="col-lg-4">
              <div className="single-ex-process d-flex flex-row">
                <div className="icon">
                  <img src="/img/stat/s5.png" alt="" />
                </div>
                <div className="desc ml-20">
                  <h4>Search by Game Tag</h4>
                  <p className="mt-20 mb-0">
                    See what games are popular in your favorite category.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-ex-process d-flex flex-row">
                <div className="icon">
                  <img src="/img/stat/s3.png" alt="" />
                </div>
                <div className="desc ml-20">
                  <h4>Search by Price</h4>
                  <p className="mt-20 mb-0">
                    Search a good game in your affordable price
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-ex-process d-flex flex-row">
                <div className="icon">
                  <img src="/img/stat/s2.png" alt="" />
                </div>
                <div className="desc ml-20">
                  <h4>Search by rating</h4>
                  <p className="mt-20 mb-0">
                    See the highest rating game in the history!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default StartExecution;
