import React from "react";
import HeaderBlogHome from "../../componets/blog/header/header_blog_home";
import HeroHeaderBlog from "../../componets/blog/hero/hero_header_blog";
import Footer from "../../componets/multiple/footer";
import PortfolioGamePost from "../../componets/posts/PortfolioGamePost";
import '../../../assets/scss/tag.scss';

class PortfolioPage extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      postsFree : [],
      currentPageFree : 1,
      postsNew : [],
      currentPageNew : 1,
      postsTop : [],
      currentPageTop : 1,
      numPerPage : 3,
      favoriteList: []
    }
    this.handleClickFree = this.handleClickFree.bind(this);
    this.handleClickNew = this.handleClickNew.bind(this);
    this.handleClickTop = this.handleClickTop.bind(this);
  }

  //navigate to the current page.
  handleClickFree(e) {
    this.setState({
      currentPageFree : Number(e.target.id)
    });
  }

  handleClickNew(e) {
    this.setState({
      currentPageNew: Number(e.target.id)
    });
  }

  handleClickTop(e) {
    this.setState({
      currentPageTop: Number(e.target.id)
    });
  }

  componentDidMount() {
    document.body.classList.add('parent-active');
    document.body.classList.add('version-blog');

    const user = localStorage.getItem('email');
    if(user) {
      fetch("http://localhost:8081/favorite/" + user, {
        method: 'GET' // The type of HTTP request.
      }).then(res => res.json())
        .then(postsList => {
        if(!postsList) return;
        const posts = postsList.map(postObj => (
          postObj.game_id
        ));
        console.log(posts);

        this.setState({
          favoriteList: posts
        });

      });
    }

    fetch("http://localhost:8081/free", {
      method: 'GET' // The type of HTTP request.
    }).then(res => res.json())
      .then(postsList => {
        if(!postsList) return;
        const postsFree = postsList.map(postObj => (
          <PortfolioGamePost postObj={postObj} like={this.state.favoriteList.includes(postObj.game_id)}/>
        ));

        this.setState({
          postsFree: postsFree
        });

      });

      fetch("http://localhost:8081/new", {
        method: 'GET' // The type of HTTP request.
      }).then(res => res.json())
        .then(postsList => {
          if(!postsList) return;
          const postsNew = postsList.map(postObj => (
            <PortfolioGamePost postObj={postObj} like={this.state.favoriteList.includes(postObj.game_id)}/>
          ));
  
          this.setState({
            postsNew: postsNew
          });
  
        });

        fetch("http://localhost:8081/top", {
          method: 'GET' // The type of HTTP request.
        }).then(res => res.json())
          .then(postsList => {
            if(!postsList) return;
            const postsTop = postsList.map(postObj => (
              <PortfolioGamePost postObj={postObj} like={this.state.favoriteList.includes(postObj.game_id)}/>
            ));
    
            this.setState({
              postsTop: postsTop
            });
    
          });
    
  }

  componentWillUnmount() {
    document.body.classList.remove('parent-active');
    document.body.classList.remove('version-blog');
  }

  render() {
    const { postsFree, currentPageFree, postsNew, currentPageNew, postsTop, currentPageTop, numPerPage } = this.state;

    //slice the data to show in different pages
    const indexOfLastFree = currentPageFree * numPerPage;
    const indexOfFirstFree = indexOfLastFree - numPerPage;
    const currentPostsFree = postsFree.slice(indexOfFirstFree, indexOfLastFree);

    const indexOfLastNew = currentPageNew * numPerPage;
    const indexOfFirstNew = indexOfLastNew - numPerPage;
    const currentPostsNew = postsNew.slice(indexOfFirstNew, indexOfLastNew);

    const indexOfLastTop = currentPageTop * numPerPage;
    const indexOfFirstTop = indexOfLastTop - numPerPage;
    const currentPostsTop = postsTop.slice(indexOfFirstTop, indexOfLastTop);

    // Logic for displaying page numbers
    const pageNumbersFree = [];
    for (let i = 1; i <= Math.ceil(postsFree.length / numPerPage); i++) {
      pageNumbersFree.push(i);
    }

    const pageNumbersNew = [];
    for (let i = 1; i <= Math.ceil(postsNew.length / numPerPage); i++) {
      pageNumbersNew.push(i);
    }

    const pageNumbersTop = [];
    for (let i = 1; i <= Math.ceil(postsTop.length / numPerPage); i++) {
      pageNumbersTop.push(i);
    }


    // Render page numbers
    const renderPageNumbersFree = pageNumbersFree.map(number => {
      return (
        <li className="page-item" key={number} id={number} onClick={this.handleClickFree}>
          {/* eslint-disable-next-line */}
          <a id={number} className="page-link">
            {number}
          </a>
        </li>
      );
    });

    const renderPageNumbersNew = pageNumbersNew.map(number => {
      return (
        <li className="page-item" key={number} id={number} onClick={this.handleClickNew}>
          {/* eslint-disable-next-line */}
          <a id={number} className="page-link">
            {number}
          </a>
        </li>
      );
    });

    const renderPageNumbersTop = pageNumbersTop.map(number => {
      return (
        <li className="page-item" key={number} id={number} onClick={this.handleClickTop}>
          {/* eslint-disable-next-line */}
          <a id={number} className="page-link">
            {number}
          </a>
        </li>
      );
    });

    return (
      <>
        <HeaderBlogHome headerId={`header7`}/>
        <HeroHeaderBlog />
        
        {/* Free */}
        <section className="blog-post section-gap">
          <div className="container">
            <p className="wood-text">Free</p>
            <div className="row">
              {currentPostsFree}            
            </div>
            
            <nav aria-label="Page navigation">
              <ul
                className="pagination flex justify-content-center"
                id="blog-post-sidebar"
              >
                {renderPageNumbersFree}
              </ul>
            </nav>
            
          </div>
        </section>

        {/* New */}
        <section className="blog-post section-gap">
          <div className="container">
          <p className="wood-text">Newly Released</p>
            <div className="row">
              {currentPostsNew}            
            </div>
            
            <nav aria-label="Page navigation">
              <ul
                className="pagination flex justify-content-center"
                id="blog-post-sidebar"
              >
                {renderPageNumbersNew}
              </ul>
            </nav>
            
          </div>
        </section>

        {/* top */}
        <section className="blog-post section-gap">
          <div className="container">
            <p className="wood-text">Top Rating</p>
            <div className="row">
              {currentPostsTop}            
            </div>
            
            <nav aria-label="Page navigation">
              <ul
                className="pagination flex justify-content-center"
                id="blog-post-sidebar"
              >
                {renderPageNumbersTop}
              </ul>
            </nav>
            
          </div>
        </section>
        
        
        <Footer></Footer>
        
      </>
    );
  }
}

export default PortfolioPage;
