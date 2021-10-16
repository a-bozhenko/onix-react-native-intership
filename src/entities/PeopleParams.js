/**
 * Search Fields - "name"
 *@param {string} search -- The name of this person.
 *@param {number} page  -- page to load content

 */
export default class PeopleParams {
  constructor(props) {
    this.search = props.query || "";
    this.page = props.page || 1;
  }
}
