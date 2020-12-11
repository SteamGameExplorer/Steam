import React from "react";

class Hero6 extends React.Component {

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
                We Made our
                <br /> Software 100% Errorless
              </h1>
              <p>
                The first is a non technical method which requires the use of
                adware removal software. Download free adware and spyware
                removal software and use advanced tools to help prevent getting
                infected.
              </p>
              <a href="/index" className="genric-btn2 mr-sm-3">
                Start a project
              </a>
              <a href="/index" className="genric-btn mt-4 mt-sm-0">
                
                View Pricing
              </a>
            </div>
          </div>
        </div>
        <img className="hero-img" src="/img/hero/hero-img.png" alt="" />
      </section>
    );
  }
}

export default Hero6;
