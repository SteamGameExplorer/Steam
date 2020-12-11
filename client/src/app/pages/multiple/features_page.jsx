import React from "react";
import Header from "../../componets/multiple/header/header";
import PageTop from "../../componets/multiple/page_top";
import UniqueFeature from "../../componets/multiple/unique_feature";
import Cta from "../../componets/multiple/cta";
import Important from "../../componets/multiple/important";
import Execution from "../../componets/multiple/execution";
import Brands from "../../componets/multiple/brands";
import Footer from "../../componets/multiple/footer";

import Logo1 from "../../../assets/img/steam2.png";
import Logo2 from "../../../assets/img/steam2.png";

class FeaturesPage extends React.Component {

    componentDidMount() {
        document.body.classList.add('version2');
        document.body.classList.add('pages');
    }

    componentWillUnmount() {
        document.body.classList.remove('version2');
        document.body.classList.remove('pages');
    }

    render() {
    return (
      <div>
        
        <Header headerId={`header`}  Logo1={Logo1} Logo2={Logo2} />
        
        <PageTop pageTitle="Features" />
        
        
        <UniqueFeature></UniqueFeature>
        
        
        <Cta></Cta>
        
        
        <Important></Important>
        
        
        <Execution></Execution>
        
        
        <Brands></Brands>
        
        
        <Footer></Footer>
        
      </div>
    );
  }
}

export default FeaturesPage;
