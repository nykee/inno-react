 let deepCopy = function (obj){
     if(typeof obj != 'object'){
         return obj;
     }
     var newobj = {};
     for ( var attr in obj) {
         newobj[attr] = deepCopy(obj[attr]);
     }
     return newobj;
 };
export default  deepCopy;