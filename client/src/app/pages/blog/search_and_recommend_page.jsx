import React from "react";
import HeaderBlogDetailsSideBar from "../../componets/blog/header/header_blog_details_side_bar";
import HeroBlogDetailsSideBar from "../../componets/blog/hero/hero_blog_details_side_bar";
import Footer from "../../componets/multiple/footer";
import '../../../assets/scss/menu.css';
import PortfolioGamePost from "../../componets/posts/PortfolioGamePost";
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const menuitems = [
  { text: 'Search by name'},
  { text: 'Search by user favor'}
]

class SearchAndRecommendPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showMenuItem: -1,
      postsToShow : [],
      postsInit : [],
      prices : [], 
      tags : [],
      systems : ["windows", "mac", "linux"],
      names : [],
      tag : "",
      price : -1,
      system : "system",
      name : "",
      favoriteList: []
    }

    this.handleChangeSystem = this.handleChangeSystem.bind(this);
    this.handleChangeTag = this.handleChangeTag.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.close = this.close.bind(this);
    this.searchOnFavor = this.searchOnFavor.bind(this);
    this.searchName = this.searchName.bind(this);
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

        fetch("http://localhost:8081/" + (posts.length === 0 ? "cold_start" : ("recommendation/" + user)), {
          method: 'GET' // The type of HTTP request.
        }).then(res => res.json())
          .then(postsList => {
          if(!postsList) return;
          const posters = postsList.map(postObj => (
            <PortfolioGamePost postObj={postObj} like={posts.includes(postObj.game_id)}/>
          ));

          this.setState({
            postsInit: posters,
            postsToShow : posters
          });

        });

        this.setState({
          favoriteList: posts
        });

      }); 
    }
    
    //cold start for recommendation
    else {
      fetch("http://localhost:8081/cold_start", {
      method: 'GET' // The type of HTTP request.
    }).then(res => res.json())
      .then(postsList => {
      if(!postsList) return;
      const posts = postsList.map(postObj => (
        <PortfolioGamePost postObj={postObj} like={false}/>
      ));

      this.setState({
        postsInit: posts,
        postsToShow : posts
      });

    });
    }

    // get all prices
    fetch("http://localhost:8081/prices", {
      method: 'GET' // The type of HTTP request.
    }).then(res => res.json())
      .then(postsList => {
      if(!postsList) return;
      const prices = postsList.map(postObj => (
        {value: postObj.price, label: postObj.price + ' - ' + postObj.price + '.99'}
      ));

      this.setState({
        prices: prices
      });

    });

    // get all tags
    fetch("http://localhost:8081/tags", {
      method: 'GET' // The type of HTTP request.
    }).then(res => res.json())
      .then(postsList => {
      if(!postsList) return;
      const tags = postsList.map(postObj => (
        {value: postObj.tag_name, label: postObj.tag_name}
      ));

      this.setState({
        tags: tags
      });

    });

    // get all names
    fetch("http://localhost:8081/names", {
      method: 'GET' // The type of HTTP request.
    }).then(res => res.json())
      .then(postsList => {
      if(!postsList) return;

      this.setState({
        names: postsList
      });

    });

  }

  componentWillUnmount() {
    document.body.classList.remove('version-blog');
    document.body.classList.remove('parent-active');
  }

  handleChangeTag(e) {
    this.setState({tag : e.value});
  }

  handleChangePrice(e) {
    this.setState({price : e.value});
  }

  handleChangeSystem(e) {
    this.setState({system : e.value});
  }

  handleMenuLevelHover = (index) => {
    this.setState({ showMenuItem: index });
  }

  close() {
    this.setState({ showMenuItem: -1 });
  }
 
  handleOnSelect = item => {
    this.setState({name : item.name});
  }

  searchName() {
    fetch(`http://localhost:8081/names/${this.state.name}`, {
      method: 'GET' // The type of HTTP request.
    }).then(res => res.json())
      .then(postsList => {
      if(!postsList) return;
      const posts = postsList.map(postObj => (
        <PortfolioGamePost postObj={postObj} like={this.state.favoriteList.includes(postObj.game_id)}/>
      ));

      this.setState({
        postsToShow : posts
      });

    });
  }

  // search based on user favor of system, tag and price
  searchOnFavor() {
    fetch(`http://localhost:8081/search/${this.state.system}/${this.state.price}/${this.state.tag}`, {
      method: 'GET' // The type of HTTP request.
    }).then(res => res.json())
      .then(postsList => {
      if(!postsList) return;
      const posts = postsList.map(postObj => (
        <PortfolioGamePost postObj={postObj} like={this.state.favoriteList.includes(postObj.game_id)}/>
      ));

      this.setState({
        postsToShow : posts
      });

    });
  }

  render() {
    const systems = [
      { value: 'windows', label: 'windows' },
      { value: 'mac', label: 'mac' },
      { value: 'linux', label: 'linux' }
    ];
    return (
      <>
        <HeaderBlogDetailsSideBar headerId={`header7`}/>
        <HeroBlogDetailsSideBar />
        <div>
        <ul className='menu-ul'>
        {
          menuitems.map((level, index) => (
            <li style={{float : "left"}}
             onClick={() => {this.handleMenuLevelHover(index)}}
             className={(this.state.showMenuItem === index) ? 'menu-hover' : ''}
             >
             <div className='menu-content'>{level.text}</div>
             <div className={(this.state.showMenuItem === index) ? 'submenu-show' : 'submenu-hidden'}>
              {index === 1 ? <div>
                <div style={{float : "left", width : 320, paddingRight : 20}}>
                <Select isClearable={true} onChange={this.handleChangeSystem} placeholder="Select system" options={systems} />
                </div>
                <div style={{float : "left", width : 320, paddingRight : 20}}>
                  <Select isClearable={true} onChange={this.handleChangePrice} placeholder="Select price interval" options={this.state.prices} />  
                </div>
                <div style={{float : "left", width : 320}}>
                  <Select isClearable={true} onChange={this.handleChangeTag} placeholder="Select tag name" options={this.state.tags} />                  
                </div>               
                <button className="search-btn" onClick={this.searchOnFavor}>
                  <FontAwesomeIcon className="mr-1" icon={faSearch} />
                </button>
              </div> : <div>
                <div  style={{width: 400, float : "left"}}>
                  <ReactSearchAutocomplete
                    items={this.state.names}
                    onSelect={this.handleOnSelect}
                    placeholder="Please type in name"
                    autoFocus
                  />
                </div>
                <div style={{float : "left", marginTop : 10}}>
                  <button onClick={this.searchName}>search</button>
                </div>
        </div>}
             </div>
           </li>
         ))
        }
        <li style={{float : "inline-end"}} onClick={this.close}>
          <div className='menu-content'>click here to close search bar</div>
        </li>
        </ul>
      </div>
        <section className="blog-post section-gap">
          <div className="details-body">
            <div className="container">
              <h2 className="head">Popular Recommendation</h2>
              <blockquote className="blog-quotes">
                <div className="row">
                  {this.state.postsToShow}
                </div>
              </blockquote>                 
            </div>
          </div>
        </section>
        <Footer/>
      </>
    );
  }
}

export default SearchAndRecommendPage;
