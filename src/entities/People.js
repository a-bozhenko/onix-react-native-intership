/**
 * Search Fields - "name"
 *@param {string} name -- The name of this person.
 *@param {string} birth_year -- The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
 *@param {string} eye_color -- The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye.
 *@param {string} gender -- The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.
 *@param {string} hair_color -- The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.
 *@param {string} height -- The height of the person in centimeters.
 *@param {string} mass -- The mass of the person in kilograms.
 *@param {string} skin_color -- The skin color of this person.
 *@param {string} homeworld -- The URL of a planet resource, a planet that this person was born on or inhabits.
 *@param {array} films -- An array of film resource URLs that this person has been in.
 *@param {array} species -- An array of species resource URLs that this person belongs to.
 *@param {array} starships -- An array of starship resource URLs that this person has piloted.
 *@param {array} vehicles -- An array of vehicle resource URLs that this person has piloted.
 *@param {string} url -- the hypermedia URL of this resource.
 *@param {string} created -- the ISO 8601 date format of the time that this resource was created.
 *@param {string} edited -- the ISO 8601 date format of the time that this resource was edited.
 */
export default class People {
  constructor(props) {
    this.name = props.name || "";
    this.birth_year = props.birth_year || "";
    this.eye_color = props.eye_color || "";
    this.gender = props.gender || "";
    this.hair_color = props.hair_color || "";
    this.height = props.height || "";
    this.mass = props.mass || "";
    this.skin_color = props.skin_color || "";
    this.homeworld = props.homeworld || "";
    this.films = props.films || [];
    this.species = props.species || [];
    this.starships = props.starships || [];
    this.vehicles = props.vehicles || [];
    this.url = props.url || "";
    this.created = props.created || "";
    this.edited = props.edited || "";
  }
}
