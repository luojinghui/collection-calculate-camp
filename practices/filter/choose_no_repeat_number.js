'use strict';

function choose_no_repeat_number(collection) {

    //在这里写入代码
    var _ = require('../lodash/array');
    var result = _.uniq(collection);

    return result;
}

module.exports = choose_no_repeat_number;
