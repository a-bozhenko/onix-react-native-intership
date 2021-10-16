import axios from "axios";
import {
  ENDPOINTS,
  getRequestConfig,
  replaceUrlPlaceholder,
  REQUEST_TYPES,
} from "./index";
import { makeParams } from "./config";
import {
  FilmsParams,
  PlanetsParams,
  PeopleParams,
  VehiclesParams,
  StarshipsParams,
  SpeciesParams,
} from "../entities";
import { CONTENT_TYPES } from "../helpers";

/**
 * get any item by type and params
 * @param {string} type
 * @param {object} params
 * @param {function} onSuccess
 * @param {function} onError
 * @returns {Promise<object>}
 */
export const getAnyItemByType = function (type, params, onSuccess, onError) {
  let endPoint;
  let paramsByType;

  switch (type) {
    case CONTENT_TYPES.FILMS: {
      endPoint = ENDPOINTS.API_GET_FILMS;
      paramsByType = makeParams(new FilmsParams(params));
      break;
    }
    case CONTENT_TYPES.PEOPLE: {
      endPoint = ENDPOINTS.API_GET_PEOPLE;
      paramsByType = makeParams(new PeopleParams(params));
      break;
    }
    case CONTENT_TYPES.PLANETS: {
      endPoint = ENDPOINTS.API_GET_PLANETS;
      paramsByType = makeParams(new PlanetsParams(params));
      break;
    }
    case CONTENT_TYPES.SPECIES: {
      endPoint = ENDPOINTS.API_GET_SPICES;
      paramsByType = makeParams(new SpeciesParams(params));
      break;
    }
    case CONTENT_TYPES.STARSHIPS: {
      endPoint = ENDPOINTS.API_GET_STARSHIPS;
      paramsByType = makeParams(new StarshipsParams(params));

      break;
    }
    case CONTENT_TYPES.VEHICLES: {
      endPoint = ENDPOINTS.API_GET_VEHICLES;
      paramsByType = makeParams(new VehiclesParams(params));
      break;
    }
    default: {
      endPoint = ENDPOINTS.API_GET_PEOPLE;
      paramsByType = makeParams(new PeopleParams(params));
      break;
    }
  }

  const config = getRequestConfig(REQUEST_TYPES.GET, endPoint);
  config.params = paramsByType;

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

/**
 * get single item by type id and params
 * @param {String} type
 * @param {String} id
 * @param {object} params
 * @param {function} onSuccess
 * @param {function} onError
 * @returns {Promise<object>}
 */
export const getSingleItemByTypeAndId = function (
  type,
  id,
  params,
  onSuccess,
  onError
) {
  let endPoint;
  let paramsByType;

  switch (type) {
    case CONTENT_TYPES.FILMS: {
      endPoint = ENDPOINTS.API_GET_FILMS_BY_ID;
      paramsByType = makeParams(new FilmsParams(params));
      break;
    }
    case CONTENT_TYPES.PEOPLE: {
      endPoint = ENDPOINTS.API_GET_PEOPLE_BY_ID;
      paramsByType = makeParams(new PeopleParams(params));
      break;
    }
    case CONTENT_TYPES.PLANETS: {
      endPoint = ENDPOINTS.API_GET_PLANETS_BY_ID;
      paramsByType = makeParams(new PlanetsParams(params));
      break;
    }
    case CONTENT_TYPES.SPECIES: {
      endPoint = ENDPOINTS.API_GET_SPICES_BY_ID;
      paramsByType = makeParams(new SpeciesParams(params));
      break;
    }
    case CONTENT_TYPES.STARSHIPS: {
      endPoint = ENDPOINTS.API_GET_STARSHIPS_BY_ID;
      paramsByType = makeParams(new StarshipsParams(params));

      break;
    }
    case CONTENT_TYPES.VEHICLES: {
      endPoint = ENDPOINTS.API_GET_VEHICLES_BY_ID;
      paramsByType = makeParams(new VehiclesParams(params));
      break;
    }
    default: {
      endPoint = ENDPOINTS.API_GET_PEOPLE;
      paramsByType = makeParams(new PeopleParams(params));
      break;
    }
  }

  const url = replaceUrlPlaceholder(endPoint, "id", id);

  const config = getRequestConfig(REQUEST_TYPES.GET, url);

  config.params = paramsByType;

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
export const getAllFilms = function (params, onSuccess, onError) {
  const config = getRequestConfig(REQUEST_TYPES.GET, ENDPOINTS.API_GET_FILMS);

  config.params = makeParams(new FilmsParams(params));

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

// ENDPOINTS.API_GET_FILMS_BY_ID
export const getFilmById = function (id, params, onSuccess, onError) {
  const url = replaceUrlPlaceholder(ENDPOINTS.API_GET_FILMS_BY_ID, "id", id);

  const config = getRequestConfig(REQUEST_TYPES.GET, url);

  config.params = makeParams(new FilmsParams(params));

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

// ENDPOINTS.API_GET_STARSHIPS
export const getAllStarships = function (params, onSuccess, onError) {
  const config = getRequestConfig(
    REQUEST_TYPES.GET,
    ENDPOINTS.API_GET_STARSHIPS
  );

  config.params = makeParams(new StarshipsParams(params));

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

// ENDPOINTS.API_GET_STARSHIPS_BY_ID
export const getStarshipById = function (id, params, onSuccess, onError) {
  const url = replaceUrlPlaceholder(
    ENDPOINTS.API_GET_STARSHIPS_BY_ID,
    "id",
    id
  );

  const config = getRequestConfig(REQUEST_TYPES.GET, url);

  config.params = makeParams(new StarshipsParams(params));

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

// ENDPOINTS.API_GET_VEHICLES
export const getAllVehicles = function (params, onSuccess, onError) {
  const config = getRequestConfig(
    REQUEST_TYPES.GET,
    ENDPOINTS.API_GET_VEHICLES
  );

  config.params = makeParams(new VehiclesParams(params));

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

// ENDPOINTS.API_GET_VEHICLES_BY_ID
export const getVehicleById = function (id, params, onSuccess, onError) {
  const url = replaceUrlPlaceholder(ENDPOINTS.API_GET_VEHICLES_BY_ID, "id", id);

  const config = getRequestConfig(REQUEST_TYPES.GET, url);

  config.params = makeParams(new VehiclesParams(params));

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

// ENDPOINTS.API_GET_SPICES
export const getAllSpices = function (params, onSuccess, onError) {
  const config = getRequestConfig(REQUEST_TYPES.GET, ENDPOINTS.API_GET_SPICES);

  config.params = makeParams(new SpeciesParams(params));

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

// ENDPOINTS.API_GET_SPICES_BY_ID
export const getSpicesById = function (id, params, onSuccess, onError) {
  const url = replaceUrlPlaceholder(ENDPOINTS.API_GET_SPICES_BY_ID, "id", id);

  const config = getRequestConfig(REQUEST_TYPES.GET, url);

  config.params = makeParams(new SpeciesParams(params));

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

// ENDPOINTS.API_GET_PLANETS
export const getAllPlanets = function (params, onSuccess, onError) {
  const config = getRequestConfig(REQUEST_TYPES.GET, ENDPOINTS.API_GET_PLANETS);

  config.params = makeParams(new PlanetsParams(params));

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

// ENDPOINTS.API_GET_PLANETS_BY_ID
export const getPlanetById = function (id, params, onSuccess, onError) {
  const url = replaceUrlPlaceholder(ENDPOINTS.API_GET_PLANETS_BY_ID, "id", id);

  const config = getRequestConfig(REQUEST_TYPES.GET, url);

  config.params = makeParams(new PlanetsParams(params));

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
