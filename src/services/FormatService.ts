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
}