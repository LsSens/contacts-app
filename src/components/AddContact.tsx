import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/actions/contactActions";
import { Button, Container, ErrorMessage, Input, Title } from "../styles/GlobalStyle";

const AddContact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleAddContact = () => {
    if (!name || !email || !phone) {
      setError("All fields are required.");
      return;
    }

    const newContact = { id: Date.now().toString(), name, email, phone };
    dispatch(addContact(newContact));
    setName("");
    setEmail("");
    setPhone("");
    setError("");
  };

  return (
    <Container>
      <Title>Add Contact</Title>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddContact();
        }}
      >
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <Button type="submit">Add</Button>
      </form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default AddContact;
