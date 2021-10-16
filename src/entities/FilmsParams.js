/**
 * Search Fields "title"
 *@param {string} search  -- The title of this film
 *@param {number} page  -- page to load content
 */
export default class FilmsParams {
  constructor(props) {
    this.search = props.query || "";
    this.page = props.page || 1;
  }
}
