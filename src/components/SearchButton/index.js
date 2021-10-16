import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const SearchButton = (props) => {
  const { onClick, text } = props;

  return (
    <div onClick={onClick} className={"searchButtonWrapper"}>
      <p className={"searchButtonText"}>{text}</p>
    </div>
  );
};

SearchButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default SearchButton;
