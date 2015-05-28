'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  var result;
  for (var i = 0; i < collection.length; i++) {
      if(collection[i]<collection[i+1]) {
          result = collection[i+1];
        }
     }
     return result;
}

module.exports = collect_max_number;
