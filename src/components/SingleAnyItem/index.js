import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "./styles.css";
import { makeFormattedFieldName } from "../../helpers";
import UrlsArray from "../UrlsArray";

const EXCLUDED_FIELDS = ["url"];
const DATE_FIELDS = ["created", "edited"];
const URL_FIELDS = ["homeworld"];

const SingleAnyItem = (props) => {
  const { item } = props;

  const drawField = (fieldArr) => {
    const fieldNameWithoutFormat = fieldArr[0];
    const formattedFieldName = makeFormattedFieldName(fieldNameWithoutFormat);
    const fieldBody = fieldArr[1];

    if (EXCLUDED_FIELDS.includes(fieldNameWithoutFormat)) return null;

    if (DATE_FIELDS.includes(fieldNameWithoutFormat))
      return (
        <div className={"singleAnyItemField"} key={fieldNameWithoutFormat}>
          <p className={"singleAnyItemFieldText"}>
            {formattedFieldName + ": " + drawDate(fieldBody)}
          </p>
        </div>
      );

    if (URL_FIELDS.includes(fieldNameWithoutFormat)) {
      return (
        <div className={"singleAnyItemField"} key={fieldNameWithoutFormat}>
          <p className={"singleAnyItemFieldText"}>
            {formattedFieldName + ": "}
          </p>
          <UrlsArray urls={[fieldBody]} />
        </div>
      );
    }

    if (typeof fieldBody === "string") {
      return (
        <div className={"singleAnyItemField"} key={fieldNameWithoutFormat}>
          <p className={"singleAnyItemFieldText"}>
            {formattedFieldName + ": " + fieldBody}
          </p>
        </div>
      );
    }

    if (Array.isArray(fieldBody) && !!fieldBody.length) {
      return (
        <div className={"singleAnyItemField"} key={fieldNameWithoutFormat}>
          <p className={"singleAnyItemFieldText"}>
            {formattedFieldName + ": "}
          </p>
          <UrlsArray urls={fieldBody} />
        </div>
      );
    }

    return null;
  };

  const drawDate = (date) => {
    return moment(date).format("YYYY-MM-DD");
  };

  const drawItemFromObject = () => {
    const itemFields = Object.entries(item);
    return itemFields.map((field) => drawField(field));
  };

  return (
    <div className={"singleAnyItemWrapper"}>
      {item.title && <p className={"singleAnyItemTitle"}>{item.title}</p>}
      {item.name && <p className={"singleAnyItemTitle"}>{item.name}</p>}

      {drawItemFromObject()}
    </div>
  );
};

SingleAnyItem.propTypes = {
  item: PropTypes.object.isRequired,
  isLast: PropTypes.bool,
};

export default SingleAnyItem;
