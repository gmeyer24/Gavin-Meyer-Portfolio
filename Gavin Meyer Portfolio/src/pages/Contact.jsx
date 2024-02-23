import React, { useState } from "react";

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
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          onBlur={() => handleBlur("name")}
        />
        {nameError && <p style={{ color: "red" }}>{nameError}</p>}
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={() => handleBlur("email")}
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        Message:{" "}
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          onBlur={() => handleBlur("message")}
        />
        {messageError && <p style={{ color: "red" }}>{messageError}</p>}
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>My Contact Information</h2>
        <p>Email: gpmeyer24@gmail.com Cell: 815-353-9474</p>
      </div>
    </div>
  );
}
