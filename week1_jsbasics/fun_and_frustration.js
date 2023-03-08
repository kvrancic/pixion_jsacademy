// castanje u broj
console.log('1' + 1);
console.log(+[]); //0
console.log(+{}); //NaN
// + znaci cast ot number 
console.log(+[4]); //4
console.log(+[4, 1]); //NaN 

// pretrazivanje arraya
const arr = [11, 22, 33, 44, 55];
arr[2] = 333; 
console.log(arr);

for(let i = 0; i < arr.length; i++){
    if(i === 2){
        arr[i] == 333; 
    }
}
console.log(arr);

arr.forEach((arrItem, index) => { // ZAPAMTI - ARRITEM JE KOPIJA, NE KORISTI ORIGINALNI ARR 
    if(index === 3){
        arrItem == 444; 
    }
});
console.log(arr);

const obj = {
    1: 'jedan', 
    '1': 'dva'
}
console.log(obj); // ime atributa se uvijek percipira kao string tako da 1 i '1' ce se overwriteat

// JAVASCRIPT I MATEMATIKA 
console.log(0.1 + 0.2);
console.log((0.1 + 0.2).toFixed(2)); // ovo je kompromis, ali ce ga prebaciti u string

const arr2 = [1, 2, 3, 4, 5, 10]; 
console.log(arr2.sort()); // SORTIRA GA LEKSIKOGRAFSKI I NIJE GA BRIGA 
console.log(arr2.sort((a, b) => {a - b}));

