'use strict';

function double_to_one(collection) {

  //在这里写入代码
//  var _ = require('../lodash/');
//  var result = _.flatten(collection);
//  return _.union(result);

    var result = [];
    var _ = require('../lodash/mylodash.js');

    _.foreach(collection,function(n) {
        for(var j = 0; j < n.length; j++) {
            result.push(n[j]);
        }
    });

    var array = [];
    var hash = {};

    for(var i = 0 , elem; (elem = result[i]) != null; i++) {
        if(!hash[elem]) {
            array.push(elem);
            hash[elem] = true;
        }
    }
    return array;
}

module.exports = double_to_one;
