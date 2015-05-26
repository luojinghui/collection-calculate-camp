'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var _ = require('../lodash/');
  var result = _.remove(collection_a,function(n) {
      for(var i=0; i<collection_b.length; i++) {
          if(n % collection_b[i] === 0) {
              return true;
          }
      }
  });
  return result;
}

module.exports = choose_divisible_integer;
