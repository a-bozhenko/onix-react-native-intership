import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const SearchField = (props) => {
  const { placeholderText, onChange, value } = props;

  const _onChangeInput = (e) => {
    console.log("_onChangeInput", e.target.value);

    onChange(e.target.value);
  };

  return (
    <div className={"searchWrapper"}>
      <input
        className={"searchInput"}
        type={"text"}
        placeholder={placeholderText}
        onChange={_onChangeInput}
        value={value}
      />
    </div>
  );
};

SearchField.propTypes = {};

export default SearchField;
