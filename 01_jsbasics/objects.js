/* const biblija = {};
//TODO skipano foranje: za svaku rijec const rijec 'hostija'... 
if(biblija[rijec] === undefined){
    biblija[rijec] = 1; 
}
else{
    biblija[rijec]++;
}
 */
/* const obj = {
    attr: null
}; 

/* // ovo dolje ista stvar kao 
if(obj.attr){
    return obj.attr.attr2; 
} else {
    obj.attr; 
} */
/*console.log(obj.attr?.attr2);  //OPTIONAL CHAINING */

/* const res = obj.attr?.attr2?.attr3?.attr4; 
const res2 = obj.attr
    ? obj.attr.attr2
        ? obj.attr.atrr2.attr3
        : undefinde
    : undefined; 

const a = uvjet ? da : ne;  */

const obj = {
    casa: 'kava',
    boca: 'voda', 
    kos: 'smece', 
    vrijeme: 11
}; 
console.log(obj)
console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj)); //svaki key-value pair je jedan entry



