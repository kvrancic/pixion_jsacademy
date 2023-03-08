//TASK: Write a function that takes array of any number of cards (poker cards, 52 unique cards) and returns the number of complete decks we can make using those cards.

//ASSUMPTION: the list of cards I am getting as an input is numbered (1-52)

// if each card is inputted as a string, I would expect them to be named as PIP RANK (example: SPADES QUEEN), and then I would convert it to a number in range 1 - 52 with the following algorithm number = PIP * 13 + RANK (NOTE: spades = 0, hearts = 1, clubs = 2, diamonds = 3, J = 11, Q = 12, K = 13), but in order to avoid boilerplate code without being sure that input will be formatted this way, I will write the code under the assumption stated above
// Furthermore, I assume that array of cards should require user input and not be hardcoded? 
// Also, it would be easier to fill the repetition array after each int is entered, but in that case it will not be done by a function that receives a full list as an input which is against "the rules of the task"

let cards = [];

// Populating the array 
while(true){
    const input = prompt("Enter the number of the card (if there are no cards remaining enter 0): "); 
    if(input === '0' || input === null) break; 
    cards.push(Number(input));
}

/* 
ONLY FOR TEST PURPOSES 
for(let j = 0; j <= 2; j++)
    for(let i = 1; i <= 52; i++){
        cards.push(i); 
    } 
*/
    
const result = (cards) => {
    let repetition = Array(52).fill(0);
    for(let card of cards){
        repetition[card - 1]++; 
    }
    return Math.min(...repetition);
}

console.log('Maximum number of complete decks we can make using those cards is ' + result(cards));


