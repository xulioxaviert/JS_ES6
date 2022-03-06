//Iteración #4: Map
//4.1 Dado el siguiente array, devuelve un array con sus nombres
//utilizando .map().
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const userListId = users.map((array) => array.id);
console.log(userListId);

//4.2 Dado el siguiente array, devuelve una lista que contenga los valores
//de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
//empiece por 'A'.

const usersTwo = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const usersListName = usersTwo.map((array) => {
  //console.log(array.name);

  if (array.name.charAt() === "A") {
    array.name = "Anacleto";
  }
  return array.name;
  //console.log(array.name);
});

console.log(usersListName);

//4.3 Dado el siguiente array, devuelve una lista que contenga los valores
//de la propiedad .name y añade al valor de .name el string ' (Visitado)'
//cuando el valor de la propiedad isVisited = true.

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

let citiesListOld = { ...cities };

const citiesList = cities.map((city) => {
  if (city.isVisited === true) {
    city.name = "Visited";
  }
  return city.name;
});

// no pude terminar

for (let i = 0; i < citiesList.length; i++) {
  if (citiesList[i].isVisited === true) {
    console.log("dentro del if");
    citiesListOld[i].name.push();
  }
}
console.log(cities);
