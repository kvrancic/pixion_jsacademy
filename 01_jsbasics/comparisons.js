const falsy = ''; //undefined, null, flase, NaN, '', 0 

let varijabla = null; 
if (!varijabla){
    varijabla = 1; 
}
varijabla = !varijabla ? 1 : 0; 

const obj = {
    a : {
        b: {
            c: {
                d: null
            }
        }
    }
}

if (obj.a.b.c.d && obj.a.b.c.d.e){ // prestaje se izvodenje cim je prvi false, odnosno da je || na prvom true

}
//console.log(obj.a.b.c.d && obj.a.b.c.d.e); 

// DVA vs TRI JEDNAKA 
// dva jednaka - usporedujemo samo value 
// tri jednaka - usporedujemo i value i type - BOLJE
console.log(false == 0); //true
console.log(false === 0); //false

console.log({} == 1) // i dalje false - za truthy malo precizniji 
console.log({} === {}) // usporedba dva reference objekta 

const a = {c: {d: 2}}; 
// SHALLOW vs DEEP copy 
const b = {...a}; // SHALLOW - uzimamo sve atribute, ali ljuska je nova
b.c.d = 0; // i dalje pointa na iste stvari -- promijenit ce se i a
console.log(a === b, a, b);

const c = JSON.parse(JSON.stringify(a)); // DEEP COPY

const usporedba = b.c.d || 'nesto'; // ako je prva vrijednost falsy, uzima drugu 
console.log(usporedba);

b.c.d = 0; 
const usporedba2 = b.c.d ?? 'nesto'; // fallbacka samo ako je null ili undefined - DRASTICNO SIGURNIJI 
console.log(usporedba2);

const symb = Symbol('bok'); 
const symb2 = Symbol('bok'); 
console.log(symb === symb2); // value tip koji se ponasa ko reference tip --> dva simbola nikad nisu isti 








