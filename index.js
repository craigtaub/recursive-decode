function stringToDecode(myString){
    var tmpString = myString;
    var decodedString = decodeURIComponent(myString);

    if (decodedString === myString) {
      return decodedString;
    } else {
      return stringToDecode(decodedString);
    }
}

module.exports = stringToDecode
