'use strict';
var _ = require('../lodash/mylodash.js');

function get_letter_interval(number_a, number_b) {
    var array = [];
    var result = [];

    array = _.range(number_a,number_b);

    return _.map(array,function(n) {
        return (_.num_change_letter(n));
    });
}

module.exports = get_letter_interval;

/*
    var array = [];

    if(number_a <= number_b) {
    for(var i=number_a; i<=number_b; i++){
        array.push(String.fromCharCode(i+96));
        }
    }else {
        for(var j=number_a; j>=number_b; j--){
            array.push(String.fromCharCode(j+96));
            }
    }
    return array;
    */
