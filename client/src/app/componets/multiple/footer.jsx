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
                  This is a course work for CIS 550 at UPENN. Our team are trying to build a website 
                  to helper our users to quickly find a game according to different tags, categories, as well as their favors.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="single-footer-widget">
                <h4>Team Member</h4>
                <ul className="menu-list">
                  <li>
                    <Link to={"/"}>Fan Yi</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Ruizi Zhang</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Jinghan Gu</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Liang Chen</Link>
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
                  You can trust us. we only send latest trending games on Steam.
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
                        placeholder="Your email address"
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
              Copyright © 2020 All rights reserved to &nbsp;
              <a href="https://github.com/SteamGameExplorer">
                <strong>Team 27</strong>
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
