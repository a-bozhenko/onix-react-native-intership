/**
 *
 *@param {string} search  -- The name of this species.
 *@param {number} page  -- page to load content

 */
export default class SpeciesParams {
  constructor(props) {
    this.search = props.query || "";
    this.page = props.page || 1;
  }
}
