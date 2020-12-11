import React from "react";

class About extends React.Component {
  render() {
    return (
      <section className="about-section section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 about-left">
              <h1>
                We are the one
                <br /> Who place idea on table
              </h1>
              <p className="pt-20 pb-20">
                The first is a non technical method which requires the use of
                adware removal software. Download free adware and spyware
                removal software and use advanced tools to help prevent getting
                infected. Spyware scan review is a free service for anyone
                interested in downloading spyware/adware removal software. Our
                adware remover is the most trusted.
              </p>
              <a href="/index" className="genric-btn2">
                Browse free demo
              </a>
            </div>
            <div className="col-lg-6 text-center">
              <img className="img-fluid" src="/img/about-img.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
