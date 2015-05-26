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
function get_letter_interval_2(number_a, number_b) {
    //在这里写入代码
    var letter = [];
    if(number_a <= number_b) {
        for(var i=number_a; i<=number_b; i++) {
            judge(letter,i);
        }
    }else {
        for(var j=number_a; j>=number_b; j--) {
            judge(letter,j);
        }
    }
    return letter;
}

module.exports = get_letter_interval_2;
