import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setMessageError("");
  };

  const handleBlur = (field) => {
    if (field === "name" && !name.trim()) {
      setNameError("Name is required");
    }

    if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email address");
    }

    if (field === "message" && !message.trim()) {
      setMessageError("Message is required");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      setNameError("Name is required");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email address");
    }

    if (!message.trim()) {
      setMessageError("Message is required");
    }

    // If there are no errors, proceed with form submission
    if (!nameError && !emailError && !messageError) {
      // Clear form fields after submission
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="contact-container p-3 py-md-5 px-md-3">
      <h1 className="mb-4">Contact Form</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            onBlur={() => handleBlur("name")}
          />
        </label>
        {nameError && <p className="error-message">{nameError}</p>}
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={() => handleBlur("email")}
        />
        {emailError && <p className="error-message">{emailError}</p>}
        Message:{" "}
        <textarea
          type="text"
          className="message-input"
          value={message}
          onChange={handleMessageChange}
          onBlur={() => handleBlur("message")}
        />
        {messageError && <p className="error-message">{messageError}</p>}
        <div className="submit-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
