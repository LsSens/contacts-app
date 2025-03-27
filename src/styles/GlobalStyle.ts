import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
  }
`;
const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 8px 12px;
  margin-left: 5px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  color: #fff;
  background-color: #007bff;

  &:first-child {
    background-color: #007bff;
  }

  &:nth-child(2) {
    background-color: #dc3545;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const ErrorMessage = styled.p`
  color: #dc3545;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`;

export {
  GlobalStyle,
  Container,
  Title,
  ContactItem,
  ContactInfo,
  Input,
  Button,
  ErrorMessage,
};
