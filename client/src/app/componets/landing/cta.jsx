import React from "react";

class Cta extends React.Component {
  render() {
    return (
      <section className="cta-section gradient-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="text-white mb-5">
                Fallen in Love with <br />
                our features? Get a free trial for 14 days!
              </h1>
              <div className="cta-btn">
                <a href="/index" className="ct-btn1 mr-sm-3 mb-sm-0 mb-3">
                  Start free trial
                </a>
                <a href="/index" className="ct-btn2 active">
                  Signup
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cta;
