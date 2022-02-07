import React from "react";
import PropTypes from "prop-types";
import { SearchInput } from "./SearchField.styled";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/conacts-actions";

const SearchField = ({ value, onChange }) => {
  console.log(value);
  return <SearchInput type="text" value={value} onChange={onChange} />;
};
const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = (dispatch) => ({
  onChange: (e) =>
    dispatch(contactsActions.onContactSearch(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);

SearchField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
