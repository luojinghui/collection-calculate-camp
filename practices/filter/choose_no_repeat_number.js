'use strict';

function choose_no_repeat_number(collection) {

    //在这里写入代码
//    var _ = require('../lodash/array');
//    var result = _.uniq(collection);

//    return result;
    return remove_same(collection);


}

 var remove_same = function (collection) {
        collection.sort();
        var temp = [];

        for(var i = 0; i < collection.length; i++) {
            if( collection[i] == collection[i+1]) {
            continue;
        }
            temp[temp.length]=collection[i];
      }
      return temp;

}

module.exports = choose_no_repeat_number;
