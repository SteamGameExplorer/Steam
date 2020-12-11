import React from "react";

class Social extends React.Component {
  render() {
    return (
      <section className="social-section section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 social-left">
              <h1>Manage Social Network with Our Managing Toolkit</h1>
              <p>
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
            <div className="col-lg-6 text-center social-right">
              <img className="img-fluid" src="/img/social-img.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Social;
