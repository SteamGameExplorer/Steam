import React from "react";
import Slider from "react-slick";

class Marketing extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className="marketing-section section-gap aquablue-bg" style={{width: 'calc(100% - 15px)' }}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 marketing-left">
              <h1>
                Build Your Brand
                <br /> Automate Your Marketing
              </h1>
              <p className="mw-510">
                The first is a non technical method which requires the use of
                adware removal software. Download free adware and spyware
                removal software and use advanced tools to help prevent getting
                infected. Spyware scan review is a free service for anyone
                interested in downloading spyware/adware removal software. Our
                adware remover is the most trusted.
              </p>
              <a href="/index" className="genric-btn3">
                Browse free demo
              </a>
            </div>
            <div className="col-lg-6 marketing-right">
              <div className="active-dash-carusel">
                <Slider {...settings}>
                <img
                  className="img-fluid item"
                  src="/img/marketing/d1.png"
                  alt=""
                />
                <img
                  className="img-fluid item"
                  src="/img/marketing/d2.png"
                  alt=""
                />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Marketing;
