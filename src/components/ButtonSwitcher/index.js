import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.css";

const ButtonSwitcher = (props) => {
  const { buttons, onChange, name } = props;
  const [selected, setSelected] = useState(buttons[0]);

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  const drawButtons = () => {
    return buttons.map(drawButton);
  };

  const drawButton = (button) => {
    return (
      <div key={button.id} className={"buttonSwitcher"}>
        <input
          type="radio"
          name={name}
          id={button.id}
          checked={selected.id === button.id}
          onChange={() => setSelected(button)}
          className={"buttonSwitcherInput"}
        />
        <label htmlFor={button.id} className={"buttonSwitcherLabel"}>
          {button.text}
        </label>
      </div>
    );
  };

  return <div className={"buttonSwitcherWrapper"}>{drawButtons()}</div>;
};

ButtonSwitcher.propTypes = {
  buttons: PropTypes.array,
};
ButtonSwitcher.defaultProps = {
  buttons: [],
  onChange: () => {},
};

export default ButtonSwitcher;
