import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faBehanceSquare, faDribbbleSquare, faGooglePlusSquare, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

class BlogSidebar extends React.Component {
    
    render() { 
        return (
            <>
            <div className="col-lg-4">
            <div className="side-bar">
              <div className="search-input">
                <form className="navbar-form" action="/api/" method="get">
                  <div className="d-flex form-wrap">
                    <input
                      className="form-control"
                      name="SEARCH"
                      placeholder="Search Post"
                    />
                    <button className="search-btn">
                      <FontAwesomeIcon className="mr-1" icon={faSearch} />
                    </button>
                  </div>
                  <div className="info mt-20" />
                </form>
              </div>
              <div className="mt-40 text-center about-athor">
                <img  src="/img/blog/about-me.jpg" alt="" />
                <h4 className="mt-30">Charlie Barber</h4>
                <h5 className="mt-10 mb-25">Senior blog writer</h5>
                <p>
                  Boot camps have its supporters sdetractors. Some people do
                  not understand why you should have to spend money on boot
                  camp whenyou can get.
                </p>
              </div>
              
              <div className="recent-news mt-45">
                <h3 className="blog-title">Recent News</h3>
                <div className="news-box mb-20">
                  <div className="row">
                    <div className="col-lg-4 col-md-3">
                      <img
                        className="width-100"
                        src="/img/blog/news1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-8 col-md-6">
                      <div className="news-info">
                        <a href="/index">
                          <h4 className="news-head text-capitalize">
                            space the final frontier the final space
                          </h4>
                        </a>
                        <p className="mt-10 mb-0">02 hour ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news-box mb-20">
                  <div className="row">
                    <div className="col-lg-4 col-md-3">
                      <img
                        className="width-100"
                        src="/img/blog/news2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-8 col-md-6">
                      <div className="news-info">
                        <a href="/index">
                          <h4 className="news-head text-capitalize">
                            space the final frontier the final space
                          </h4>
                        </a>
                        <p className="mt-10 mb-0">02 hour ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news-box mb-20">
                  <div className="row">
                    <div className="col-lg-4 col-md-3">
                      <img
                        className="width-100"
                        src="/img/blog/news3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-8 col-md-6">
                      <div className="news-info">
                        <a href="/index">
                          <h4 className="news-head text-capitalize">
                            space the final frontier the final space
                          </h4>
                        </a>
                        <p className="mt-10 mb-0">02 hour ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              
              <div className="post-cat mt-45">
                <h3 className="blog-title">Post Caterories</h3>
                <div className="cat-box">
                  <a className="cat-link" href="/index">
                    Art &p; Fantacy (<span>37</span>)
                  </a>
                </div>
                <div className="cat-box">
                  <a className="cat-link" href="/index">
                    Technology (<span>37</span>)
                  </a>
                </div>
                <div className="cat-box">
                  <a className="cat-link" href="/index">
                    Lifestyle (<span>37</span>)
                  </a>
                </div>
                <div className="cat-box">
                  <a className="cat-link" href="/index">
                    Food & Travel (<span>37</span>)
                  </a>
                </div>
                <div className="cat-box">
                  <a className="cat-link" href="/index">
                    Hostory & Research (<span>37</span>)
                  </a>
                </div>
              </div>
              
              
              <div className="add d-flex align-items-center justify-content-center mt-40 mb-40">
                <h4 className="add-contnt">
                  300 × 250 PX
                  <br /> AD GOES HERE
                </h4>
              </div>
              
              
              <div className="social-profile">
                <h3 className="blog-title">Social Profiles</h3>
                <button className="genric-btn mb-10">
                  <FontAwesomeIcon className="mr-1" icon={faFacebook} />
                  Facebook
                </button>
                <button className="genric-btn mb-10">
                  <FontAwesomeIcon className="mr-1" icon={faTwitter} />

                  twitter
                </button>
                <button className="genric-btn mb-10">
                  <FontAwesomeIcon className="mr-1" icon={faGooglePlusSquare} />

                  google plus
                </button>
                <button className="genric-btn mb-10">
                  <FontAwesomeIcon className="mr-1" icon={faBehanceSquare} />

                  behance
                </button>
                <button className="genric-btn mb-10">
                  <FontAwesomeIcon className="mr-1" icon={faDribbbleSquare} />

                  dribble
                </button>
                <button className="genric-btn mb-10">
                  <FontAwesomeIcon className="mr-1" icon={faLinkedin} />

                  linkdin
                </button>
                <button className="genric-btn">
                  <FontAwesomeIcon className="mr-1" icon={faInstagram} />

                  instagram
                </button>
                <button className="genric-btn">
                  <FontAwesomeIcon className="mr-1" icon={faYoutube} />

                  youtube
                </button>
              </div>
              
            </div>
            
          </div>
        
            </>
            
        );
    }
}
 
export default BlogSidebar;