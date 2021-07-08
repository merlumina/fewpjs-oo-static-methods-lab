class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    let stringArray = string.split(' ');
    const doNotCapitalize = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    stringArray[0] = this.capitalize(stringArray[0]);
    for (let i = 1; i < stringArray.length; i++) {
      if (!doNotCapitalize.find(element => element == stringArray[i].toLowerCase())) {
        stringArray[i] = this.capitalize(stringArray[i]);
      }
    }
    return stringArray.join(' ');
  }

}