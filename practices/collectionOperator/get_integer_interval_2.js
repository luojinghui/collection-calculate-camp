'use strict';
var _ = require('../lodash/mylodash.js');

function get_integer_interval_2(number_a, number_b) {
    var array = _.range(number_a,number_b);
    var result = _.map(array,function(n) {
        return n % 2 === 0;
    });
    return result;
}


/*
//在这里写入代码
var array = [];

if(number_a != number_b) {
    num_intervel_up(array,number_a,number_b);
}else {
    same_num(array,number_a,number_b);
}
return array;

function num_intervel_up(array,number_a,number_b) {
    if(number_a < number_b) {
        for(var i=number_a; i<=number_b; i++) {
            var even_number = 0;

            if(i % 2 === 0){
                array.push(i);
            }
        }
    }else {
        for(var j=number_a; j>number_b; j--){
            if(j % 2 === 0){
                array.push(j);
            }
        }
    }
}

function same_num(array,number_a,number_b) {
    if(number_a === number_b && number_a % 2 === 0) {
        array.push(number_a);
    }
}
*/
module.exports = get_integer_interval_2;
