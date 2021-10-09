/**
 *
 *@param {string} name  -- The name of this species.
 *@param {string} classification  -- The classification of this species, such as "mammal" or "reptile".
 *@param {string} designation  -- The designation of this species, such as "sentient".
 *@param {string} average_height  -- The average height of this species in centimeters.
 *@param {string} average_lifespan  -- The average lifespan of this species in years.
 *@param {string} eye_colors  -- A comma-separated string of common eye colors for this species, "none" if this species does not typically have eyes.
 *@param {string} hair_colors  -- A comma-separated string of common hair colors for this species, "none" if this species does not typically have hair.
 *@param {string} skin_colors  -- A comma-separated string of common skin colors for this species, "none" if this species does not typically have skin.
 *@param {string} language  -- The language commonly spoken by this species.
 *@param {string} homeworld  -- The URL of a planet resource, a planet that this species originates from.
 *@param {array} people  -- An array of People URL Resources that are a part of this species.
 *@param {array} films  -- An array of Film URL Resources that this species has appeared in.
 *@param {string} url  -- the hypermedia URL of this resource.
 *@param {string} created  -- the ISO 8601 date format of the time that this resource was created.
 *@param {string} edited  -- the ISO 8601 date format of the time that this resource was edited.
 */
export default class Specie {
  constructor(props) {
    this.name = props.name || "";
    this.designation = props.designation || "";
    this.average_height = props.average_height || "";
    this.average_lifespan = props.average_lifespan || "";
    this.eye_colors = props.eye_colors || "";
    this.hair_colors = props.hair_colors || "";
    this.skin_colors = props.skin_colors || "";
    this.language = props.language || "";
    this.homeworld = props.homeworld || "";
    this.people = props.people || [];
    this.films = props.films || [];
    this.url = props.url || "";
    this.created = props.created || "";
    this.edited = props.edited || "";
  }
}
