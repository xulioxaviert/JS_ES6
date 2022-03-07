//Iteración #5: Filter

// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let newAges = ages.filter(function (age) {
  return age.valueOf() > 18;
});

console.log(newAges);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean par.

const agesTwo = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let newAgesTwo = agesTwo.filter(function (ageTwo) {
  return ageTwo % 2 === 0;
});

console.log(newAgesTwo);
// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

let newStreamers = streamers.filter(function (streamer) {
  return streamer.gameMorePlayed === "League of Legends";
});

console.log(newStreamers);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
// usar la funcion .includes() para la comprobación.

const streamersTwo = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

let newStreamersTwo = streamersTwo.filter(function (streamer) {
  return streamer.name.includes("u");
});

console.log(newStreamersTwo);

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// .age sea mayor que 35.

let newStreamersTwo2 = streamersTwo.filter(function (streamer) {
  if (streamer.age > 35) {
    streamer.gameMorePlayed.toUpperCase("Legends");
    //console.log(streamerTwo.gameMorePlayed.toUpperCase("Legends"));
  }
  return streamer.gameMorePlayed.includes("Legends");
});

console.log(newStreamersTwo2);

// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const streamersThree = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const addEventFocus = () => {
  let elements = document.querySelector("input");
  elements.addEventListener("input", inputEvent);

  function inputEvent() {
    let inputText = elements.value;
    if (inputText == "Ru") {
        let newStreamers = streamersThree.filter(function (streamer) {
          
        return streamer.name;
      })
    };
    console.log("Focus" + newStreamers);
    //   } else if (elements.includes("i")) {
    //     let newStreamers = streamersThree.filter(function (streamer) {
    //       return consule.log(streamer.name);
    //     });
  } //elements.addEventListener('input', inputEvent);
};

addEventFocus();

// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i',
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
const streamersFour = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
