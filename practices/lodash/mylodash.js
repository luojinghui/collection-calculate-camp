//  通过fun函数映射某一集合；

function _() {

}

_.foreach = function(collection,fun) {
   for (var i = 0; i < collection.length; i++) {
       fun(collection[i],i);
   }
}

 _.map = function(array,fun) {
    var result = [];

    _.foreach(array,function(n) {
    result.push(fun(n));
    });

    return result;
}

_.filter = function(collection,fun) {
    var result = [];

    _.foreach(collection,function(n) {
        if(fun(n)) {
            result.push(n);
        }
    });
    return result;
}

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

/*
_.add = function(a,b) {
   return a + b;
}

_.max = function(a,b) {
   if(a > b) {
       return a;
   }
}

_.max = function(a,b) {
   if(a < b) {
       return a;
   }
}

_.last = function(a,b) {
   if(b % 2 === 0) {
       a = b;
       return a;
   }
}
*/
module.exports = _;
