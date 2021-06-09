import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name-input">
        Name:
        <input
          id="name-input"
          type="text"
          value={name}
          onChange={({target}) => setName(target.value)}
          placeholder="Enter name"
        />
      </label>
      <label htmlFor="phone-input">
        Phone:
        <input
          id="phone-input"
          type="tel"
          value={phone}
          onChange={({target}) => setPhone(target.value)}
          placeholder="Enter phone"
          pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
        />
      </label>
      <label htmlFor="email-input">
        Email:
        <input
          id="email-input"
          type="email"
          value={email}
          onChange={({target}) => setEmail(target.value)}
          placeholder="Enter mail"/>
      </label>
      <input type="submit"/>
    </form>
  );
};
