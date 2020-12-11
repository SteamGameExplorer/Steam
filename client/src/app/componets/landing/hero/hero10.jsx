import React from "react";
import HeroVideo from "../../../../assets/vdo/sass-bv.mp4";

class Hero10 extends React.Component {

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

          <video  className="hero-vdo"
                  ref={ref => (this.video = ref)}
                  autoPlay
                  muted
                  loop
                  style={{
                    position: "absolute",
                    width: "100%",
                    left: 0
                  }}
          >
            <source src={HeroVideo} type="video/mp4" />
          </video>

        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-between">
              <div className="offset-lg-1 col-lg-5 offset-md-0 col-md-10">
                <h1 className="text-white">
                  We Made our <br />
                  Software 100% Errorless
                </h1>
                <p className="pt-20 pb-20 mw-510 text-white">
                  The first is a non technical method which requires the use of
                  adware removal software. Download free adware and spyware
                  removal software and use advanced tools to help prevent
                  getting infected.
                </p>
                <a href="/index" className="genric-btn">
                  Browse free demo
                </a>
              </div>
              <div className="col-lg-6">
                <div className="hero-img8">
                  <img className src="/img/mockup.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero10;
