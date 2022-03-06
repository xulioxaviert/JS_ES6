//Iteración #1: Arrows
// Crea una arrow function que tenga dos parametros a y b y
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
// por consola la suma de los dos parametros.

// 1.1 Ejecuta esta función sin pasar ningún parametro
// 1.2 Ejecuta esta función pasando un solo parametro
// 1.3 Ejecuta esta función pasando dos parametros

const sum = () => {
  let a = 10;
  let b = 5;
  let result = a + b;

  console.log("Resultado de la operación es " + result);
};

const sum1 = (a) => {
  let b = 5;
  let result = a + b;
  console.log("Resultado de la operación es " + result);
};

const sum2 = (a, b) => {
  let result = a + b;
  console.log("Resultado de la operación es " + result);
};

sum();
sum1(10);
sum2(10, 5);
