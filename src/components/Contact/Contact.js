import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { email, phone, message });
  };

  return (
    <div className="contact-container ">
      <h2>Contact Us</h2>
      <div className="contactUs-container">
        <div className=" contact-info">
          <form className="form" onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              placeholder="abc@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Phone:</label>
            <input
              type="phone"
              value={phone}
              placeholder="9999999999"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <label>Message:</label>
            <textarea
              value={message}
              placeholder="Write your message"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-details">
          <p>Dr. Kamal Singh, MBBS</p>
          <p>Address:- Moti Nagar New Delhi-110015</p>
          <p>Email:- info@savarnayamhealthcenter.com</p>
          <p>Phone:- +91 123-456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
