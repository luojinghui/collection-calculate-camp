'use strict';
function alone_letter(letter,num_1,num_2){
    var NUM = 96;
    var NUM_1 = 122;
    var get_num = num_1 + NUM;
    var get_num2 = num_2 + NUM;

    for(var i=get_num; i<=get_num2; i++) {
        if(i > NUM && i <= NUM_1) {
            letter.push(String.fromCharCode(i));

        }
    }
}

function two_letter() {

}

function get_letter_interval_2(number_a, number_b) {
    //在这里写入代码
    var letter = [];
    var NUM = 96;
    var change_num1 = number_a + NUM;
    var change_num2 = number_b + NUM;
    if(number_a <= 26) {
            alone_letter(letter,number_a,number_b);
        }else {
            
        }

    return letter;
}

module.exports = get_letter_interval_2;
