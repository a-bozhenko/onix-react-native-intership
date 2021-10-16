import React from "react";
import PropTypes from "prop-types";
import { getNumberOfPages } from "../../helpers";
import "./styles.css";

const propTypes = {
  count: PropTypes.number.isRequired,
  current: PropTypes.number,
  onChange: PropTypes.func,
};
const defaultProps = {
  count: 10,
  current: 1,
};

const Pagination = (props) => {
  const { count, current, onChange } = props;

  const numberOfButtons = new Array(getNumberOfPages(count)).fill();

  const drawButton = (pageNumber) => {
    const fixZeroPage = pageNumber + 1;

    return (
      <div
        onClick={() => onChange(fixZeroPage)}
        key={`pp_${fixZeroPage}`}
        className={`paginationButton ${
          current === fixZeroPage && "paginationActiveButton"
        }`}
      >
        <p className={"paginationButtonText"}>{fixZeroPage}</p>
      </div>
    );
  };

  const drawButtons = () => {
    return numberOfButtons.map((item, index) => drawButton(index));
  };

  return <div className={"paginationWrapper"}>{drawButtons()}</div>;
};

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
