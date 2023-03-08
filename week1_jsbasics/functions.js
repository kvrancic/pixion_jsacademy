// funkcije i klase ista stvar -- samo drukciji nacin zapisivanja 

const f1 = (a, b, c) => {
    console.log('ovo je f1', a, b, c); 
}
// NEMA OVERLOADANJA FUNKCIJA - ne moze biti ista funkcija s drukcijim brojem parametara
// to se rjesava tako da saljemo proizvoljan broj parametara u funkciju i to je to, preskacemo sta nam ne treba
f1(1, 2, 3, 4); 

function f2(){
    console.log('ovo je f2');
}
f2(); 

class F3{
    constructor(){
        this.name = 'Pixion'; 
        console.log('ovo je F3');
    }
}
new F3();
console.log(F3)
const f3 = new F3(); 
console.log(f3);

const osoba = {
    ime: 'Pixion', 
    pozdrav1: () => console.log('Bok', this.ime),
    pozdrav2: function(){console.log('Bok', this.ime)}
    // RAZLIKA - ARROW FUNKCIJE SE NE STIGNU BINDAT 
    // ovdje nema potrebe za forsiranje thisa i koristi ga samo unutar klasa 
}
osoba.pozdrav1(); 
osoba.pozdrav2();
