import React from "react";
import HeaderBlogList from "../../componets/blog/header/header_blog_list";
import HeroBlogListPage from "./hero_blog_list_page";
import Footer from "../../componets/multiple/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye, faCommentDots } from "@fortawesome/free-solid-svg-icons";
//import ReactPaginate from 'react-paginate';
import axios from 'axios'
import { Link } from "react-router-dom";

class BlogListPage extends React.Component {


  constructor(props) {
    super(props);
    this.state= {
      posts: [],
    }
  }

  componentDidMount() {
    document.body.classList.add('version-blog');
    document.body.classList.add('parent-active');

    axios.get('http://localhost:8081/popular').then(res => {

      this.setState({
        posts: res.data

      });


    });
  }

  componentWillUnmount() {
    document.body.classList.remove('version-blog');
    document.body.classList.remove('parent-active');
  }

  render() {

    const { posts } = this.state;

    return (
      <>
        
        <HeaderBlogList headerId={`header7`}/>
        <HeroBlogListPage />
        
        <section className="blog-post-list section-gap">
          <div className="container">
            <div className="row">

            {posts.map((post, i) => (
              <div key={post.id} className="col-lg-12">
               <div className="single-card card" style={{ border: 'none'}}>


               <div className="row">
                    <div className="col-lg-4">
                      <img
                        className="card-top-img"
                        src={post.header}
                        alt={post.release_year}
                      />
                 
                    </div>
                    <div className="col-lg-8">
                      <div className="card-body">
                        <div>
                          <Link to="/blog/details">
                            <h4 className="card-title">
                            {post.name}
                            </h4>
                          </Link>
                          <p>
                          { post.description }
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-lg-5">
                            <p className="mt-20">
                              Publisher:
                              <br />
                              <span className="author">
                                <a href="/index">{ post.company } </a> On {post.release_year}
                              </span>
                         
                            </p>
                          </div>
                          <div className="col-lg-7">
                            <div className="mt-40 m-0-xs">


                            <a href="/index" className="card-link">
                              <FontAwesomeIcon className="mr-1" icon={ faHeart } />
                              { post.rating }
                            </a>
                            <a href="/index" className="card-link">
                              <FontAwesomeIcon className="mr-1" icon={ faEye } />
                              { post.total_rating } Views
                            </a>
                            <a href="/index" className="card-link">
                              <FontAwesomeIcon className="mr-1" icon={ faCommentDots } />
                              { post.platforms }
                            </a>


                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
               </div>
             </div>
             
            ))}

            
            </div>
          </div>
          
          
        </section>
        
        
        <Footer />
        
      </>
    );
  }
}

export default BlogListPage;
