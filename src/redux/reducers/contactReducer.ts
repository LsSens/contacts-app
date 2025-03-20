import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  EDIT_CONTACT,
} from "../actions/contactActions";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface State {
  contacts: Contact[];
}

const initialState: State = {
  contacts: [],
};

const contactReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id
            ? { ...contact, ...action.payload }
            : contact
        ),
      };
    default:
      return state;
  }
};

export default contactReducer;
