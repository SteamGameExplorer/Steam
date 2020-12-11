import React from "react";
import { withRouter } from "react-router-dom";
import './loader.scss';
//import logoC from 'img/logo-circle.svg';

class ScrollToTop extends React.Component {

   constructor(props) {
        super(props);
        
        this.state = {
            pageLoading: false,
        };
    }

  componentDidUpdate(prevProps) {

    if (
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo(0, 0);

       this.setState({ pageLoading: true });

        setTimeout(() => {
            this.setState({ pageLoading: false });
        }, 1000);
    }
  }


  componentWillUnmount() {
      this.setState({ pageLoading: true });
  }

    render() {
    return (
      <>
          <div className="matx-box"
               style={this.state.pageLoading? {display: 'block'}: { display: 'none'}}
          >
              <div className="matx-loader">
                  <img src="/img/logo-circle.svg" alt="" />
                  <div />
                  <div />
                  <div />
                  <div />
              </div>
          </div>
      </>
    );
  }
}

export default withRouter(ScrollToTop);
