/**
 * Search Fields "title"
 *@param {string} title  -- The title of this film
 *@param {number} episode_id  -- The episode number of this film.
 *@param {string} opening_crawl  -- The opening paragraphs at the beginning of this film.
 *@param {string} director  -- The name of the director of this film.
 *@param {string} producer  -- The name(s) of the producer(s) of this film. Comma separated.
 *@param {date} release_date  -- The ISO 8601 date format of film release at original creator country.
 *@param {array} species  -- An array of species resource URLs that are in this film.
 *@param {array} starships  -- An array of starship resource URLs that are in this film.
 *@param {array} vehicles  -- An array of vehicle resource URLs that are in this film.
 *@param {array} characters  -- An array of people resource URLs that are in this film.
 *@param {array} planets  -- An array of planet resource URLs that are in this film.
 *@param {string} url  -- the hypermedia URL of this resource.
 *@param {string} created  -- the ISO 8601 date format of the time that this resource was created.
 *@param {string} edited  -- the ISO 8601 date format of the time that this resource was edited.
 */
export default class Film {
  constructor(props) {
    this.title = props.title || "";
    this.episode_id = props.episode_id || 0;
    this.opening_crawl = props.opening_crawl || "";
    this.director = props.director || "";
    this.producer = props.producer || "";
    this.release_date = props.release_date || new Date();
    this.species = props.species || [];
    this.starships = props.starships || [];
    this.vehicles = props.vehicles || [];
    this.characters = props.characters || [];
    this.planets = props.planets || [];
    this.url = props.url || "";
    this.created = props.created || "";
    this.edited = props.edited || "";
  }
}
