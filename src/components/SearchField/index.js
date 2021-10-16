import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import SearchButton from "../SearchButton";

const propTypes = {
  placeholderText: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  onSearch: PropTypes.func,
  searchButtonText: PropTypes.string,
};

const SearchField = (props) => {
  const { placeholderText, onChange, value, onSearch, searchButtonText } =
    props;

  const _onChangeInput = (e) => {
    onChange(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.charCode === 13) {
      onSearch();
    }
  };

  return (
    <div className={"searchWrapper"}>
      <input
        className={"searchInput"}
        type={"text"}
        placeholder={placeholderText}
        onChange={_onChangeInput}
        value={value}
        onKeyPress={handleEnterPress}
      />
      <SearchButton onClick={onSearch} text={searchButtonText} />
    </div>
  );
};

SearchField.propTypes = propTypes;

export default SearchField;
