var request = require('request');
var convert = require('xml-js');
// var fs = require('fs');


function getImages(cb) {

  fetch('http://thecatapi.com/api/images/get?format=xml&results_per_page=100')
  .then(function(response) { 
    return response.text()
  }).then(function(data) {
    var result = convert.xml2js(data, {compact: true, spaces: 4});
    var array =[]

    result.response.data.images.image.forEach(function(x) {
      array.push(x.url._text)
    })

    cb({array}) 
  })
}

module.exports = { getImages };
