import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


//import PropTypes from 'prop-types';
//import styled from 'styled-components';
//const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <section className="contact-section section-gap">
        <div className="container">
          <div className="row justify-content-center section-title-wrap">
            <div className="col-lg-12">
              <div className="title-img">
                <img src="/img/title-icon.png" alt="" />
              </div>
              <h1>Whenever You Need, Just Send a Message</h1>
              <p>
                The first is a non technical method which requires the use of
                adware removal software. Download free adware and spyware
                removal software and use advanced tools getting infected.
              </p>
            </div>
          </div>
          <div className="row justify-content-between align-items-start">
            <div className="col-lg-6 col-md-6 contact-left">

              <div className="map-wrap relative" id="map">
                <GoogleMapReact  className="map-wrap2" id="map"
                                 bootstrapURLKeys={{ key: 'AIzaSyA7nx22ZmINYk9TGiXDEXGVxghC43Ox6qA'/* YOUR KEY HERE */ }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                  <AnyReactComponent
                      lat={59.955413}
                      lng={30.337844}
                      text="My Marker"
                  />
                </GoogleMapReact>

              </div>






            </div>
            <div className="col-lg-5 col-md-6 contact-right">
              <form
                className="form-area contact-form"
                id="myForm"
                action="mail.php"
                method="post"
              >
                <label >Your Name</label>
                <input
                  name="name"
                  autoComplete="name"
                  placeholder="Enter your name"
                  className="common-input mb-20 form-control"
                  required
                  type="text"
                />
                <label >Email Address</label>
                <input
                  name="email"
                  autoComplete="email"
                  placeholder="Enter email address"
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$"
                  className="common-input mb-20 form-control"
                  required
                  type="email"
                />
                <label>SUbject</label>
                <input
                  name="subject"
                  autoComplete="subject"
                  placeholder="Enter subject"
                  className="common-input mb-20 form-control"
                  required
                  type="text"
                />
                <label>Message</label>
                <textarea
                  className="common-textarea form-control"
                  cols={30}
                  rows={7}
                  name="message"
                  autoComplete="message"
                  placeholder="Enter Messege"
                  required
                  defaultValue={""}
                />
                <div >
                  <button className="genric-btn mt-30">Send Message</button>
                  <div className="alert-msg" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
