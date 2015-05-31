//  通过fun函数映射某一集合；
var map = function(array,fun) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
        result.push(fun(array[i]));
    }
    return result;
}

module.exports = map;
