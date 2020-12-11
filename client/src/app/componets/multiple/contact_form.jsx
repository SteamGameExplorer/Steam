import React from "react";

class ContactForm extends React.Component {
  render() {
    return (
      <section className="contact-form-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form 
                className="form-area contact-form text-right"
                id="myForm"
                action="mail"
                method="post"
              >
                <input
                  name="name"
                  autoComplete="name"
                  placeholder="Enter your name"
                  className="common-input mb-20 form-control"
                  required
                  type="text"
                />
                <input
                  name="email"
                  autoComplete="email"
                  placeholder="Enter email address"
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$"
                  className="common-input mb-20 form-control"
                  required
                  type="email"
                />
                <input
                  name="subject"
                  autoComplete="subject"
                  placeholder="Enter subject"
                  className="common-input mb-20 form-control"
                  required
                  type="text"
                />
                <textarea
                  className="common-textarea form-control"
                  cols={30}
                  rows={7}
                  name="message"
                  autoComplete="message"
                  placeholder="Enter Messege"
                  required
                />
                <div className="d-flex flex-column">
                  <button className="genric-btn2 d-block mt-30 mr-0 ml-auto">
                    Send Message
                  </button>
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

export default ContactForm;
