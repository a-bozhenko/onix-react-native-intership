/**
 *
 *@param {string} name  -- The name of this planet.
 *@param {string} diameter  -- The diameter of this planet in kilometers.
 *@param {string} rotation_period  -- The number of standard hours it takes for this planet to complete a single rotation on its axis.
 *@param {string} orbital_period  -- The number of standard days it takes for this planet to complete a single orbit of its local star.
 *@param {string} gravity  -- A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
 *@param {string} population  -- The average population of sentient beings inhabiting this planet.
 *@param {string} climate  -- The climate of this planet. Comma separated if diverse.
 *@param {string} terrain  -- The terrain of this planet. Comma separated if diverse.
 *@param {string} surface_water  -- The percentage of the planet surface that is naturally occurring water or bodies of water.
 *@param {array} residents  -- An array of People URL Resources that live on this planet.
 *@param {array} films  -- An array of Film URL Resources that this planet has appeared in.
 *@param {string} url  -- the hypermedia URL of this resource.
 *@param {string} created  -- the ISO 8601 date format of the time that this resource was created.
 *@param {string} edited  -- the ISO 8601 date format of the time that this resource was edited.
 */
export default class Planet {
  constructor(props) {
    this.name = props.name || "";
    this.diameter = props.diameter || "";
    this.rotation_period = props.rotation_period || "";
    this.orbital_period = props.orbital_period || "";
    this.gravity = props.gravity || "";
    this.population = props.population || "";
    this.climate = props.climate || "";
    this.terrain = props.terrain || "";
    this.surface_water = props.surface_water || "";
    this.residents = props.residents || [];
    this.films = props.films || [];
    this.url = props.url || "";
    this.created = props.created || "";
    this.edited = props.edited || "";
  }
}
