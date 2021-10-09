import axios from "axios";
import {
  ENDPOINTS,
  getRequestConfig,
  replaceUrlPlaceholder,
  REQUEST_TYPES,
} from "./index";
import { makeParams } from "./config";
import { PeopleParams } from "../entities";

// ENDPOINTS.API_GET_PEOPLE

export const getAllPeople = function (params, onSuccess, onError) {
  const config = getRequestConfig(REQUEST_TYPES.GET, ENDPOINTS.API_GET_PEOPLE);

  config.params = makeParams(new PeopleParams(params));

  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        resolve(response.data);
        onSuccess && onSuccess(response.data);
      })
      .catch((error) => {
        reject(error);
        onError && onError(error);
      });
  });
};

// ENDPOINTS.API_GET_PEOPLE_BY_ID

export const getPeopleById = function (id, params, onSuccess, onError) {
  const url = replaceUrlPlaceholder(ENDPOINTS.API_GET_PEOPLE_BY_ID, "id", id);

  const config = getRequestConfig(REQUEST_TYPES.GET, url);

  config.params = makeParams(new PeopleParams(params));

  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        resolve(response.data);
        onSuccess && onSuccess(response.data);
      })
      .catch((error) => {
        reject(error);
        onError && onError(error);
      });
  });
};

// ENDPOINTS.API_GET_FILMS
// ENDPOINTS.API_GET_FILMS_BY_ID

// ENDPOINTS.API_GET_STARSHIPS
// ENDPOINTS.API_GET_STARSHIPS_BY_ID

// ENDPOINTS.API_GET_VEHICLES
// ENDPOINTS.API_GET_VEHICLES_BY_ID

// ENDPOINTS.API_GET_SPICES
// ENDPOINTS.API_GET_SPICES_BY_ID

// ENDPOINTS.API_GET_PLANETS
// ENDPOINTS.API_GET_PLANETS_BY_ID
