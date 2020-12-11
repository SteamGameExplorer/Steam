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
                <br /> Who want to give you 
                <br /> The best game experience
              </h1>
              <p className="pt-20 pb-20">
              Our platform is a web app that allows users to browse the games 
              on Steam according to their categories, tag, and publish year, etc. 
              to help them get known more about the trend and the most popular 
              games in different decades and quickly find the games that they want. 
              Moreover, we would give some personal recommendations according to their favors. 
              Of course, we would also give them some inventory based on different conditions.

              </p>
              <a href="/index" className="genric-btn2">
                Browse Our project demo video
              </a>
            </div>
            <div className="col-lg-6 text-center">
              <img className="img-fluid" src="/img/steam3.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
