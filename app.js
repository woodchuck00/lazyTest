var cat = require('./cat');

var myList = document.querySelector('div')

var c = cat.getImages(function(x) {
  x.array.forEach(function(x) {
    var listItem = document.createElement('img');
    listItem.src = 'data:image/gif;base64,R0lGODlhIAAgAIAAAAAAAP///yH/C05FVFNDQVBFMi4wAwHoAwAh/nZERU1PIFZFUlNJT04gOiBCdWlsdCB3aXRoIGFuIFVOUkVHSVNURVJFRCBjb3B5IG9mIEdJRiBNb3ZpZSBHZWFyIDIuNg0KZnJvbSBnYW1hbmkgcHJvZHVjdGlvbnMgKGh0dHA6Ly93d3cuZ2FtYW5pLmNvbSkuACH5BAAKAAAALAAAAAAgACAAAwJijI+py+2fgJy0Snispthc+HWb1mXAE4qnk2LXCQdxC66z7K2lbOO2vuN5cMIg4vMzKkI0pbDpfAGdpiK1mrtmj9NgE1prgMXdSJl1xpbGVhUqzRhZduytSz5X4Tnavv+fUAAAIfkEAAoAAAAsDwAIAAEACwADAgRMcKZQACH5BAAKAAAALA8ACAADAA0AAwIKjAOomcePGmjOFAAh+QQACgAAACwNAAgAAwARAAMCDYwDqGnAjhJk7VSLUQEAIfkEAAoAAAAsEAAJAAIAEAADAgiMAXbImQojKAAh+QQACgAAACwNAAkAAgAQAAMCCUxgeAftBmNEBQAh+QQACgAAACwQAAgABAAQAAMCDowPlrGd8JxajEJ0sqYFACH5BAAKAAAALAsACAAEABAAAwIOjA0XmQvtzkNt2qqylgUAIfkEAAoAAAAsDwAJAAQADgADAg2MA2ipDfkWi3KednEBACH5BAAKAAAALAsACQACABAAAwIJjAOYeQfPmgsFACH5BAAKAAAALBEACgADAA8AAwIMjA0Bm6mI3IKn1lYAACH5BAAKAAAALAwACgACAA4AAwIIjAOYq5AHUSgAIfkEAAoAAAAsDwAKAAQADgADAg2MDagB2ZhYlHGyg60rACH5BAAKAAAALA0ACwACAAwAAwIHjAMIy+eWCgAh+QQACgAAACwQAAsAAgAMAAMCB4wNqRB83woAIfkEAAoAAAAsDgAMAAIACgADAgWMA6i7WQAh+QQACgAAACwPABEAAgAFAAMCBExgeQUAIfkEAAoAAAAsDwASAAEAAwADAgJMUAAh+QQACgAAACwAAAAAHwAfAAMCZ4yPiaDtDuKbL0qKjbSZWsZ1zbVd4rKA5hkwabuK7hueMx1jN757ldqrTEoyT+43DMI+nyREeWA2FbVnZyrMcLatrkZWAnm/YGB3Bn2ab2n1ctx2V+NyEr1eZWnC+hGxT5UHGHWHUAAAIfkEAAoAAAAsAAAAAB8AHwADAmWMj6nL7Q+jnLTaixvYeQPkhZ8jeuBXamLAHdxotInMsrCNu3fu8jh60ilQtxdQZxr6XrUiDbQkNiVSIdC569GMNeQzFp0KY9kqORyEbo/nYTGcYqTWcVXdlp0kM/y+/w8YKJhRAAAh+QQACgAAACwAAAAAHwAfAAMCZoyPAZDtb9aC1EnFqr5XUy5lXgNm04iUKXqooji6Kyq/9MQp84bjuh3rQGA8IslYOQ1DoQ+zuWRFkC3qJ6n0WDHcWFS4efS2JAsDrD1iyJbEWBpJnbOs0xteveOr6/2R7tcXWEZRAAAh/u9UaGlzIEdJRiBmaWxlIHdhcyBhc3NlbWJsZWQgd2l0aCBHSUYgQ29uc3RydWN0aW9uIFNldCBmcm9tOg0KDQpBbGNoZW15IE1pbmR3b3JrcyBJbmMuDQpQLk8uIEJveCA1MDANCkJlZXRvbiwgT250YXJpbw0KTDBHIDFBMA0KQ0FOQURBLg0KDQpUaGlzIGNvbW1lbnQgYmxvY2sgd2lsbCBub3QgYXBwZWFyIGluIGZpbGVzIGNyZWF0ZWQgd2l0aCBhIHJlZ2lzdGVyZWQgdmVyc2lvbiBvZiBHSUYgQ29uc3RydWN0aW9uIFNldAA7'
    listItem.className = 'b-lazy'
    listItem.setAttribute('data-src', x);
    listItem.alt = 'image cat'
    myList.appendChild(listItem)
    console.log(x)
  })
  var bLazy = new Blazy({
    selector: 'img',
    offset: 1,
    success: function(element) {
      setTimeout(function() {
        var parent = element.parentNode;
        parent.className = parent.className.replace(/\bloading\b/,'')
        console.log('img load')
      }, 2000)
    },
    error: function(ele, msg) {
      if(msg === 'missing'){
        console.log('missing data-src')
      }
      else if(msg === 'invalid'){
        console.log('invalid data-src')
      }  
    }
  })
})
