/**
 *Search Fields "name" and "model"
 *@param {string} name  -- The name of this starship. The common name, such as "Death Star".
 *@param {string} model  -- The model or official name of this starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station".
 */
export default class StarshipsParams {
  constructor(props) {
    this.name = props.name || "";
    this.model = props.model || "";
  }
}
