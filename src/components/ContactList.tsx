import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeContact,
  editContact,
  setEditingContact,
} from "../redux/actions/contactActions";
import { Button, ContactInfo, ContactItem, Container, Input, Title } from "../styles/GlobalStyle";

const ContactList: React.FC = () => {
  const contacts = useSelector((state: any) => state.contacts);
  const editingContactId = useSelector((state: any) => state.editingContactId);
  const dispatch = useDispatch();

  const [editedContact, setEditedContact] = useState<any>({});

  const handleRemove = (id: string) => {
    dispatch(removeContact(id));
  };

  const handleEditClick = (contact: any) => {
    if (editingContactId === contact.id) {
      dispatch(editContact(editedContact));
      dispatch(setEditingContact(null));
      setEditedContact({});
    } else {
      dispatch(setEditingContact(contact.id));
      setEditedContact({ ...contact });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedContact((prev: any) => {
      const updatedContact = { ...prev, [name]: value };
      console.log("Updated contact:", updatedContact);
      return updatedContact;
    });
  };

  return (
    <Container>
      <Title>Contact List</Title>
      {contacts.map((contact: any) => (
        <ContactItem key={contact.id}>
          {editingContactId === contact.id ? (
            <ContactInfo>
              <Input
                type="text"
                name="name"
                value={editedContact.name || ""}
                onChange={handleInputChange}
                placeholder="Name"
              />
              <Input
                type="email"
                name="email"
                value={editedContact.email || ""}
                onChange={handleInputChange}
                placeholder="Email"
              />
              <Input
                type="text"
                name="phone"
                value={editedContact.phone || ""}
                onChange={handleInputChange}
                placeholder="Phone"
              />
            </ContactInfo>
          ) : (
            <ContactInfo>
              <span>
                <strong>Name:</strong> {contact.name}
              </span>
              <span>
                <strong>Email:</strong> {contact.email}
              </span>
              <span>
                <strong>Phone:</strong> {contact.phone}
              </span>
            </ContactInfo>
          )}
          <div>
            <Button onClick={() => handleEditClick(contact)}>
              {editingContactId === contact.id ? "Save" : "Edit"}
            </Button>
            <Button onClick={() => handleRemove(contact.id)}>Remove</Button>
          </div>
        </ContactItem>
      ))}
    </Container>
  );
};

export default ContactList;
