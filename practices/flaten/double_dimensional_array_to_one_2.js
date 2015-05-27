'use strict';

function double_to_one(collection) {

  //在这里写入代码
//  var _ = require('../lodash/');
//  var result = _.flatten(collection);
//  return _.union(result);

    var result = [];
    for (var i = 0; i < collection.length; i++) {
        for(var j=0; j<collection[i].length; j++) {
            result[result.length] = collection[i][j];
        }
    }
    return result.unique5();
}

Array.prototype.unique5 = function() {
    var res = [], hash = {};
    for(var i=0, elem; (elem = this[i]) != null; i++)  {
        if (!hash[elem])
        {
            res.push(elem);
            hash[elem] = true;
        }
    }
    return res;
}
module.exports = double_to_one;
