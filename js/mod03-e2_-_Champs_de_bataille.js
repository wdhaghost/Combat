let charactersList = document.getElementById("select-zone");

try {
  fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
    .then(response => response.json())
    .then(heroes => {
      heroes.forEach(hero => {
        let character = document.createElement("li")
        const name = hero.name
        character.setAttribute("data-id", hero.id)
        character.setAttribute("data-universe", hero.biography.publisher)
        character.innerHTML += `<p>${name}</p>`
        character.classList.add("card")

        const img = document.createElement("img")
        img.src = hero.images.md
        img.classList.add("card-img")
        character.appendChild(img)

        let stats = document.createElement("ul")

        for (const stat in hero.powerstats) {
          stats.innerHTML += `<li>${stat}:${hero.powerstats[stat]}</li>`

        }
        stats.classList.add("card-stat")
        character.appendChild(stats)


        charactersList.appendChild(character)

      });


      const selectZone = document.getElementById("select-zone")

      const selectedHero = document.getElementById("selected-hero")

      selectZone.addEventListener("click", function (e) {
        if (e.target.classList.contains("card")) {
          selectedHero.appendChild(e.target)
        } if (e.target.parentElement.classList.contains("card")) {
          selectedHero.appendChild(e.target.parentElement)

        }
      })
      selectedHero.addEventListener("click", function (e) {
        if (e.target.classList.contains("card")) {
          selectZone.appendChild(e.target)
        } if (e.target.parentElement.classList.contains("card")) {
          selectZone.appendChild(e.target.parentElement)

        }


      })
      // get 4 random players
      document.getElementById("random").addEventListener("click", function (e) {
        selectedHero.innerHTML = ""
        for (let i = 0; i < 4; i++) {
          const randomNum = parseInt(Math.random() * selectZone.children.length);
          selectedHero.appendChild(selectZone.childNodes[randomNum])
        }
      }
      )

      document.getElementById("fight").addEventListener("click", function (e) {
       
          document.getElementById("arena").classList.add("fight")
          document.getElementById("character-menu").classList.add("fight")
          document.getElementById("footer").classList.add("fight")
          let index=0;
          selectedHero.array.forEach(fighter => {
            document.getElementById("fight-zone").appendChild(fighter)

          });
           
          }
        
      }
      )


    })

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
