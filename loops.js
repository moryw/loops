// //this is to practice with loops
// let cookies = ['chocolate chip', 'raisin', 'macadamia nut', 'sugar'];
//
// for (let i = 0; i<cookies.length; i++) {
//   //console.log('I would love to eat a ' + cookies[i] + ' cookie right now!');
// }
//
// const vacationSpots = ['India', 'UK', 'Scotland'];
//
// for (let vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0; vacationSpotIndex--) {
//   console.log(`I would like to visit: ${vacationSpots[vacationSpotIndex]}`);
// }


//a loop to compare to arrays

// let myPlaces = ['India', 'Scotland', 'Europe'];
//
// let friendPlaces = ['India', 'Napol', 'Africa'];
//
// for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++ ) {
//   console.log(myPlaces[myPlacesIndex]);
//   for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
//     if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
//       console.log(friendPlaces[friendPlacesIndex]);
//       }
//     }
//   }

//while loop

// let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
//
// let currentCard = cards[Math.floor(Math.random() * 4)];;
//
// while (currentCard !== 'Spade') {
//   console.log(currentCard);
//   currentCard = cards[Math.floor(Math.random() * 4)];
// }
//
// console.log('Found a Spade!');

//infinite loops need to be broken

let flag = true;
let counter = 0;
while(flag === true){
  console.log(counter);
  counter+=1;
  if (counter === 37){ //breaks/terminates the loop because it reachs a condition
    break;
  }
}

















  //end
