import React from "react";

class Hero5 extends React.Component {

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
      <section className="hero-section-bg relative" style={{ overflow: 'hidden'}}>
        <div className="vdo-section">
          <div
            className="hero-vdo"
            data-vide-bg="vdo/app-bv"
            data-vide-options="loop: true, muted: true"
          />
        </div>
        <div className="content">
          <div className="container">
            <div className="row align-items-center relative">
              <div className="col-lg-6">
                <h1>
                  The most Creative
                  <br /> Theame ever in Business
                </h1>
                <p className="pt-20 pb-20 mw-510">
                  The first is a non technical method which requires the use of
                  adware removal software. Download free adware and spyware
                  removal software and use advanced tools to help prevent
                  getting infected.
                </p>
                <a href="/index" className="genric-btn2">
                  Browse free demo
                </a>
              </div>
              <div className="col-lg-6">
                <img className="hero-img9" src="/img/iPhoneX.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero5;
