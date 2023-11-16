import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

// Styles
import "./contact.css";

// Email Js
import emailjs from "emailjs-com";

// image
import emailMessage from "../../images/emailMessage.png";

// Components
import { Heading } from "../Heading/Heading";
import Button from "components/Button/Button";

const Contact = () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  const INITIAL_VALUES = { from: "", message: "", current_year: "" };
  const [notification, setNotification] = useState(false);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [loading, setLoading] = useState(false);

  // Email-js
  const form = useRef();

  const sendEmail = async () => {
    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      console.log("result ", result.text);
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  // Email-js

  const clearForm = () => {
    setValues(INITIAL_VALUES);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("form submitted !", values);
    // TODO : Send data to your email
    setLoading(true);
    await sendEmail();
    setLoading(false);
    clearForm();
    setNotification(true);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className="contact" name="contact" id="contact">
      <Heading text="Get in Touch" style={{ marginBottom: "3rem" }} />
      <div className="content">
        <div className="left">
          <motion.div
            className="svg"
            animate={{ translateY: [-20, 0, -20, 0] }}
            transition={{ yoyo: Infinity, duration: 6 }}
          >
            <img className="contactPhoto" src={emailMessage} alt="Developer" />
          </motion.div>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit} ref={form}>
            <input
              className="rounded-corner"
              type="email"
              name="from"
              value={values.from}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              className="rounded-corner display-none"
              type="text"
              name="current_year"
              value={currentYear}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <textarea
              className="rounded-corner"
              name="message"
              required
              value={values.message}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
            <Button
              text={loading ? "Sending..." : "Send"}
              loading={loading}
              type="submit"
            />
            {notification && (
              <div style={{ color: "green", marginTop: "1rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>
                <span>Thanks, I will reply ASAP 🥰</span>
              </div>
            )}

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
