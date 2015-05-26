'use strict';
var rank_asc = function(collection){
    return collection.sort(sortNumber);
};

function sortNumber(c,d) {
    return d - c ;
}
module.exports = rank_asc;
