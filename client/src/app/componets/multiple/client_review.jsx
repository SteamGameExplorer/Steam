import React from "react";
import Slider from "react-slick";

class ClientReview extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
    };
    return (
      <section className="client-review-section section-gap">
        <div className="container">
          <div className="active-review-carusel">
            <Slider {...settings}>
            <div className="single-review">
              <div className="quote-wrap">
                <p>
                  “Our product can help you have a view of the game history. 
                  Feel free to find your favorite ones in different year and
                   different genre. Hope you have great fun here!”
                </p>
                <div className="star">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                </div>
              </div>
              <div className="userinfo-wrap aquablue-bg d-flex flex-row align-items-center relative">
                <div className="overlay overlay-bg" />
                <div className="thumb relative">
                  <img src="/img/review/yifan.png" alt="" />
                </div>
                <div className="details relative">
                  <h4>Fan Yi</h4>
                  <p>Master Student of Computer and Information Technology</p>
                </div>
              </div>
            </div>
            <div className="single-review">
              <div className="quote-wrap">
                <p>
                  “I am a big fan of Steam. Sometimes I still find it is hard to explore some 
                  interesting new games. Hope our product can solve the problems for those people same as me!”
                </p>
                <div className="star">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                </div>
              </div>
              <div className="userinfo-wrap aquablue-bg d-flex flex-row align-items-center relative">
                <div className="overlay overlay-bg" />
                <div className="thumb relative">
                  <img src="/img/review/ruizi.png" alt="" />
                </div>
                <div className="details relative">
                  <h4>Ruizi Zhang</h4>
                  <p>Master Student of Scientific Computing</p>
                </div>
              </div>
            </div>
            <div className="single-review">
              <div className="quote-wrap">
                <p>
                  “I worked on the SQL query and database part of this project. 
                  Thank you for coming and hope you enjoy our website!”
                </p>
                <div className="star">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                </div>
              </div>
              <div className="userinfo-wrap aquablue-bg d-flex flex-row align-items-center relative">
                <div className="overlay overlay-bg" />
                <div className="thumb relative">
                  <img src="/img/review/jinghan.png" alt="/img/review/u1.png" />
                </div>
                <div className="details relative">
                  <h4>Jinghan Gu</h4>
                  <p>Master Student of Data Science</p>
                </div>

                
              </div>
              
            </div>
            <div className="single-review">
              <div className="quote-wrap">
                <p>
                  “I like many video games since I was a kid. 
                  I used to play many with my friends. I hope our project can help people gain 
                  better insights about video games in recent 20 years. Feel free to explore the project 
                  to find the video games that you are interested in.
”
                </p>
                <div className="star">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                </div>
              </div>
              <div className="userinfo-wrap aquablue-bg d-flex flex-row align-items-center relative">
                <div className="overlay overlay-bg" />
                <div className="thumb relative">
                  <img src="/img/review/u2.png" alt="" />
                </div>
                <div className="details relative">
                  <h4>Liang Chen(Jasper)</h4>
                  <p>Master Student of Scientific Computing</p>
                </div>
              </div>
            </div>
            <div className="single-review">
              <div className="quote-wrap">
                <p>
                  “Our product can help you have a view of the game history. 
                  Feel free to find your favorite ones in different year and 
                  different genre. Hope you have great fun here!”
                </p>
                <div className="star">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                </div>
              </div>
              <div className="userinfo-wrap aquablue-bg d-flex flex-row align-items-center relative">
                <div className="overlay overlay-bg" />
                <div className="thumb relative">
                  <img src="/img/review/yifan.png" alt="" />
                </div>
                <div className="details relative">
                  <h4>Fan Yi</h4>
                  <p>Master Student of Computer and Information Technology</p>
                </div>
              </div>
            </div>
            <div className="single-review">
              <div className="quote-wrap">
                <p>
                “I am a big fan of Steam. Sometimes I still find it is hard to explore some 
                  interesting new games. Hope our  product can solve the problems for those people same as me!”
                </p>
                <div className="star">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                </div>
              </div>
              <div className="userinfo-wrap aquablue-bg d-flex flex-row align-items-center relative">
                <div className="overlay overlay-bg" />
                <div className="thumb relative">
                  <img src="/img/review/ruizi.png" alt="" />
                </div>
                <div className="details relative">
                  <h4>Ruizi Zhang</h4>
                  <p>Master Student of Scientific Computing</p>
                </div>
              </div>
            </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default ClientReview;
