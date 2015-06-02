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
  var _= require('../lodash/mylodash.js');
  var result = [];

  _.foreach(collection_a,function(n) {
      for(var j=0; j<collection_b.length; j++) {
          if(n % collection_b[j] === 0) {
              result[result.length] = n;
          }
      }
  });
  return result;
}

module.exports = choose_divisible_integer;
