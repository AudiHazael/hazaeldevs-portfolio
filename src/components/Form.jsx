import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Form() {
  return (
    <form
      action="https://formsubmit.co/95ed19d5febab735883fe41446874d20"
      method="POST"
      className="my-4 p-2 w-100 text-dark"
      style={{ width: "100%" }}>
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_next"
        value="https://hazaeldevs-portfolio.vercel.app/thank-you"
      />

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control w-100"
          name="name"
          id="name"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control w-100"
          name="email"
          id="email"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone No.
        </label>
        <input
          type="tel"
          className="form-control w-100"
          name="phone"
          id="phone"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <input
          type="text"
          className="form-control w-100"
          name="subject"
          id="subject"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control w-100"
          name="message"
          id="message"
          rows="4"></textarea>
      </div>

      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="checkbox"
          id="terms"
          required
        />
        <label className="form-check-label" htmlFor="terms">
          Agree to Privacy Policy and Terms and Conditions
        </label>
      </div>

      <button type="submit" className="btn btn-primary px-4">
        Submit
      </button>
    </form>
  );
}

export default Form;
