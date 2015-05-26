'use strict';

function grouping_count(collection) {

    //在这里写入代码
    var _ = require('../lodash/');
    var result = _.countBy(collection, function(n) {
        return this.floor(n);
    },Math);
    return result;
}

module.exports = grouping_count;
