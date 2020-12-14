import React from "react";
import HeaderBlogDetailsSideBar from "../../componets/blog/header/header_blog_details_side_bar";
import HeroBlogDetailsSideBar from "../../componets/blog/hero/hero_blog_details_side_bar";
import Footer from "../../componets/multiple/footer";
import PortfolioGamePost from "../../componets/posts/PortfolioGamePost";

class MyList extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      posts : [],
      currentPage : 1,
      numPerPage : 6,
      user: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.body.classList.add('parent-active');
    document.body.classList.add('version-blog');

    const user = localStorage.getItem('email');
    if(user) {
      this.setState({
        user: user
      });
    }

    fetch("http://localhost:8081/favorite/" + user, {
      method: 'GET' // The type of HTTP request.
    }).then(res => res.json())
      .then(postsList => {
        if(!postsList) return;
        const posts = postsList.map(postObj => (
          <PortfolioGamePost postObj={postObj} like={true}/>
        ));

        this.setState({
          posts: posts
        });

      });
  }

  componentWillUnmount() {
    document.body.classList.remove('parent-active');
    document.body.classList.remove('version-blog');
  }

  //navigate to the current page.
  handleClick(e) {
    this.setState({
      currentPage : Number(e.target.id)
    });
  }

  render() {
    const {posts, currentPage, numPerPage} = this.state;

    const indexOfLast = currentPage * numPerPage;
    const indexOfFirst = indexOfLast - numPerPage;
    const currentPosts = posts.slice(indexOfFirst, indexOfLast);

     // Logic for displaying page numbers
     const pageNumbers = [];
     for (let i = 1; i <= Math.ceil(posts.length / numPerPage); i++) {
       pageNumbers.push(i);
     }

    // Render page numbers
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li className="page-item" key={number} id={number} onClick={this.handleClick}>
          {/* eslint-disable-next-line */}
          <a id={number} className="page-link">
            {number}
          </a>
        </li>
      );
    });

    return (
      <>
        
        <HeaderBlogDetailsSideBar headerId={`header7`}/>
        <HeroBlogDetailsSideBar />
        
        <section className="blog-post section-gap">
          <div className="container">
            <p className="wood-text">My Favoriate Game List</p>
            <div className="row">
              {currentPosts}            
            </div>
            
            <nav aria-label="Page navigation">
              <ul
                className="pagination flex justify-content-center"
                id="blog-post-sidebar"
              >
                {renderPageNumbers}
              </ul>
            </nav>
            
          </div>
        </section>
        
        <Footer></Footer>
        
      </>
    );
  }
}

export default MyList;
