import React from 'react';

export class ContactForm extends React.Component{
render(){
    return (
            <div className="col-sm-12 col-md-12 col-lg-12 pt-3 pb-5 bg-white">
              <h4>Call Me Back</h4>
              <form className="form" role="form">
                <div className="form-group">
                  <input type="email" className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <input type="name" className="form-control"
                  aria-describedby="nameHelp"
                  placeholder="Enter Name"
                  />
                </div>
                <div className="form-group">
                  <input type="phone" className="form-control"
                  aria-describedby="phoneHelp"
                  placeholder="Enter phone"
                  />
                </div>
                <div className="form-group">
                  <textarea type="message" className="form-control"
                  aria-describedby="messageHelp" rows="5"
                  placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group pb-4">
                <button type="submit" className="btn btn-info float-right">Submit</button>
                </div>
              </form>
            </div>
          );
      }
}
