/**
 * Search Fields - "name"
 *@param {string} name -- The name of this person.
 */
export default class PeopleParams {
  constructor(props) {
    this.name = props.name || "";
  }
}
