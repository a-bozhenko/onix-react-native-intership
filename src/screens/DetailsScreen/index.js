import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { getSingleItemByTypeAndId } from "../../api";
import Loader from "../../components/Loader";
import { MainWrapper } from "../../containers";
import "./styles.css";
import SingleAnyItem from "../../components/SingleAnyItem";
import Header from "../../components/Header";
import { CONTENT_TYPES } from "../../helpers";

const DetailsScreen = (props) => {
  const { type } = props;
  const params = useParams();
  const { id: itemId } = params;
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getSingleItemByTypeAndId(type, itemId, {})
      .then((response) => {
        setError("");
        setItem(response);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, [type, itemId]);

  const getTitle = () => {
    switch (type) {
      case CONTENT_TYPES.FILMS: {
        return "Film detail";
      }

      case CONTENT_TYPES.PEOPLE: {
        return "Character detail";
      }

      case CONTENT_TYPES.PLANETS: {
        return "Planet detail";
      }

      case CONTENT_TYPES.SPECIES: {
        return "Species detail";
      }

      case CONTENT_TYPES.STARSHIPS: {
        return "Starship detail";
      }

      case CONTENT_TYPES.VEHICLES: {
        return "Vehicle detail";
      }

      default: {
        return "Star Wars Search Info";
      }
    }
  };

  return (
    <>
      <Header title={getTitle()} withBackButton />
      <div className={"detailsScreenRoot"}>
        <MainWrapper>
          {loading ? <Loader /> : <SingleAnyItem item={item} />}
          {!!error && <p>{error}</p>}
        </MainWrapper>
      </div>
    </>
  );
};

DetailsScreen.propTypes = {
  type: PropTypes.string,
};

export default DetailsScreen;
