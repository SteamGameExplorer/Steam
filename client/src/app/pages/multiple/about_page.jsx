import React from "react";
import Header from "../../componets/multiple/header/header";
import PageTop from "../../componets/multiple/page_top";
import About from "../../componets/multiple/about";
import StartExecution from "../../componets/multiple/start_execution";
import Cta from "../../componets/multiple/cta";
import ClientReview from "../../componets/multiple/client_review";
import Footer from "../../componets/multiple/footer";

import Logo1 from "../../../assets/img/steam2.png";
import Logo2 from "../../../assets/img/steam2.png";

class AboutPage extends React.Component {

    componentDidMount() {
        document.body.classList.add('pages');
        document.body.classList.add('version2');
    }

    componentWillUnmount() {
        document.body.classList.add('pages');
        document.body.classList.remove('version2');
    }

    render() {
    return (
      <>
        <Header headerId={`header`}  Logo1={Logo1} Logo2={Logo2} />
        <PageTop pageTitle="About"></PageTop>
        <About></About>
        <StartExecution></StartExecution>
        <Cta></Cta>
        <ClientReview></ClientReview>
        <Footer></Footer>
      </>
    );
  }
}

export default AboutPage;
