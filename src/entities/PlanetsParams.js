/**
 *
 *@param {string} search  -- The name of this planet.
 *@param {number} page  -- page to load content

 */
export default class PlanetsParams {
  constructor(props) {
    this.search = props.query || "";
    this.page = props.page || 1;
  }
}
