import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SearchField, ButtonSwitcher } from "../../components";
import { CONTENT_TYPES } from "../../helpers";
import { getPeopleById } from "../../api";

const MainScreen = (props) => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    getPeopleById(
      1,
      {},
      (response) => {
        console.log("error", response);
      },
      (error) => {
        console.log("error", error, error?.response);
      }
    );
  });

  const onChangeQuery = (newQuery) => {
    console.log("onChangeQuery", query);
    setQuery(newQuery);
  };

  const onChangeType = (type) => {
    console.log("onChangeType", type);
  };

  return (
    <div>
      <SearchField
        placeholderText={"search for"}
        onChange={onChangeQuery}
        value={query}
      />
      <ButtonSwitcher
        name={"typeSelector"}
        onChange={onChangeType}
        buttons={[
          { text: "films", id: CONTENT_TYPES.FILMS },
          { text: "people", id: CONTENT_TYPES.PEOPLE },
          { text: "planets", id: CONTENT_TYPES.PLANETS },
          { text: "species", id: CONTENT_TYPES.SPECIES },
          { text: "starships", id: CONTENT_TYPES.STARSHIPS },
          { text: "vehicles", id: CONTENT_TYPES.VEHICLES },
        ]}
      />
    </div>
  );
};

MainScreen.propTypes = {};

export default MainScreen;
