'use strict';

function multiBracketValidation(input){
  if(typeof input === 'string'){
    let openingRound = 0, openingSquare=0 , openingCurly = 0, closingRound = 0,closingSquare = 0, closingCurly = 0;
    for(let i=0; i<input.length;i++){
      if(input[i] === '(' || input[i] === ')'){

        input[i] === '(' ? openingRound += 1 : closingRound += 1;

      } else if (input[i] === '[' || input[i] === ']'){

        input[i] === '[' ? openingSquare += 1 : closingSquare += 1;

      } else if (input[i] === '{' || input[i] === '}'){

        input[i] === '{' ? openingCurly += 1 : closingCurly += 1;
        
      }
    }

    if (openingRound === 0 && openingSquare === 0 && openingCurly === 0 && closingRound === 0 && closingSquare === 0 && closingCurly === 0){
      console.log('No brackets were entered, please enter a bracket');
      return false;
    }

    if(openingRound === closingRound && openingSquare === closingSquare && openingCurly === closingCurly){
      return true;
    } else {
      return false;
    }
  } else {
    console.log('Only string values are allowed.');
    return false;
  }
}

module.exports = multiBracketValidation;