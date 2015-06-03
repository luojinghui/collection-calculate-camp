
function _() {}

_.foreach = function(collection,fun) {
   for (var i = 0; i < collection.length; i ++) {
       fun(collection[i],i);
   }
}

_.foreach_re = function(collection,fun) {
    for(var j = number_a; j >= number_b; j --) {
        fun(collection[i],i);
    }
}
/*
map方法是映射数组，不会改变数组的长度，只会改变数组中对应元素。
*/
 _.map = function(array,fun) {
    var result = [];

    _.foreach(array,function(n) {
    result.push(fun(n));
    });

    return result;
}

/*
filter方法是可以改变数组，通过某种function方法返回true和false，若是true，则将数组push进去，并返回。
*/
_.filter = function(collection,fun) {
    var result = [];

    _.foreach(collection,function(n,i) {
        if(fun(n,i)) {
            result.push(n);
        }
    });
    return result;
}

/*
reduce方法是通过一个function的到数组中的某一个元素。
*/
 _.reduce = function(array,fun) {
    var result = array[0];

    _.foreach(array,function(n,i) {
    	if(i === 0){
        	result = n;
    	} else {
        	result = fun(result,n);
    	}
    	});
    return result;
}

module.exports = _;
