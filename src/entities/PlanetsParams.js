/**
 *
 *@param {string} name  -- The name of this planet.
 */
export default class PlanetsParams {
  constructor(props) {
    this.name = props.name || "";
  }
}
