import React from "react";
import Slider from "react-slick";

class Execution extends React.Component {
  render() {
    const settings = {
      dots: true,
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
              <h1>The Easiest way of Execution </h1>
              <p>
                The first is a non technical method which requires the use of
                adware removal software. Download free adware and spyware
                removal software and use advanced tools getting infected.
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
                  <h4>Multitasking skills</h4>
                  <p className="mt-20 mb-0">
                    If you find yourself doing the same routine day after day,
                    remembering what you did the day before.
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
                  <h4>Payment issues</h4>
                  <p className="mt-20 mb-0">
                    I am upset. At this moment, as I sit here typing this up, I
                    am truly upset. Something happened.
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
                  <h4>Analytics method</h4>
                  <p className="mt-20 mb-0">
                    Notes are very powerful. They express your thanks,
                    encouragement, sympathy, apology, congratulations, feelings.
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

export default Execution;
