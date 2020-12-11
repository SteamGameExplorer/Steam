import React from "react";
import HeaderBlogDetails from "../../componets/blog/header/header_blog_details";
import HeroBlogDetails from "../../componets/blog/hero/hero_blog_details";
import Footer from "../../componets/multiple/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class BlogDetailsPage extends React.Component {

  componentDidMount() {
    document.body.classList.add('version-blog');
    document.body.classList.add('parent-active');
  }

  componentWillUnmount() {
    document.body.classList.remove('parent-active');
    document.body.classList.remove('version-blog');
  }

  render() {
    return (
      <>
        <HeaderBlogDetails headerId={`header7`}/>
        <HeroBlogDetails />
        <section className="blog-post section-gap">
          <div className="details-body">
            <div className="container">
              <h2 className="head">We Made our Software Errorless</h2>
              <p>
                The first is a non technical method which requires the use of
                adware removal software. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                The first is a non technical method which requires the use of
                adware removal software. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
              <blockquote className="blog-quotes">
                “The first is a non technical method which requires the use of
                adware removal software. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.”
              </blockquote>
              <div className="mb-30 text-center">
                <img
                  src="/img/blog/blog-details-bg2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <p>
                The first is a non technical method which requires the use of
                adware removal software. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className="mt-40 mb-20">
                <hr />
              </div>
              <div className="post-links">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="prev-post d-flex relative align-items-center">
                    <div>
                      <Link className="post-link" to="/blog/details" style={{ cursor: "pointer"}}>
                        <FontAwesomeIcon className="mr-1" icon={faArrowLeft} />
                      </Link>
                    </div>
                    <div className="ml-3 relative">
                      <p className="mb-0">Next post</p>
                    </div>
                  </div>
                  <div className="next-post d-flex relative align-items-center">
                    <div className="mr-3 relative">
                      <p className="mb-0">Next post</p>
                    </div>
                    <div className>
                      <Link className="post-link" to="/blog/details" style={{ cursor: "pointer"}}>
                        <FontAwesomeIcon className="mr-1" icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-section">
                <h4 className="comment-head">
                  <span>05</span> Comments
                </h4>
                <div className="comment d-flex align-items-start">
                  <div className="comment-img">
                    <img src="/img/blog/comment1.jpg" alt="" />
                  </div>
                  <div>
                    <div className="d-flex align-items-center mb-2">
                      <h5>Emilly Blunt</h5>
                      <div className="comment-time ml-4">
                        December 4, 2018 at 3:12 pm
                      </div>
                    </div>
                    <p>
                      The first is a non technical method which requires the use
                      of adware removal software. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit.
                    </p>
                    <div>
                      <button className="comment-btn">Reply</button>
                    </div>
                  </div>
                </div>
                <div className="comment-reply">
                  <div className="comment-reply-single">
                    <div className="comment d-flex align-items-start">
                      <div className="comment-img">
                        <img src="/img/blog/reply1.jpg" alt="" />
                      </div>
                      <div>
                        <div className="d-flex align-items-center mb-2">
                          <h5>Elsie Cunningham</h5>
                          <div className="comment-time ml-4">
                            December 4, 2018 at 3:12 pm
                          </div>
                        </div>
                        <p>
                          The first is a non technical method which requires the
                          use of adware removal software. Lorem ipsum dolor sit
                          amet, consectetur adipisicing elit.
                        </p>
                        <div>
                          <button className="comment-btn">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment d-flex align-items-start">
                  <div className="comment-img">
                    <img src="/img/blog/comment2.jpg" alt="" />
                  </div>
                  <div>
                    <div className="d-flex align-items-center mb-2">
                      <h5>Maria Luna</h5>
                      <div className="comment-time ml-4">
                        December 4, 2018 at 3:12 pm
                      </div>
                    </div>
                    <p>
                      The first is a non technical method which requires the use
                      of adware removal software. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit.
                    </p>
                    <div>
                      <button className="comment-btn">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post-comment mt-80">
                <h4 className="mb-40">Leave a reply</h4>
                <div className="post-form">
                  <form action="api" method="post">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            autoComplete="name"
                            
                            placeholder="Enter name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            autoComplete="email"
                            
                            placeholder="Enter email address"
                            
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name
                            autoComplete="message"
                            id
                            rows={5}
                            placeholder="Enter messages"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-20">
                      <button type="submit" className="genric-btn">
                        post comment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default BlogDetailsPage;
