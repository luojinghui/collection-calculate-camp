'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var _ = require('../lodash/');
  
  return _.flatten(collection);
}

module.exports = double_to_one;
