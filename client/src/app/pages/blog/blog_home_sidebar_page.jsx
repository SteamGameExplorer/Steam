import React from "react";
import HeaderBlogHomeSidebar from "../../componets/blog/header/header_blog_home_sidebar";
import HeroBlogHomeSidebar from "../../componets/blog/hero/hero_blog_home_sidebar";
import Footer from "../../componets/multiple/footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye, faCommentDots, faSearch } from "@fortawesome/free-solid-svg-icons";
//import ReactPaginate from 'react-paginate';
import axios from 'axios'
import { faFacebook, faTwitter, faGooglePlusSquare, faLinkedin, faYoutube, faInstagram, faBehanceSquare, faDribbbleSquare } from "@fortawesome/free-brands-svg-icons";


class BlogHomeSidebarPage extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      posts: [],
    }
  }

  componentDidMount() {
    document.body.classList.add('parent-active');
    document.body.classList.add('version-blog');


    axios.get('/api/blog/index.json').then(response => {

      this.setState({
        posts: response.data.data
      });

    });

  }

  componentWillUnmount() {
    document.body.classList.remove('parent-active');
    document.body.classList.remove('version-blog');
  }

  render() {

    const { posts } = this.state;

    return (
      <>
        <HeaderBlogHomeSidebar headerId="header7" />
        <HeroBlogHomeSidebar />
        
        <section className="blog-post section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">

                  {posts.map(post => (
                    <div key={post.id} className="col-lg-6">
                    <div className="single-card card">
                      <img
                        className="card-top-img"
                        src={post.thumbnail}
                        alt={post.title}
                      />
                      <div className="card-body">


                        <Link to="#category" className="genric-btn card-btn">
                          Art & Fantacy
                        </Link>
                        <p className="mt-25 post-info">
                          <span className="author">
                            <Link to="#author" className="mr-1">{ post.author }</Link>
                          </span>
                          on { post.date }
                        </p>
                        <div className="mb-15">
                          <a href="/index" className="card-link">
                            <FontAwesomeIcon className="mr-1" icon={ faHeart } />
                            { post.like }
                          </a>
                          <a href="/index" className="card-link">
                            <FontAwesomeIcon className="mr-1" icon={ faEye } />
                            { post.viewCounter } Views
                          </a>
                          <a href="/index" className="card-link">
                            <FontAwesomeIcon className="mr-1" icon={ faCommentDots } />
                            { post.commentCounter }
                          </a>
                        </div>
                        <Link to="/blog/details">
                          <h4 className="card-title mb-15">
                          { post.title }
                          </h4>
                        </Link>
                        <p>
                        { post.description }
                        </p>
                      </div>
                    </div>
                  </div>
                  ))}

                </div>
                
                <nav aria-label="Page navigation" className="mt-0 mt-lg-3">
                  <ul
                    className="pagination flex justify-content-center"
                    id="blog-post-sidebar"
                  >
                    <li className="page-item">
                      <a className="page-link" href="/index" aria-label="Previous">
                        <span className="fa fa-long-arrow-alt=-left" />
                      </a>
                    </li>
                    <li className="page-item active">
                      <a id="page-link1" className="page-link" href="/index">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a id="page-link2" className="page-link" href="/index">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a id="page-link3" className="page-link" href="/index">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a id="page-link4" className="page-link" href="/index">
                        04
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/index" aria-label="Next">
                        <span className="fa fa-long-arrow-alt=-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
                
              </div>
              
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
            
            </div>
          </div>
        </section>
        
        
        <Footer />

        
      </>
    );
  }
}

export default BlogHomeSidebarPage;
