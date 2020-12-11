import React from "react";
import Header from "../../componets/multiple/header/header";
import PageTop from "../../componets/multiple/page_top";
import Price from "../../componets/multiple/price";
import Faq from "../../componets/multiple/faq";
import Cta from "../../componets/multiple/cta";
import Brands from "../../componets/multiple/brands";
import Footer from "../../componets/multiple/footer";

import Logo1 from "../../../assets/img/steam2.png";
import Logo2 from "../../../assets/img/steam2.png";

class PricingPage extends React.Component {

    componentDidMount() {
        document.body.classList.add('pages');
        document.body.classList.add('version2');
    }

    componentWillUnmount() {
        document.body.classList.remove('pages');
        document.body.classList.remove('version2');
    }

    render() {
    return (
      <>
        
        <Header headerId={`header`} Logo1={Logo1} Logo2={Logo2} />
        
        <PageTop pageTitle="pricing" />
        
        <Price></Price>
        
        <Faq></Faq>
        
        <Cta></Cta>
        
        <Brands></Brands>
        
        <Footer></Footer>
      </>
    );
  }
}

export default PricingPage;
