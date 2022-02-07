import React from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  Name,
  Number,
  DeleteButton,
} from "./ContactsList.styled";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/conacts-actions";

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Name>{name}</Name>
          <Number>{number}</Number>
          <DeleteButton onClick={() => onDeleteContact(id)} />
        </ListItem>
      ))}
    </List>
  );
};

const mapStateToProps = (state) => {
  const { filter, items } = state.contacts;
  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );
  return { contacts: visibleContacts };
};
const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
