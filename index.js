function dwarfRollCall(dwarves) {
  var string = []
  let i = 0
  for (let i=0; i<dwarves.length; i++) {
    string.push(`${i+1}. ${dwarves[i]} `)
  }
  return string.join('')
  
}

function summonCaptainPlanet(planeteerCalls){
  var upperCase = [];
  for (var i = 0; i < planeteerCalls.length; i++){
    let exclamation = ['!'];
    upperCase.push(`${planeteerCalls[i]}${exclamation}` .toUpperCase())
  }
  return upperCase
}

function longPlaneteerCalls(words) {
  let i = 0;
  for (i = 0; i < words.length; i++){
    if (words [i].length > 4){
      return true;
    }
   else return false;
  }
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"];
  for(let i = 0; i < cheese.length; i++){
    let c = cheese[i]
   if (foods.includes(c)){
     return c 
   }
  }
}
