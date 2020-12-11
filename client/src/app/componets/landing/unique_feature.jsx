import React from "react";
import Slider from "react-slick";

class UniqueFeature extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className="unique-feature-area section-gap">
        <div className="container-fluid">
          <div className="row justify-content-center section-title-wrap">
            <div className="col-lg-12">
              <div className="title-img">
                <img src="/img/title-icon.png" alt="" />
              </div>
              <h1>Features that make us Stand Out </h1>
              <p>
                The first is a non technical method which requires the use of
                adware removal software. Download free adware and spyware
                removal software and use advanced tools getting infected.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 pr-5">
              <div className="active-execution-carusel">
                <Slider {...settings}>
                  <img className="img-fluid" src="/img/carusel/c1.png" alt="" />
                  <img className="img-fluid" src="/img/carusel/c2.png" alt="" />
                  <img className="img-fluid" src="/img/carusel/c3.png" alt="" />
                </Slider>
              </div>
            </div>
            <div className="col-lg-6 pl-4">
              <div className="feature-list d-flex flex-row">
                <div className="icon">
                  <img className="img-fluid" src="/img/feature/f1.png" alt="" />
                </div>
                <div className="desc ml-40">
                  <a href="/index">
                    <h4 className="mb-20">Certifications</h4>
                  </a>
                  <p>
                    We all live in an age that belongs to the young at heart.
                    Life that is becoming extremely fast, day to day, also asks
                    us to remain.
                  </p>
                </div>
              </div>
              <div className="feature-list d-flex flex-row">
                <div className="icon">
                  <img className="img-fluid" src="/img/feature/f2.png" alt="" />
                </div>
                <div className="desc ml-40">
                  <a href="/index">
                    <h4 className="mb-20">Page Builder</h4>
                  </a>
                  <p>
                    Vera sought out counseling with me because her doctor
                    advised her to discover the emotional causes of her chronic
                    fatigue.
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

export default UniqueFeature;
