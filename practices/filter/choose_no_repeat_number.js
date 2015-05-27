'use strict';

function choose_no_repeat_number(collection) {

    //在这里写入代码
//    var _ = require('../lodash/array');
//    var result = _.uniq(collection);

//    return result;
    return collection.remove_same();


}

Array.prototype.remove_same = function () {
    var temp = new Array();
        this.sort();
        for(var i = 0; i < this.length; i++) {
            if( this[i] == this[i+1]) {
            continue;
        }
            temp[temp.length]=this[i];
      }
      return temp;

}

module.exports = choose_no_repeat_number;
