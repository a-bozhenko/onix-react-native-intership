/**
 *Search Fields "name" and "model"
 *@param {string} name  -- The name of this starship. The common name, such as "Death Star".
 *@param {string} model  -- The model or official name of this starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station".
 *@param {string} starship_class  -- The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
 *@param {string} manufacturer  -- The manufacturer of this starship. Comma separated if more than one.
 *@param {string} cost_in_credits  -- The cost of this starship new, in galactic credits.
 *@param {string} length  -- The length of this starship in meters.
 *@param {string} crew  -- The number of personnel needed to run or pilot this starship.
 *@param {string} passengers  -- The number of non-essential people this starship can transport.
 *@param {string} max_atmosphering_speed  -- The maximum speed of this starship in the atmosphere. "N/A" if this starship is incapable of atmospheric flight.
 *@param {string} hyperdrive_rating  -- The class of this starships hyperdrive.
 *@param {string} MGLT  -- The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.
 *@param {string} cargo_capacity  -- The maximum number of kilograms that this starship can transport.
 *@param {string} consumables
 *@param {number} maximum The length of time that this starship can provide consumables for its entire crew without having to resupply.
 *@param {array} films  -- An array of Film URL Resources that this starship has appeared in.
 *@param {array} pilots  -- An array of People URL Resources that this starship has been piloted by.
 *@param {string} url  -- the hypermedia URL of this resource.
 *@param {string} created  -- the ISO 8601 date format of the time that this resource was created.
 *@param {string} edited  -- the ISO 8601 date format of the time that this resource was edited.
 */
export default class Starship {
  constructor(props) {
    this.name = props.name || "";
    this.model = props.model || "";
    this.starship_class = props.starship_class || "";
    this.manufacturer = props.manufacturer || "";
    this.cost_in_credits = props.cost_in_credits || "";
    this.crew = props.crew || "";
    this.string = props.string || "";
    this.passengers = props.passengers || "";
    this.max_atmosphering_speed = props.max_atmosphering_speed || "";
    this.hyperdrive_rating = props.hyperdrive_rating || "";
    this.MGLT = props.MGLT || "";
    this.cargo_capacity = props.cargo_capacity || "";
    this.consumables = props.consumables || "";
    this.maximum = props.maximum || 0;
    this.films = props.films || [];
    this.pilots = props.pilots || [];
    this.url = props.url || "";
    this.edited = props.created || "";
    this.edited = props.edited || "";
  }
}
