import React from "react";
import PropTypes from "prop-types";
import { urlReader } from "../../helpers";
import "./styles.css";

const UrlsArray = (props) => {
  const { urls } = props;

  const drawArrayOfUrls = () => {
    return urls.map((item, index) => drawUrlItem(item, index));
  };

  const drawUrlItem = (url, index) => {
    const number = index + 1;

    return (
      <div
        key={url}
        onClick={() => onItemPress(url)}
        className={"urlsArrayItemWrapper"}
      >
        <p className={"urlsArrayItemText"}>{number}</p>
      </div>
    );
  };

  const onItemPress = (url) => {
    document.location.pathname = urlReader(url);
  };

  return <div className={"urlsArrayItemRoot"}>{drawArrayOfUrls()}</div>;
};

UrlsArray.propTypes = {
  urls: PropTypes.array.isRequired,
};

export default UrlsArray;
