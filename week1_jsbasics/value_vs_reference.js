const str = 'BLA'; 
const str2 = String('BLA'); // skoro nikad ne koristimo 
const str3 = new String('BLA'); // ima nekakve dodatne funkcije

console.log(str, str2, str3); // Sad izbaci treci kao [String: '1']
console.log(str, str2+str3); // Sad kuzi da zelim samo njegov value 

console.log(str.toLowerCase(), str3.toLowerCase()) 
// ZAPRAVO MOZEMO KORISTITI FUNKCIJE I NA OBICNO DEFINIRAM STRINGU - new NEMA SMISLA 

const num = '1.1.1';
console.log(num); 
console.log(Number(num)); // NaN
console.log(typeof NaN);
