import React from "react";
import GoogleMapReact from 'google-map-react';

class Map extends React.Component {

  static defaultProps = {
    center: {
      lat: 39.9522,
      lng: -75.1932
    },
    zoom: 16
  };


  render() {
    return (
      <section className="map-section relative">
        <div className="container-fluid relative">
          <div className="row">
            <div className="map-wrap2" id="map" >

              <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyA8VUlbMRog1lh1K-j6sAS-fPx8ooVqfdM'/* YOUR KEY HERE */ }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
              >
                <i class="fa fa-map-marker" style={{fontSize: '36px', color: 'red'}}></i>
              </GoogleMapReact>

            </div>
          </div>
        </div>
        <div className="container info-wrap">
          <div className="row align-items-center justify-content-end section-gap">
            <div className="contact-info">
              <div className="single-line d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-home" />
                </div>
                <div className="desc">
                  <h4>Philadelphia, United States</h4>
                  <p>University of Pennsylvania, 3451 Walnut Street</p>
                </div>
              </div>
              <div className="single-line d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-phone-handset" />
                </div>
                <div className="desc">
                  <a href="tel:1(215)7303493">
                  <h4>+1 (215)-730-3493</h4>
                  </a>
                  <p>Mon to Fri 10 am to 5 pm</p>
                </div>
              </div>
              <div className="single-line d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-envelope" />
                </div>
                <div className="desc">
                  <h4>fanyi1@seas.upenn.edu ruizi@seas.upenn.edu</h4>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Map;