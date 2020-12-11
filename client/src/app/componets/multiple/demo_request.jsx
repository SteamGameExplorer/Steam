import React from "react";

class DemoRequest extends React.Component {
  render() {
    return (
      <section className="demo-request-area section-gap">
        <div className="container">
          <div className="row justify-content-center section-title-wrap">
            <div className="col-lg-12">
              <h1>Request a Free Demo</h1>
              <p>
                The first is a non technical method which requires the use of
                adware removal software. Download free adware and spyware
                removal software and use advanced tools getting infected.
              </p>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 req-demo-left">
              <div className="active-feature-carusel">
                <img className="img-fluid" src="/img/carusel/c4.png" alt="" />
                <img className="img-fluid" src="/img/carusel/c5.png" alt="" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6 req-demo-right">
              <form className="form-area contact-form text-right">
                <input
                  name="name"
                  autoComplete="name"
                  placeholder="Enter your name"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter your name'"
                  className="common-input mb-20 form-control"
                  required
                  type="text"
                />
                <input
                  name="email"
                  autoComplete="email"
                  placeholder="Enter email address"
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter email address'"
                  className="common-input mb-20 form-control"
                  required
                  type="email"
                />
                <input
                  name="phone"
                  autoComplete="phone"
                  placeholder="Phone Number"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Phone Number'"
                  className="common-input mb-20 form-control"
                  required
                  type="text"
                />
                <input
                  name="company-name"
                  autoComplete="company-name"
                  placeholder="Company Name"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Company Name'"
                  className="common-input mb-20 form-control"
                  required
                  type="text"
                />
                <button className="genric-btn gradient-bg2 d-block mt-30 mr-0 ml-auto">
                  Schedule Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DemoRequest;
