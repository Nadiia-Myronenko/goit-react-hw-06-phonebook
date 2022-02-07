import { combineReducers } from "@reduxjs/toolkit";
import actions from "./conacts-actions";
import { createReducer } from "@reduxjs/toolkit";

const items = createReducer(
  [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  {
    [actions.formSubmitHandler]: (state, action) => [...state, action.payload],
    [actions.deleteContact]: (state, action) =>
      state.filter((item) => item.id !== action.payload),
  }
);
/*const items = (state = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
], { type, payload }) => {
    switch (type) {
        case types.ADD:
            return [...state, payload];
        case types.DELETE:
            return state.filter(item => item.id !== payload);
        default: return state;
    }
}*/
const filter = createReducer("", {
  [actions.onContactSearch]: (_, action) => action.payload,
});
/*const filter = (state = "", { type, payload }) => {
    switch (type) {
        case types.CHANGE_FILTER:
            return payload;
        default:
            return state;
    }
}*/
export default combineReducers({ items, filter }); //items:items, filter:filter
