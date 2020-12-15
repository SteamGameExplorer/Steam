import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEye, faArchive, faCoins } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SmallOrange from '../../../assets/img/default_picture.jpg';
import Button from 'react-bootstrap/Button';

export default class PortfolioGamePost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      like: this.props.like
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const user = localStorage.getItem('email');
    if(user) {
      this.setState({
        user: user
      });
    }
  }

  handleClick() {
    const like = !this.state.like;
    this.setState({
      like: like
    });
    const paras = {
      userId: this.state.user,
      gameId: this.props.postObj.game_id,
      add: like
    };
    if(this.state.user) {
      fetch("http://localhost:8081/favorite", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(paras)
      }).then(res => res.json())
        .then(data => {
          console.log('Success:', data);
      });
    }
  }

	render() {
    const post = this.props.postObj;
    const like = this.state.like;
    const index1 = post.movies.search("'max': '") + 8;
    const index2 = post.movies.search("'}, 'highlight':");
    const movie = post.movies.slice(index1, index2);
		return (
			<div key={post.game_id} className="col-lg-4 col-md-6">
               <div className="single-card card">
                 <a href={movie} target='_blank' rel="noopener noreferrer">
                  <img
                    className="card-top-img"
                    src={post.header}
                    alt={SmallOrange}
                  />
                 </a>
                 <div className="card-body">
                   <p className="mt-25 post-info">
                     <span className="author">
                      <Link className="mr-1">{ post.company }</Link>
                     </span>
                     on { post.release_date }
                   </p>
                   <div className="mb-9">
                     {/* eslint-disable-next-line */}
                     <a className="card-link">
                       <FontAwesomeIcon className="mr-1" icon={ faCoins } />
                       { post.price }
                     </a>
                   </div>
                   <div className="mb-9">
                     {/* eslint-disable-next-line */}
                     <a className="card-link">
                       <FontAwesomeIcon className="mr-1" icon={ faStar } />
                       { post.rating }
                     </a>
                     {/* eslint-disable-next-line */}
                     <a  className="card-link">
                       <FontAwesomeIcon className="mr-1" icon={ faEye } />
                       { post.total_rating } Comments
                     </a>
                   </div>
                   <div className="mb-9">
                     {/* eslint-disable-next-line */}
                     <a className="card-link">
                       <FontAwesomeIcon className="mr-1" icon={ faArchive } />
                       { post.platforms }
                     </a>
                   </div>
                   <h4 className="card-title mb-15">
                      { post.name }
                   </h4>
                   <p>
                   { post.short_description }
                   </p>
                   <div style={{marginTop: '5px'}}>
                    <Button variant={like ? 'outline-danger' : ''} active={true} onClick={this.handleClick}>
                        {like ? 'Unlike' : 'Like'}
                    </Button>
                   </div>
                 </div>
               </div>
             </div>
		);
	}
}