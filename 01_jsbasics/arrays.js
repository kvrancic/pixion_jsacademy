const arr = [11, 22, 33, 44, 55];

for (let i = 0; i < arr.length; i++){
    console.log(arr[i], i);
}

console.log('---------');

arr.forEach((arrItem, index) => {
    console.log(arrItem, index);
})

console.log('---------');

for(let arrItem of arr){
    console.log(arrItem);
}

console.log('---------'); 


// FIND: funkcionira isto kao forEach, osim što find kad pronade item prestane iterirati po itemima
const ff = arr.find((arrItem) => {
    return arrItem === 55
})
console.log('ff', ff);


// FIND INDEX: isto kao find samo baca njegov index
const ffindex = arr.findIndex((arrItem) => {
    return arrItem === 55;
})
console.log('ff', arr[ffindex]);

//SOME: postoji li nešto, tj. true ili false, ali isto ko find i findIndex 
const ffbool = arr.some((arrItem) => {
    return arrItem === 55;
})
console.log('ff', ffbool);

//INCLUDES: pojednostavljeni some kada nema objekta 
ffinc = arr.includes(55); 
console.log('ff', ffinc);

//MAP: iskoristi parametar koji saljes da stvoris nesto *novo* (stari se ne mijenja) u cemu se koristi stari, ali se drukcije formatiraju informacije 
const mapped = arr.map((arrItem) => {
    return 'number : ' + arrItem; 
})
console.log(mapped);

//FILTER: stvori novi array u kojem ce biti samo itemi starog arraya koji produ kroz filter
const filtered = arr.filter((arrItem) => {
    return arrItem === 55 || arrItem === 22; 
})
console.log(filtered);

//REDUCE: ako zelim i filterat i mapirat istovremeno
const reduced = arr.reduce((agg, arrItem, index) => {
    if(arrItem === 55 || arrItem === 22) agg.push('number: ' + arrItem); 
    return agg; //ponovno ulazi u fju ali s novim agg, sam iterira jedno po jedno 
}, [])
    //postavlja se pitanje zasto ne mozemo samo dodati jos jedan if u map, ali on ce i dalje napraviti jednako dugo polje samo ce prazna mjesta napuniti undefinedom 
console.log(reduced);

// SHIFT, UNISHIFT, SPLICE mijenjaju originalni array
const newArr = arr.splice(1, 1, 'a'); //SPLICE: pocevsi od indeksa 1 (prvi param), izbrisi 1 element (drugi param), i na njegovo mjesto stavi a (treci param) 
console.log(arr, newArr);

const arr2 = Array(100).fill(null); //inicijaliziraj array sa 100 elemenata, ispuni ga uz FILL s nullovima, moze nad bilo kojim arrayom 




