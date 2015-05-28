'use strict';

function get_union(collection_a, collection_b) {
    //在这里写入代码
//    var _ = require('../lodash/array');
//    var array = _.union(collection_a, collection_b);
//
//    return array;

    for(var i=0; i<collection_a.length; i++) {
        for(var j=0; j<collection_b.length; j++) {
            if(collection_a[i] === collection_b[j]) {
                 collection_b = remove_element(j,collection_b);
            }
        }
    }
    add_element(collection_a,collection_b);
    return collection_a;
}

    function remove_element(index,array) {
        if(index>=0 && index<array.length) {
            for(var i=index; i<array.length; i++) {
                array[i] = array[i+1];
            }
                array.length = array.length-1;
        }
        return array;
    }

    function add_element(collection_a,collection_b) {
            for(var j=0; j<collection_b.length; j++) {
                collection_a.push(collection_b[j]);
            }
        }

    /*
    for(var i = 0; i < collection_a.length; i++) {
       for(var j = 0; j < collection_b.length; j++) {
           if(collection_a[i] === collection_b[j]) {
               collection_b.splice(j,1);
           }
       }
   }
   var all = collection_a.concat(collection_b);

   return all;
    */
module.exports = get_union;


/*
function grouping_count(collection) {
  //
  // //在这里写入代码
  // var _ = require('../lodash');
  // return _.countBy(collection);
  //collection.sort();
  var temp = {};

  for(var i = 0;i < collection.length;i++) {
    //   temp[collection[i]]=temp[collection[i]]||0;
    //   temp[collection[i]]++;
      if(!! temp[collection[i]]) {
          temp[collection[i]]++;
      }else{
          temp[collection[i]]=0;
          temp[collection[i]]++;
      }

  }
  return temp;
}

module.exports = grouping_count;
*/
