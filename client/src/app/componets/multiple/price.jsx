import React from "react";

class Price extends React.Component {
  render() {
    return (
      <section className="price-section section-gap">
        <div className="container">
          <div className="row justify-content-center section-title-wrap">
            <div className="col-lg-12">
              <div className="title-img">
                <img src="/img/title-icon.png" alt="" />
              </div>
              <h1>Simplistic Pricing helps to choose from</h1>
              <p>
                The first is a non technical method which requires the use of
                adware removal software. Download free adware and spyware
                removal software and use advanced tools getting infected.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="single-price2">
                <div className="price-top aquablue-bg relative">
                  <div className="overlay overlay-bg" />
                  <h4 className="relative">Free Lifetime</h4>
                  <p className="pt-10 relative">Small business holders</p>
                  <h1 className="pt-40 relative">£0.00</h1>
                </div>
                <div className="price-bottom">
                  <ul className="pack-list">
                    <li>02 Users permitted</li>
                    <li>Unlimited Styles for interface</li>
                    <li>New Update Available</li>
                  </ul>
                  <a href="/index" className="genric-btn2 mt-30">
                    signup for free
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-price2">
                <div className="price-top aquablue-bg relative">
                  <div className="overlay overlay-bg" />
                  <h4 className="relative">Standard</h4>
                  <p className="pt-10 relative">Medium business holders</p>
                  <h1 className="pt-40 relative">£49.00</h1>
                </div>
                <div className="price-bottom">
                  <ul className="pack-list">
                    <li>05 Users permitted</li>
                    <li>Unlimited Styles for interface</li>
                    <li>New Update Available</li>
                  </ul>
                  <a href="/index" className="genric-btn2 mt-30">
                    signup for free
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-price2">
                <div className="price-top aquablue-bg relative">
                  <div className="overlay overlay-bg" />
                  <h4 className="relative">Essential</h4>
                  <p className="pt-10 relative">Large business holders</p>
                  <h1 className="pt-40 relative">£99.00</h1>
                </div>
                <div className="price-bottom">
                  <ul className="pack-list">
                    <li>Unlimited Users permitted</li>
                    <li>Unlimited Styles for interface</li>
                    <li>New Update Available</li>
                  </ul>
                  <a href="/index" className="genric-btn2 mt-30">
                    signup for free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Price;
