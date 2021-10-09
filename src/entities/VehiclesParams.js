/**
 *Search Fields "name" and "model"
 *@param {string} name  -- The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
 *@param {string} model  -- The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
 */
export default class VehiclesParams {
  constructor(props) {
    this.name = props.name || "";
    this.model = props.model || "";
  }
}
