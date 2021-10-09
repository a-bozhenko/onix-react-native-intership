/**
 * Search Fields "title"
 *@param {string} title  -- The title of this film
 */
export default class FilmsParams {
  constructor(props) {
    this.title = props.title || "";
  }
}
