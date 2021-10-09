/**
 *Search Fields "name" and "model"
 *@param {string} name  -- The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
 *@param {string} model  -- The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
 *@param {string} vehicle_class  -- The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
 *@param {string} manufacturer  -- The manufacturer of this vehicle. Comma separated if more than one.
 *@param {string} length  -- The length of this vehicle in meters.
 *@param {string} cost_in_credits  -- The cost of this vehicle new, in Galactic Credits.
 *@param {string} crew  -- The number of personnel needed to run or pilot this vehicle.
 *@param {string} passengers  -- The number of non-essential people this vehicle can transport.
 *@param {string} max_atmosphering_speed  -- The maximum speed of this vehicle in the atmosphere.
 *@param {string} cargo_capacity  -- The maximum number of kilograms that this vehicle can transport.
 *@param {string} consumables -- The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
 *@param {array} films  -- An array of Film URL Resources that this vehicle has appeared in.
 *@param {array} pilots  -- An array of People URL Resources that this vehicle has been piloted by.
 *@param {string} url  -- the hypermedia URL of this resource.
 *@param {string} created  -- the ISO 8601 date format of the time that this resource was created.
 *@param {string} edited  -- the ISO 8601 date format of the time that this resource was edited.
 */
export default class Vehicle {
  constructor(props) {
    this.name = props.name || "";
    this.model = props.model || "";
    this.vehicle_class = props.vehicle_class || "";
    this.manufacturer = props.manufacturer || "";
    this.length = props.length || "";
    this.cost_in_credits = props.cost_in_credits || "";
    this.crew = props.crew || "";
    this.passengers = props.passengers || "";
    this.max_atmosphering_speed = props.max_atmosphering_speed || "";
    this.cargo_capacity = props.cargo_capacity || "";
    this.consumables = props.consumables || "";
    this.films = props.films || [];
    this.pilots = props.pilots || [];
    this.url = props.url || "";
    this.created = props.created || "";
    this.edited = props.edited || "";
  }
}
