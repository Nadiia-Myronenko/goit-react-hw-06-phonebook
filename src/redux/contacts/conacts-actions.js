import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const formSubmitHandler = createAction("contats/add", (data) => ({
  payload: {
    id: shortid.generate(),
    name: data.name,
    number: data.number,
  },
}));
/*const formSubmitHandler = data => ({
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        name: data.name,
        number: data.number,
    }
});*/
const deleteContact = createAction("contacts/delete");
/*const deleteContact = (contactId) => ({
    type: types.DELETE,
    payload: contactId
});*/
const onContactSearch = createAction("contacts/changeFilter");
/*
const onContactSearch = (value) => ({
    type: types.CHANGE_FILTER,
    payload: value
})*/
const actions = { formSubmitHandler, deleteContact, onContactSearch };
export default actions;
