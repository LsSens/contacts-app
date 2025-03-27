export const ADD_CONTACT = "ADD_CONTACT";
export const REMOVE_CONTACT = "REMOVE_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const SET_EDITING_CONTACT = "SET_EDITING_CONTACT";

export const addContact = (contact: any) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const removeContact = (id: string) => ({
  type: REMOVE_CONTACT,
  payload: id,
});

export const editContact = (contact: any) => ({
  type: EDIT_CONTACT,
  payload: contact,
});

export const setEditingContact = (id: string | null) => ({
  type: SET_EDITING_CONTACT,
  payload: id,
});
