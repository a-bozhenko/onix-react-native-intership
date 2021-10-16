import React from "react";
import "./styles.css";

const MainWrapper = (props) => {
  return <div className={"mainWrapper"}>{props.children}</div>;
};

export default MainWrapper;
