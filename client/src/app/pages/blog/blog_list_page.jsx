import React from "react";
import HeaderBlogList from "../../componets/blog/header/header_blog_list";
import HeroBlogListPage from "./hero_blog_list_page";
import Footer from "../../componets/multiple/footer";
import axios from 'axios'
import ListPost from "../../componets/posts/ListPost";

class BlogListPage extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      posts: [],
      favoriteList: []
    }
  }

  componentDidMount() {
    document.body.classList.add('version-blog');
    document.body.classList.add('parent-active');

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
                <ListPost post={post} like={this.state.favoriteList.includes(post.game_id)}/>            
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
