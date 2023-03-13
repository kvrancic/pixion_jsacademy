// Modules - enkapsulirani kod 
//      u commonJSu je svaki file modul po defaultu 

const john = 'john';
const peter = 'peter';

const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

sayHi('susan');
sayHi(john);
sayHi(peter);