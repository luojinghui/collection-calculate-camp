'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
 /* var _ = require('../lodash/');
  var result = _.remove(collection_a,function(n) {
      for(var i=0; i<collection_b.length; i++) {
          if(n % collection_b[i] === 0) {
              return true;
          }
      }
  });
  return result;
  */

  var result = [];
  for(var i=0; i<collection_a.length; i++) {
      for(var j=0; j<collection_b.length; j++) {
          if(collection_a[i] % collection_b[j] === 0) {
              result[result.length] = collection_a[i];
          }
      }
  }
  return result;
}

module.exports = choose_divisible_integer;
