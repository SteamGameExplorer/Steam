import React from 'react';
import {Link} from "react-router-dom";
import Header from "../componets/multiple/header/header";
import Footer from "../componets/multiple/footer";

class ComingSoon extends React.Component {

    render() { 
        return ( 
          <>

      <Header/>
      {
        /*====== PAGE TITLE PART START ======*/
      }
      <div className="page-title-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-title-item text-center">
                <h2 className="title">About Us</h2>
                <nav aria-label="breadcrumb">

                
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link  to={"/"}>Home </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About
                    </li>
                  </ol>
                </nav>
              </div>
              {/* page title */}
            </div>
          </div>
          {/* row */}
        </div>
        {/* container */}
      </div>
      {
        /*====== PAGE TITLE PART ENDS ======*/
      }
      {
        /*====== COMIMG SOON PART START ======*/
      }
      <div className="error-area pt-120 pb-115">
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-lg-12">
              <div className="error-item text-center">
                <div id="simple_timer" />
                <h2 className="title">
                  This Website is Coming <br /> Very Soon
                </h2>
                <span>Wait for it please</span>
              </div>
              {/* error item */}
            </div>
          </div>
        </div>
      </div>;
      {
        /*====== COMIMG SOON PART ENDS ======*/
      }
      <Footer/>
      </>
    );
  }
}
 
export default ComingSoon;