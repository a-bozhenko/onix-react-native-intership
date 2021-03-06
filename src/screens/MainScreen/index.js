import React, { useState, useEffect } from "react";
import { SearchField, ButtonSwitcher } from "../../components";
import { CONTENT_TYPES } from "../../helpers";
import { getAnyItemByType } from "../../api";
import Pagination from "../../components/Pagination";
import { MainWrapper } from "../../containers";
import ItemsList from "../../components/ItemsList";
import "./styles.css";
import Header from "../../components/Header";
import Loader from "../../components/Loader";

const MainScreen = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState({ text: "Films", id: CONTENT_TYPES.FILMS });
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onSearch();
  }, [page, type]);

  const onSearch = () => {
    getAnyItemByType(
      type.id,
      {
        page,
        query,
      },
      (response) => {
        setCount(response.count);
        setItems(response.results);
        scrollToTop();
        setLoading(false);
        setError("");
      },
      () => {
        setPage(1);
        setError("Something went wrong");
        setLoading(false);
      }
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const onChangeQuery = (newQuery) => {
    setQuery(newQuery);
  };

  const onChangeType = (newType) => {
    setQuery("");
    setPage(1);
    setType(newType);
  };

  const onChangePagination = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Header title={"Star Wars Search Info"} />
      <div className={"mainScreenRoot"}>
        {loading ? (
          <Loader />
        ) : (
          <MainWrapper>
            <SearchField
              placeholderText={"search for"}
              onChange={onChangeQuery}
              value={query}
              onSearch={onSearch}
              searchButtonText={"Search"}
            />

            <ButtonSwitcher
              selected={type}
              name={"typeSelector"}
              onChange={onChangeType}
              buttons={[
                { text: "Films", id: CONTENT_TYPES.FILMS },
                { text: "People", id: CONTENT_TYPES.PEOPLE },
                { text: "Planets", id: CONTENT_TYPES.PLANETS },
                { text: "Species", id: CONTENT_TYPES.SPECIES },
                { text: "Starships", id: CONTENT_TYPES.STARSHIPS },
                { text: "Vehicles", id: CONTENT_TYPES.VEHICLES },
              ]}
            />

            {!!error && <p>{error}</p>}

            <ItemsList items={items} itemsType={type} />

            <Pagination
              count={count}
              current={page}
              onChange={onChangePagination}
            />
          </MainWrapper>
        )}
      </div>
    </>
  );
};

export default MainScreen;
