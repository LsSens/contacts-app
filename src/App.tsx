// src/App.tsx
import React from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { GlobalStyle, Title } from "./styles/GlobalStyle";
import { Provider } from "react-redux";
import store from "./redux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Title>Contact Manager</Title>
        <GlobalStyle />
        <AddContact />
        <ContactList />
      </div>
    </Provider>
  );
};

export default App;
