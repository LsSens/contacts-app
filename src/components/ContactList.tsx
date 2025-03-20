
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeContact, editContact } from "../redux/actions/contactActions";

const ContactList: React.FC = () => {
  const contacts = useSelector((state: any) => state.contacts);
  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeContact(id));
  };

  const handleEdit = (contact: any) => {
    dispatch(editContact({ ...contact, name: "Edited Name" }));
  };

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.map((contact: any) => (
        <div key={contact.id}>
          <span>{contact.name}</span> - <span>{contact.email}</span> -{" "}
          <span>{contact.phone}</span>
          <button onClick={() => handleEdit(contact)}>Edit</button>
          <button onClick={() => handleRemove(contact.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
