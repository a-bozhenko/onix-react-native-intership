import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import BackButton from "../BackButton";

const Header = (props) => {
  const { title, withBackButton } = props;

  return (
    <div className={"headerRoot"}>
      {withBackButton ? (
        <BackButton />
      ) : (
        <div className={"headerRootPseudoBackButton"} />
      )}
      <h1 className={"headerTitle"}>{title}</h1>
      <div className={"headerRootPseudoBackButton"} />
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  withBackButton: PropTypes.bool,
};

export default Header;
