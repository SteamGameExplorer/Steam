import React from "react";
import Header from "../../componets/multiple/header/header";
import PageTop from "../../componets/multiple/page_top";
import Footer from "../../componets/multiple/footer";

import Logo1 from "../../../assets/img/logo.png";
import Logo2 from "../../../assets/img/logo.png";

class FaqsPage extends React.Component {

  componentDidMount() {
    document.body.classList.add('');
  }

  componentWillUnmount() {
    document.body.classList.remove('');
  }

  render() {
    return (
      <>
        
        <Header headerId={`header`}/>
        
        
        <PageTop pageTitle="Page"></PageTop>
        
        
        <section className="faq-section section-gap">
          <div className="container">
            <div className="text-center content-wrap">
              <h2 className="mb-20">Get to Know Simple Answers</h2>
              <p className="details">
                The first is a non technical method which requires the use of
                adware removal software. Download free adware and spyware
                removal software and use advanced tools getting infected.
              </p>
            </div>
            <div className="faq-tabs mt-80">
              
              <ul
                className="nav nav-pills justify-content-center"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="pill"
                    href="#general-issue"
                  >
                    general issue
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link genric-btn"
                    data-toggle="pill"
                    href="#support-issue"
                  >
                    support issue
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link genric-btn"
                    data-toggle="pill"
                    href="#refund-issue"
                  >
                    refund issue
                  </a>
                </li>
              </ul>
              
              <div className="tab-content">
                
                <div id="general-issue" className="tab-pane active">
                  <br />
                  <div id="accordion1">
                    <div className="card">
                      <div className="card-header" id="generalHeadingOne">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#generalCollapseOne"
                          aria-expanded="true"
                          aria-controls="generalCollapseOne"
                        >
                          <i className="fa" aria-hidden="true" />
                          Dude You Re Getting A Telescope
                        </button>
                      </div>
                      <div
                        id="generalCollapseOne"
                        className="collapse show"
                        aria-labelledby="generalHeadingOne"
                        data-parent="#accordion1"
                      >
                        <div className="card-body">
                          Speaking comes to most people as naturally as
                          breathing. On many occasions our words are uttered
                          without conscious thought; in fact we rarely stop and
                          think about what we are saying. Thousands of words
                          pour out of our mouths each day as our thoughts.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="generalHeadingTwo">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#generalCollapseTwo"
                          aria-expanded="false"
                          aria-controls="generalCollapseTwo"
                        >
                          <i className="fa" aria-hidden="true" />
                          The Basics Of Buying A Telescope
                        </button>
                      </div>
                      <div
                        id="generalCollapseTwo"
                        className="collapse"
                        aria-labelledby="generalHeadingTwo"
                        data-parent="#accordion1"
                      >
                        <div className="card-body">
                          Speaking comes to most people as naturally as
                          breathing. On many occasions our words are uttered
                          without conscious thought; in fact we rarely stop and
                          think about what we are saying. Thousands of words
                          pour out of our mouths each day as our thoughts.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="generalHeadingThree">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#generalCollapseThree"
                          aria-expanded="false"
                          aria-controls="generalCollapseThree"
                        >
                          <i className="fa" aria-hidden="true" />
                          Astronomy Binoculars A Great alt=""ernative
                        </button>
                      </div>
                      <div
                        id="generalCollapseThree"
                        className="collapse"
                        aria-labelledby="generalHeadingThree"
                        data-parent="#accordion1"
                      >
                        <div className="card-body">
                          Speaking comes to most people as naturally as
                          breathing. On many occasions our words are uttered
                          without conscious thought; in fact we rarely stop and
                          think about what we are saying. Thousands of words
                          pour out of our mouths each day as our thoughts.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="generalHeadingFour">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#generalCollaspeFour"
                          aria-expanded="false"
                          aria-controls="generalCollaspeFour"
                        >
                          <i className="fa" aria-hidden="true" />
                          Do Your Self Realizations Quickly Fade
                        </button>
                      </div>
                      <div
                        id="generalCollaspeFour"
                        className="collapse"
                        aria-labelledby="generalHeadingFour"
                        data-parent="#accordion1"
                      >
                        <div className="card-body">
                          Speaking comes to most people as naturally as
                          breathing. On many occasions our words are uttered
                          without conscious thought; in fact we rarely stop and
                          think about what we are saying. Thousands of words
                          pour out of our mouths each day as our thoughts.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="generalHeadingFive">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#generalCollaspeFive"
                          aria-expanded="false"
                          aria-controls="generalCollaspeFive"
                        >
                          <i className="fa" aria-hidden="true" />
                          Success Steps For Your Personal Or Business Life
                        </button>
                      </div>
                      <div
                        id="generalCollaspeFive"
                        className="collapse"
                        aria-labelledby="generalHeadingFive"
                        data-parent="#accordion1"
                      >
                        <div className="card-body">
                          Speaking comes to most people as naturally as
                          breathing. On many occasions our words are uttered
                          without conscious thought; in fact we rarely stop and
                          think about what we are saying. Thousands of words
                          pour out of our mouths each day as our thoughts.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                
                <div id="support-issue" className="tab-pane fade">
                  <br />
                  <div id="accordion2">
                    <div className="card">
                      <div className="card-header" id="supportHeadingOne">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#supportCollapseOne"
                          aria-expanded="true"
                          aria-controls="supportCollapseOne"
                        >
                          <i className="fa" aria-hidden="true" />
                          Dude You Re Getting A Telescope
                        </button>
                      </div>
                      <div
                        id="supportCollapseOne"
                        className="collapse show"
                        aria-labelledby="supportHeadingOne"
                        data-parent="#accordion2"
                      >
                        <div className="card-body">
                          Speaking comes to most people as naturally as
                          breathing. On many occasions our words are uttered
                          without conscious thought; in fact we rarely stop and
                          think about what we are saying. Thousands of words
                          pour out of our mouths each day as our thoughts.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="supportHeadingTwo">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#supportCollapseTwo"
                          aria-expanded="false"
                          aria-controls="supportCollapseTwo"
                        >
                          <i className="fa" aria-hidden="true" />
                          The Basics Of Buying A Telescope
                        </button>
                      </div>
                      <div
                        id="supportCollapseTwo"
                        className="collapse"
                        aria-labelledby="supportHeadingTwo"
                        data-parent="#accordion2"
                      >
                        <div className="card-body">
                          Speaking comes to most people as naturally as
                          breathing. On many occasions our words are uttered
                          without conscious thought; in fact we rarely stop and
                          think about what we are saying. Thousands of words
                          pour out of our mouths each day as our thoughts.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="supportHeadingThree">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#supportCollapseThree"
                          aria-expanded="false"
                          aria-controls="supportCollapseThree"
                        >
                          <i className="fa" aria-hidden="true" />
                          Astronomy Binoculars A Great alt=""ernative
                        </button>
                      </div>
                      <div
                        id="supportCollapseThree"
                        className="collapse"
                        aria-labelledby="supportHeadingThree"
                        data-parent="#accordion2"
                      >
                        <div className="card-body">
                          Speaking comes to most people as naturally as
                          breathing. On many occasions our words are uttered
                          without conscious thought; in fact we rarely stop and
                          think about what we are saying. Thousands of words
                          pour out of our mouths each day as our thoughts.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="supportHeadingFour">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#supportCollaspeFour"
                          aria-expanded="false"
                          aria-controls="supportCollaspeFour"
                        >
                          <i className="fa" aria-hidden="true" />
                          Astronomy Binoculars A Great alt=""ernative
                        </button>
                      </div>
                      <div
                        id="supportCollaspeFour"
                        className="collapse"
                        aria-labelledby="supportHeadingFour"
                        data-parent="#accordion2"
                      >
                        <div className="card-body">
                          Speaking comes to most people as naturally as
                          breathing. On many occasions our words are uttered
                          without conscious thought; in fact we rarely stop and
                          think about what we are saying. Thousands of words
                          pour out of our mouths each day as our thoughts.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="supportHeadingFive">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#supportCollaspeFive"
                          aria-expanded="false"
                          aria-controls="supportCollaspeFive"
                        >
                          <i className="fa" aria-hidden="true" />
                          Success Steps For Your Personal Or Business Life
                        </button>
                      </div>
                      <div
                        id="supportCollaspeFive"
                        className="collapse"
                        aria-labelledby="supportHeadingFive"
                        data-parent="#accordion2"
                      >
                        <div className="card-body">
                          Speaking comes to most people as naturally as
                          breathing. On many occasions our words are uttered
                          without conscious thought; in fact we rarely stop and
                          think about what we are saying. Thousands of words
                          pour out of our mouths each day as our thoughts.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                
                <div id="refund-issue" className="tab-pane fade">
                  <br />
                  <div id="accordion3">
                    <div className="card">
                      <div className="card-header" id="refundHeadingOne">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#refundCollapseOne"
                          aria-expanded="true"
                          aria-controls="refundCollapseOne"
                        >
                          <i className="fa" aria-hidden="true" />
                          Dude You Re Getting A Telescope
                        </button>
                      </div>
                      <div
                        id="refundCollapseOne"
                        className="collapse show"
                        aria-labelledby="refundHeadingOne"
                        data-parent="#accordion3"
                      >
                        <div className="card-body">
                          Speaking comes to most people as naturally as
                          breathing. On many occasions our words are uttered
                          without conscious thought; in fact we rarely stop and
                          think about what we are saying. Thousands of words
                          pour out of our mouths each day as our thoughts.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="refundHeadingTwo">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#refundCollapseTwo"
                          aria-expanded="false"
                          aria-controls="refundCollapseTwo"
                        >
                          <i className="fa" aria-hidden="true" />
                          The Basics Of Buying A Telescope
                        </button>
                      </div>
                      <div
                        id="refundCollapseTwo"
                        className="collapse"
                        aria-labelledby="refundHeadingTwo"
                        data-parent="#accordion3"
                      >
                        <div className="card-body">
                          Speaking comes to most people as naturally as
                          breathing. On many occasions our words are uttered
                          without conscious thought; in fact we rarely stop and
                          think about what we are saying. Thousands of words
                          pour out of our mouths each day as our thoughts.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="refundHeadingThree">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#refundCollapseThree"
                          aria-expanded="false"
                          aria-controls="refundCollapseThree"
                        >
                          <i className="fa" aria-hidden="true" />
                          Astronomy Binoculars A Great alt=""ernative
                        </button>
                      </div>
                      <div
                        id="refundCollapseThree"
                        className="collapse"
                        aria-labelledby="refundHeadingThree"
                        data-parent="#accordion3"
                      >
                        <div className="card-body">
                          Speaking comes to most people as naturally as
                          breathing. On many occasions our words are uttered
                          without conscious thought; in fact we rarely stop and
                          think about what we are saying. Thousands of words
                          pour out of our mouths each day as our thoughts.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="refundHeadingFour">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#refundCollaspeFour"
                          aria-expanded="false"
                          aria-controls="refundCollaspeFour"
                        >
                          <i className="fa" aria-hidden="true" />
                          Astronomy Binoculars A Great alt=""ernative
                        </button>
                      </div>
                      <div
                        id="refundCollaspeFour"
                        className="collapse"
                        aria-labelledby="refundHeadingFour"
                        data-parent="#accordion3"
                      >
                        <div className="card-body">
                          Speaking comes to most people as naturally as
                          breathing. On many occasions our words are uttered
                          without conscious thought; in fact we rarely stop and
                          think about what we are saying. Thousands of words
                          pour out of our mouths each day as our thoughts.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="refundHeadingFive">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#refundCollaspeFive"
                          aria-expanded="false"
                          aria-controls="refundCollaspeFive"
                        >
                          <i className="fa" aria-hidden="true" />
                          Success Steps For Your Personal Or Business Life
                        </button>
                      </div>
                      <div
                        id="refundCollaspeFive"
                        className="collapse"
                        aria-labelledby="refundHeadingFive"
                        data-parent="#accordion3"
                      >
                        <div className="card-body">
                          Speaking comes to most people as naturally as
                          breathing. On many occasions our words are uttered
                          without conscious thought; in fact we rarely stop and
                          think about what we are saying. Thousands of words
                          pour out of our mouths each day as our thoughts.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        
        
        <Footer></Footer>
        
      </>
    );
  }
}

export default FaqsPage;
