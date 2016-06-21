var recursiveDecode = require('../index');
var assert = require('assert');

describe('Recursive Decode', function() {
  it('should return normal string', function() {
      var result = recursiveDecode('hello')

      assert.equal(result, 'hello');
  });

  it('should return single encoded string decoded', function() {
      var singleEncodedUrl = 'http%3A%2F%2Fw3schools.com%2Fmy-test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab';
      var decodedUrl = 'http://w3schools.com/my-test.asp?name=ståle&car=saab';

      var result = recursiveDecode(singleEncodedUrl)
      assert.equal(result, decodedUrl);
  });

  it('should return double encoded string decoded', function() {
      var doubleEncodedUrl = 'http%253A%252F%252Fw3schools.com%252Fmy-test.asp%253Fname%253Dst%25C3%25A5le%2526car%253Dsaab';
      var decodedUrl = 'http://w3schools.com/my-test.asp?name=ståle&car=saab';

      var result = recursiveDecode(doubleEncodedUrl)
      assert.equal(result, decodedUrl);
  });

  it('should return tripe encoded string decoded', function() {
      var tripeEncodedUrl = 'http%25253A%25252F%25252Fw3schools.com%25252Fmy-test.asp%25253Fname%25253Dst%2525C3%2525A5le%252526car%25253Dsaab';
      var decodedUrl = 'http://w3schools.com/my-test.asp?name=ståle&car=saab';

      var result = recursiveDecode(tripeEncodedUrl)
      assert.equal(result, decodedUrl);
  });
});
