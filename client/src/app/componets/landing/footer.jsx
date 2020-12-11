import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h4>About Us</h4>
                <p>
                  About 64% of all on-line teens say that do things online that
                  they wouldn’t want their parents to know about. 11% of all
                  adult internet user visit websites.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="single-footer-widget">
                <h4>Resources</h4>
                <ul className="menu-list">
                  <li>
                    <a href="/index">Guides</a>
                  </li>
                  <li>
                    <a href="/index">Research</a>
                  </li>
                  <li>
                    <a href="/index">Experts</a>
                  </li>
                  <li>
                    <a href="/index">Agencies</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="single-footer-widget">
                <h4>Features</h4>
                <ul className="menu-list">
                  <li>
                    <a href="/index">Jobs</a>
                  </li>
                  <li>
                    <a href="/index">Brand Assets</a>
                  </li>
                  <li>
                    <a href="/index">Investor Relations</a>
                  </li>
                  <li>
                    <a href="terms-condition.html">Terms of Service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="single-footer-widget">
                <h4>Follow Us</h4>
                <ul className="social-icons">
                  <li>
                    <a href="/index">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="/index">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/index">
                      <i className="fab fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="/index">
                      <i className="fab fa-behance" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h4>Newsletter</h4>
                <p>
                  You can trust us. we only send promo offers, not a single
                  spam.
                </p>
                <div
                  className="d-flex flex-row newsletter-form"
                  id="mc_embed_signup"
                >
                  <form
                    className="navbar-form"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                    method="get"
                  >
                    <div className="d-flex form-wrap">
                      <input
                        className="form-control"
                        name="EMAIL"
                        placeholder="Your email address"
                        type="email"
                      />
                      <button className="submit-btn">
                        <span className="lnr lnr-arrow-right" />
                      </button>
                    </div>
                    <div className="info mt-20" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom row justify-content-center mt-70">
            <p className="footer-text m-0 col-lg-6 col-md-12">
              Copyright © 2019 All rights reserved to
              <a href="https://themeforest.net/user/codethemes/portfolio">
                Code Themes
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
