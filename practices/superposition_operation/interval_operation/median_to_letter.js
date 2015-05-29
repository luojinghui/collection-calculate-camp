'use strict';

function median_to_letter(collection) {
    var letter = [];
    var temp = 0;

    if (collection.length % 2 === 0) {
        temp = collection[parseInt((collection.length-1) / 2)] +
               collection[parseInt((collection.length) / 2)];
        temp = Math.ceil(temp / 2);
    } else {
        temp = collection[Math.ceil(collection.length / 2)];
    }
    judge(letter,temp);
    return letter[0];
}

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

module.exports = median_to_letter;
