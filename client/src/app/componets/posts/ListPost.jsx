import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEye, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

class ListPost extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
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
          gameId: this.props.post.game_id,
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
        const post = this.props.post;
        const like = this.state.like;
        const index1 = post.movies.search("'max': '") + 8;
        const index2 = post.movies.search("'}, 'highlight':");
        const movie = post.movies.slice(index1, index2);

        return(
            <div key={post.id} className="col-lg-12">
               <div className="single-card card" style={{ border: 'none'}}>

               <div className="row">
                    <div className="col-lg-4">
                    <a href={movie} target='_blank' rel="noopener noreferrer">
                      <img
                        className="card-top-img"
                        src={post.header}
                        alt={post.release_year}
                      />
                    </a>
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
                          <div className="col-lg-4">
                            <p className="mt-20">
                              Publisher:
                              <br />
                              <span className="author">
                                <a href="/index">{ post.company } </a> On {post.release_year}
                              </span>                         
                            </p>
                          </div>
                          <div className="col-lg-8">
                            <div className="mt-40 m-0-xs">
                            <a href="/index" className="card-link">
                              <FontAwesomeIcon className="mr-1" icon={ faStar } />
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
                            {/* eslint-disable-next-line */}
                            <a style={{marginTop: '5px', marginLeft: '15px'}}>
                                <Button variant={like ? 'outline-danger' : ''} active={true} onClick={this.handleClick}>
                                    {like ? 'Unlike' : 'Like'}
                                </Button>
                            </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
               </div>
             </div>
        );
    }

}

export default ListPost;