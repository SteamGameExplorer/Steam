import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrinStars, faEye, faArchive, faCoins } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SmallOrange from '../../../assets/img/default_picture.jpg';

export default class PortfolioGamePost extends React.Component {

	render() {
    const post = this.props.postObj;
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
                       <FontAwesomeIcon className="mr-1" icon={ faGrinStars } />
                       { post.rating }
                     </a>
                     {/* eslint-disable-next-line */}
                     <a  className="card-link">
                       <FontAwesomeIcon className="mr-1" icon={ faEye } />
                       { post.total_rating } Ratings
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
                 </div>
               </div>
             </div>
		);
	}
}