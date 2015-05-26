'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var _ = require('../lodash/');
  var result = _.xor(collection_a,collection_b);

  return result;
}

module.exports = choose_no_common_elements;
