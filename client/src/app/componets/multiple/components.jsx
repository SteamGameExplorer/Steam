import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {faBehance} from "@fortawesome/free-brands-svg-icons";
import {faDribbble} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

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
                    <Link to={"/"}>Guides</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Research</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Experts</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Agencies</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="single-footer-widget">
                <h4>Features</h4>
                <ul className="menu-list">
                  <li>
                    <Link to={"/"}>Jobs</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Brand Assets</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Investor Relations</Link>
                  </li>
                  <li>
                    <Link to={"terms-condition"}>Terms of Service</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="single-footer-widget">
                <h4>Follow Us</h4>
                <ul className="social-icons">
                  <li>
                    <a href="https://facebook.com" >
                      <FontAwesomeIcon icon={ faFacebookF } />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com">
                      <FontAwesomeIcon icon={ faTwitter } />
                    </a>
                  </li>
                  <li>
                    <a href="https://dribbble.com" >
                      <FontAwesomeIcon icon={ faDribbble } />
                    </a>
                  </li>
                  <li>
                    <a href="https://behance.com" >
                      <FontAwesomeIcon icon={ faBehance } />
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
                <div className="d-flex flex-row newsletter-form"
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
                        autoComplete="email"
                        placeholder="Your email address"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Your email address'"
                        required
                        type="email"
                      />
                      <button className="submit-btn">
                        <FontAwesomeIcon icon={ faPaperPlane } />
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
              <a href="https://themeforest.net/user/becore/portfolio">
                &nbsp;Becore
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
