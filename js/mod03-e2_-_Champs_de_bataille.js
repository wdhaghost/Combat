
try {
  fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/1.json")
    .then(response => response.json())
    .then(heroes => {
      console.log(heroes.name,heroes.powerstats,heroes.images.xs,heroes.biography.publisher)
    })
// const name = json.
    
} catch (error) {
  console.error("Something went wrong : " + error);
}





// function getRandomValues(max) {
//   return parseInt(Math.random() * max);
// }



// function getRoundFighter(array) {
//   let atkScore;
//   let defScore;
//   let def;
//   let atk;

//   atk = getRandomValues(array.length);

//   while (atk === def || def === undefined) {
//     def = getRandomValues(array.length);
//   }

//   return [atk, def];
// }

// // Select the assault and the defense and calculate the atackScore and defense Score

// function assaultPoint(array) {
//   atkScore =
//     characters[array[0]].exp + parseInt(getRandomValues(characters[array[0]].weapon));
//   defScore =
//     characters[array[1]].exp + parseInt(getRandomValues(characters[array[1]].shield));
//   if (atkScore > defScore) {
//     characters[array[1]].life -= atkScore;
//     return console.log(
//       `${characters[array[0]].name} attaque et ${
//         characters[array[1]].name
//       } a perdu ${atkScore} points de vie`
//     );
//   }
//   return console.log(
//     `${characters[array[0]].name} attaque et ${
//       characters[array[1]].name
//     } a bloqué le coup`
//   );
// }
// // Check if there a death and remove him form the game
// function death(array) {
//   for (const fighter of array) {
//     if (fighter.life <= 0) {
//       array.sort((a, b) => a.life - b.life);
//       console.info("Mort de");
//       console.table(array.shift());
//     }
//   }
// }

// let i = 0;

// function battle(array) {
//   i++;

//   console.log(`round ${i}`);
//   assaultPoint(getRoundFighter(array));
//   death(array);
//   if (array.length == 1) {
//     console.warn("Le Vainqueur est");
//     return console.table(array);
//   }

//   return battle(array);
// }
// battle(characters);
// console.log()
// console.table(characters);
