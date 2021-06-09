import React from "react";

export const ContactPicker = (props) => {
  return (
    <select value={props.contact} onChange={props.onChange}>
      {props.contacts.map(contact => <option value={contact.name}>{contact.name}</option>)}
    </select>
  );
};
