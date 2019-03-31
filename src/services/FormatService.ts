export default class FormatService {

    constructor(){}

    /**
     * capitalizeFirstLetter
     * 
     * @param value string Capitalizes the first letter of a string
     * @return string
     */
    public capitalizeFirstLetter(value:string) {
      return value.charAt(0).toUpperCase() + value.slice(1);
  }

    /**
     * toCamelCase
     * 
     * @param value string Converts to a CamelCase PHP namespace
     * @return string
     */
    public toClassName(value:string) {
      var frags = value.split('_');
      for (let i = 0; i<frags.length; i++) {
        frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
      }
      return frags.join('');
    }
}