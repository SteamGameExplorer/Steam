import React from "react";
import Slider from "react-slick";

class ClientReview extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true
    };
    return (
      <section className="client-review-section section-gap">
        <div className="container">
          <div className="active-review-carusel">
            <Slider {...settings}>
            <div className="single-review">
              <div className="quote-wrap">
                <p>
                  “Who are in extremely love with eco friendly system. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor.”
                </p>
                <div className="star">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                </div>
              </div>
              <div className="userinfo-wrap aquablue-bg d-flex flex-row align-items-center relative">
                <div className="overlay overlay-bg" />
                <div className="thumb relative">
                  <img src="/img/review/u2.png" alt="" />
                </div>
                <div className="details relative">
                  <h4>Vera Ball</h4>
                  <p>Head of Marketing, Apple Inc.</p>
                </div>
              </div>
            </div>
            <div className="single-review">
              <div className="quote-wrap">
                <p>
                  “Who are in extremely love with eco friendly system. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor.”
                </p>
                <div className="star">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                </div>
              </div>
              <div className="userinfo-wrap aquablue-bg d-flex flex-row align-items-center relative">
                <div className="overlay overlay-bg" />
                <div className="thumb relative">
                  <img src="/img/review/u3.png" alt="" />
                </div>
                <div className="details relative">
                  <h4>Derek Malone</h4>
                  <p>Head of Sales, Apple Inc.</p>
                </div>
              </div>
            </div>
            <div className="single-review">
              <div className="quote-wrap">
                <p>
                  “Who are in extremely love with eco friendly system. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor.”
                </p>
                <div className="star">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                </div>
              </div>
              <div className="userinfo-wrap aquablue-bg d-flex flex-row align-items-center relative">
                <div className="overlay overlay-bg" />
                <div className="thumb relative">
                  <img src="/img/review/u1.png" alt="" />
                </div>
                <div className="details relative">
                  <h4>Stella Pierce</h4>
                  <p>Head of Advertise, Apple Inc.</p>
                </div>
              </div>
            </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default ClientReview;
