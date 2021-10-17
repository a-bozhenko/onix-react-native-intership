import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

const BackButton = () => {
  const history = useHistory();

  return (
    <div onClick={() => history.goBack()} className={"backButtonWrapper"}>
      <p className={"backButtonText"}>{"<"}</p>
    </div>
  );
};

export default BackButton;
