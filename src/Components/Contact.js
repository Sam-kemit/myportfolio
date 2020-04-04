import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

   state = {
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: ""
   };

   change = e => {
      this.props.onChange({ [e.target.name]: e.target.value });
      this.setState({
        [e.target.name]: e.target.value
      });
    };

   onSubmit = async e => {
      e.preventDefault();
      // this.props.onSubmit(this.state);

      // console.log(this.state);

      const dataToSubmit = {
         contactName: this.state.contactName,
         contactEmail: this.state.contactEmail,
         contactSubject: this.state.contactSubject,
         contactMessage: this.state.contactMessage
      }
      console.log(dataToSubmit);

      axios.post('/api/sendMail', dataToSubmit);

      this.setState({
         contactName: "",
         contactEmail: "",
         contactSubject: "",
         contactMessage: ""
      });
      this.props.onChange({
         contactName: "",
         contactEmail: "",
         contactSubject: "",
         contactMessage: ""
      });
   };



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
               <p className="lead">{message}</p>
            </div>
         </div>
         <div className="row">
            <div className="eight columns">
               <form>
                  <fieldset>
                     <div>
                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                        <input   
                           size="35" 
                           id="contactName" 
                           name="contactName"
                           value={this.state.contactName} 
                           onChange={e => this.change(e)}
                        />
                     </div>

                     <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input   
                           size="35" 
                           id="contactEmail" 
                           name="contactEmail"
                           value={this.state.contactEmail}
                           onChange={e => this.change(e)}
                        />
                     </div>

                     <div>
                        <label htmlFor="contactSubject">Subject</label>
                        <input   
                           size="35" 
                           id="contactSubject" 
                           name="contactSubject"
                           value={this.state.contactSubject} 
                           onChange={e => this.change(e)}
                        />
                     </div>

                     <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea 
                           cols="50" 
                           rows="15" 
                           id="contactMessage" 
                           name="contactMessage"
                           value={this.state.contactMessage} 
                           onChange={e => this.change(e)}
                        />
                     </div>

                     <div>
                        <button 
                           className="submit" 
                           onClick={e => this.onSubmit(e)}
                        >
                        Submit
                        </button>
                        {/* <span id="image-loader">
                           <img alt="" src="images/loader.gif" />
                        </span> */}
                     </div>
                  </fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
