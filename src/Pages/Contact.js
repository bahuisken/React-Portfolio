import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-sm-12 mt-5 mb-5">
          <div className="card w-100 border border-dark">
            <div className="card-body">
              <h2 className="main-header text-center text-md-left">
                Contact Brice
              </h2>
              <hr className="main-hr" />

              <form>
                <div className="row">
                  <div className="col-sm-12 col-md-6 mb-3 mb-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      id="first-name"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 mb-3 mb-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      id="last-name"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 mb-3 mb-sm-3">
                    <div className="form-group">
                      <label htmlFor="contact-source">
                        How did you find me?
                      </label>
                      <select className="form-control" id="contact-source">
                        <option value="linkedIn">linkedIn</option>
                        <option value="GitHub">GitHub</option>
                        <option value="Search">Search</option>
                        <option value="BusinessCard">Business Card</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 mb-3 mb-sm-3">
                    <div className="form-group">
                      <label htmlFor="email-address">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email-address"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 mb-3 mb-sm-3">
                    <div className="form-group">
                      <label htmlFor="custom-message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="custom-message"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 mb-3 mb-sm-3 text-center text-md-left">
                    <button type="submit" className="btn btn-custom">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
