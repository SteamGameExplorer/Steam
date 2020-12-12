import React from "react";
import {Link} from "react-router-dom";

class PageTop extends React.Component {

  render() {
    return (
      <section className="page-top-section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6">
              <h1 className="text-white">
              {`${this.props.pageTitle? this.props.pageTitle: 'Page'}`}
              </h1>
            </div>
            <div className="col-lg-6  col-md-6 page-top-nav">
              <div>
                <Link to={"/"}>Home</Link>
                <span className="lnr lnr-arrow-right" />
                <Link to={`/${this.props.pageTitle? this.props.pageTitle.toLowerCase(): ' '}`} >
                {`${this.props.pageTitle? this.props.pageTitle: 'Page'}`}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PageTop;
