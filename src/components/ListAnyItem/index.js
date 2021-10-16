import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { makeFormattedFieldName } from "../../helpers";

const EXCLUDED_FIELDS = [
  //urls
  "url",
  "homeworld",
  //dates
  "created",
  "edited",
];
const ListAnyItem = (props) => {
  const { item, isLast } = props;

  const drawField = (fieldArr) => {
    const fieldNameWithoutFormat = fieldArr[0];
    const formattedFieldName = makeFormattedFieldName(fieldNameWithoutFormat);
    const fieldBody = fieldArr[1];

    if (EXCLUDED_FIELDS.includes(fieldNameWithoutFormat)) return null;

    if (typeof fieldBody === "string") {
      return (
        <div className={"listAnyItemField"}>
          <p className={"listAnyItemFieldText"}>
            {formattedFieldName + ": " + fieldBody}
          </p>
        </div>
      );
    }

    return null;
  };

  const drawItemFromObject = () => {
    const itemFields = Object.entries(item);
    return itemFields.map((field) => drawField(field));
  };

  return (
    <div className={`listAnyItemWrapper ${isLast && "listAnyItemWrapperLast"}`}>
      {item.title && <p className={"listAnyItemTitle"}>{item.title}</p>}
      {item.name && <p className={"listAnyItemTitle"}>{item.name}</p>}

      {drawItemFromObject()}
    </div>
  );
};

ListAnyItem.propTypes = {
  item: PropTypes.object.isRequired,
  isLast: PropTypes.bool,
};

export default ListAnyItem;
