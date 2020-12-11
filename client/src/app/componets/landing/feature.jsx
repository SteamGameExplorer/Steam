import React from "react";

class Feature extends React.Component {
  render() {
    return (
      <section className="feature-section pb-120 pt-90">
        <div className="container">
          <div className="row feature-left-wrapr">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature aquablue-bg">
                <div className="icon">
                  <span>
                    <img
                      width={39}
                      height={40}
                      src="/img/feature/i1.png"
                      className="attachment-image_icon_40x40 size-image_icon_40x40"
                      alt=""
                    />
                  </span>
                </div>
                <div className="desc">
                  <h4>Collaboration</h4>
                  <p className="mb-0">
                    Some days a motivational quote can provide a quick
                    pick-me-up for employees and even management.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature aquablue-bg">
                <div className="icon">
                  <span>
                    <img
                      width={40}
                      height={40}
                      src="/img/feature/i3.png"
                      className="attachment-image_icon_40x40 size-image_icon_40x40"
                      alt=""
                    />
                  </span>
                </div>
                <div className="desc">
                  <h4>Full of features</h4>
                  <p className="mb-0">
                    Some days a motivational quote can provide a quick
                    pick-me-up for employees and even management.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature aquablue-bg">
                <div className="icon">
                  <span>
                    <img
                      width={40}
                      height={36}
                      src="/img/feature/i4.png"
                      className="attachment-image_icon_40x40 size-image_icon_40x40"
                      alt=""
                    />
                  </span>
                </div>
                <div className="desc">
                  <h4>Global Framework</h4>
                  <p className="mb-0">
                    Some days a motivational quote can provide a quick
                    pick-me-up for employees and even management.
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

export default Feature;
