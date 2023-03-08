const num = 1;
const str = 'string';
const bool = true; 
const symbol = Symbol('a');

const arr = [1, 's', false]; //mozes natrpati sto god
const obj = {
    number: 1
};
function f(){
    //num = 2;
    //console.log('funkcija je pozvana'); 
}

let undef;
console.log(undef);
console.log(typeof undef); //izbacuje undefined

let nu = null; 
console.log(nu);
console.log(typeof nu); //to je objekt

console.log(1, '1') //u ispisu razlicita boja, bold, itd.

let temp = 'temp'; //ovo je string
temp = 2; //ovo se pretvori u broj 
console.log(temp);

f();
