import React from "react";
import PropTypes from "prop-types";
import ListAnyItem from "../ListAnyItem";
import "./styles.css";

const propTypes = {
  items: PropTypes.array.isRequired,
  itemsType: PropTypes.string.isRequired,
};
const defaultProps = {
  items: [],
  itemsType: "",
};

const ItemsList = (props) => {
  const { items, itemsType } = props;

  const drawItems = () => {
    return items.map((item, index) => drawItem(item, index));
  };

  const drawItem = (item, index) => {
    const isLast = index === items.length - 1;

    return (
      <div key={item.url}>
        <ListAnyItem item={item} itemsType={itemsType} isLast={isLast} />
      </div>
    );
  };

  return <div className={"itemsListWrapper"}>{drawItems()}</div>;
};

ItemsList.propTypes = propTypes;
ItemsList.defaultProps = defaultProps;

export default ItemsList;
