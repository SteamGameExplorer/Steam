import React from "react";
import Header from "../../componets/multiple/header/header";
import PageTop from "../../componets/multiple/page_top";
import Map from "../../componets/multiple/map";
import ContactForm from "../../componets/multiple/contact_form";
import Footer from "../../componets/multiple/footer";

import Logo1 from "../../../assets/img/steam2.png";
import Logo2 from "../../../assets/img/steam2.png";

class ContactPage extends React.Component {

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
      <>
        <Header headerId={`header`} Logo1={Logo1} Logo2={Logo2} />
        <PageTop pageTitle="Contact Us" />
        <Map />
        <ContactForm />
        <Footer />
      </>
    );
  }
}

export default ContactPage;
