/**
 *Search Fields "name" and "model"
 *@param {string} search  -- The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
 *@param {string} model  -- The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
 *@param {number} page  -- page to load content

 */
export default class VehiclesParams {
  constructor(props) {
    this.search = props.query || "";
    this.page = props.page || 1;
  }
}
