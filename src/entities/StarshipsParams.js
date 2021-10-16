/**
 *Search Fields "name" and "model"
 *@param {string} search  -- The name of this starship. The common name, such as "Death Star".
 *@param {string} model  -- The model or official name of this starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station".
 *@param {number} page  -- page to load content

 */
export default class StarshipsParams {
  constructor(props) {
    this.search = props.query || "";
    this.page = props.page || 1;
  }
}
