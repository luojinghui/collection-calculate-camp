'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
    var a = [];

    if(number_a <= number_b) {
        for(var i=number_a; i<=number_b; i++) {
            a.push(i);
        }
    } else {
        for(var j=number_a; j>=number_b; j--) {
        a.push(j);
        }
    }
    return a;
}
module.exports = get_integer_interval;
