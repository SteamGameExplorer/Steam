import React from "react";

class Hero2 extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      fullscreen: {
        height: 'auto'
      }
    }
  }


  componentDidMount() {
    this.setState({
      fullscreen:{
        height: window.innerHeight,
      }
    })
  }

  componentWillMount() {
    this.setState({
      fullscreen:{
        height: window.innerHeight,
      }
    });
  }

  render() {
    return (
      <section className="hero-section relative" style={{ overflow: 'hidden'}}>
        <div className="container">
          <div className="row fullscreen align-items-center relative" style={this.state.fullscreen}>
            <div className="col-lg-6 content-wrap">
              <h1>
                The most Creative
                <br /> Theame ever in Business
              </h1>
              <p className="pt-20 pb-20 mw-510">
                The first is a non technical method which requires the use of
                adware removal software. Download free adware and spyware
                removal software and use advanced tools to help prevent getting
                infected.
              </p>
              <a href="/index" className="genric-btn2">
                Browse free demo
              </a>
            </div>
            <div className="col-lg-6">
              <img className="hero-img4" src="/img/iPhoneX.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero2;
