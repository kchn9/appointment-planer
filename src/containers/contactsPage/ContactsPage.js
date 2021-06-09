import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList'

export const ContactsPage = (props) => {
  /*
  Define state variables for
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [isDuplicate, setDuplicate] = useState(false);

  useEffect(() => {
    const existingNames = props.contacts.map(contact => contact.name);
    if (existingNames.includes(name)) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, props.contacts])

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      props.addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          objectsArray={props.contacts}
        />
      </section>
    </div>
  );
};
