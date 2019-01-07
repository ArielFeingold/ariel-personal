import React, { Component } from 'react';


class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

        <div className="row section-head">

          <div className="two columns header-col">

            <h1><span>Get In Touch.</span></h1>

          </div>

          <div className="ten columns">

            <h5 className="lead" style={{color:"white"}}>Have a project for me? Think I'd be a good fit for your team? I'd love to hear from you!</h5>
            <p>{<a href="mailto:feingold.ariel@gmail.com">Click Here To Email Me</a>}.</p>

          </div>

        </div>

   </section>
    );
  }
}

export default Contact;
