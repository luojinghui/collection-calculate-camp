'use strict';
function judge(letter,num) {
    var NUM = 26;
    var NUM_1 = 96;

    if(num > NUM) {
        var num_unit = parseInt( num / NUM);
        var num_multiple = num_unit * NUM;
        var num_decade = num - num_multiple;

        if( num % NUM === 0) {
            letter.push(String.fromCharCode((num_unit-1)+NUM_1) +
                String.fromCharCode(NUM+NUM_1));
            }else {
                letter.push(String.fromCharCode(num_unit+NUM_1) +
                String.fromCharCode(num_decade+NUM_1));
        }
    }else {
        if(num%NUM === 0) {
        letter.push(String.fromCharCode(num+NUM_1));
            }else {
                var num_1 = num % NUM;
                letter.push(String.fromCharCode(num_1+NUM_1))
        }
    }
}

var number_map_to_word_over_26 = function(collection){
    var _ = require('../lodash/');
    var letter = [];

    for(var i=0; i<collection.length; i++) {
        judge(letter,collection[i]);
    }
    return letter;
};

module.exports = number_map_to_word_over_26;
