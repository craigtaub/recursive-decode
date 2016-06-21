# Recursive Decode

Hand any string or url which has been encoded any number of times, and receive a single string back which is decoded and ready to use.

## Install
```
npm install recursive-decode
```

## Usage
```js
var recursiveDecode = require('recursive-decode');

var ourCrazyUrl = 'http%25253A%25252F%25252Fw3schools.com%25252Fmy-test.asp%25253Fname%25253Dst%2525C3%2525A5le%252526car%25253Dsaab';
var ourDecodedUrl = recursiveDecode(recursiveDecode); // returns http://w3schools.com/my-test.asp?name=ståle&car=saab
```

Easy..
