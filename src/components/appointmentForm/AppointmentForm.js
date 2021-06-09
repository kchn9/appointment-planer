import React from "react";

import { ContactPicker } from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title-input">
        Title
        <input
          id="title-input"
          type="text"
          value={title}
          onChange={({target}) => setTitle(target.value)}
        />
      </label>
      <label htmlFor="contact-picker">
        <ContactPicker
          id="contact-picker"
          contact={contact}
          contacts={contacts}
          onChange={({target}) => setContact(target.value)}
        />
      </label>
      <label htmlFor="date-input">
        Date
        <input
          id="date-input"
          type="date"
          value={date}
          onChange={({target}) => setDate(target.value)}
          min={getTodayString()}
        />
      </label>
      <label htmlFor="time-input">
        Time
        <input
          id="time-input"
          type="time"
          value={time}
          onChange={({target}) => setTime(target.value)}
        />
      </label>
      <input type="submit"/>
    </form>
  );
};
