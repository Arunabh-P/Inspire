import React from 'react';

const ContactForm = () => {
  return (
    <div className="form-div mt-5">
      <h1 className="contact-title mb-3">Contact us now</h1>
      {/* formspree used to  submit form */}
      <form
        action="https://formspree.io/f/xleklnre"
        method="POST"
        className="form-wrapper"
      >
        <input
          type="text"
          placeholder="User Name"
          required
          name="Username"
          className="contact-input"
        />
        <input
          type="email"
          placeholder="Email"
          required
          name="Email"
          className="contact-input"
        />
        <textarea
          name="Message"
          placeholder="enter your message"
          id=""
          cols="30"
          rows="3"
          required
          className="contact-textarea"
        ></textarea>
        <button type="submit" value="send" className=" buttonOne">
          Enquire Now
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
