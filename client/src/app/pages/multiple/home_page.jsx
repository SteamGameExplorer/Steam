import React from "react";
import HeaderHome from "../../componets/multiple/header/header_home";
import Content from "../../componets/multiple/home_content";
import ImportantPoints from "../../componets/multiple/important_points";

import Logo1 from "../../../assets/img/steam1.png";
import Logo2 from "../../../assets/img/logo.png";

class HomePage extends React.Component {

    componentDidMount() {
        document.body.classList.add('version9');
    }

    componentWillUnmount() {
        document.body.classList.remove('version9');
    }

    render() {
    return (
      <div>
        
        <HeaderHome headerId={`header2`} Logo1={Logo1} Logo2={Logo2} />
        
        <Content /> 
        
        <ImportantPoints></ImportantPoints>        
        
      </div>
    );
  }
}

export default HomePage;
