import React from "react";
import Header from "../../componets/multiple/header/header";
import PageTop from "../../componets/multiple/page_top";
import DemoRequest from "../../componets/multiple/demo_request";
import Cta from "../../componets/multiple/cta";
import Footer from "../../componets/multiple/footer";

class RequestDemoPage extends React.Component {


    componentDidMount() {
        document.body.classList.add('');
    }

    componentWillUnmount() {
        document.body.classList.remove('');
    }

    render() {
    return (
      <div>
        
        <Header></Header>
        
        
        <PageTop pageTitle="Page"></PageTop>
        
        
        <DemoRequest></DemoRequest>
        
        
        <Cta></Cta>
        
        
        <Footer></Footer>
        
      </div>
    );
  }
}

export default RequestDemoPage;
