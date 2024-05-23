import "../scss/styles.scss";

//ejemplo

// const names = ["Keko", "Cristina", "Celia", "Andrea"];
// for (let counter = 0; counter < names.length; counter++) {
//   console.log(names[counter]);
// }

// a la inversa

// const names = ["Keko", "Cristina", "Celia", "Andrea"];
// for (let counter = names.length - 1; counter >= 0; counter--) {
//   console.log(names[counter]);
// }

// otro tipo de bucle

// for (const name of names) {
//   console.log(name);
// }

// - Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.

for (let counter = 10; counter >= 0; counter--) {
  console.log(counter);
}

// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const aleatoryNumbers = (numbers) => {
  let total = 0;

  for (let counter = 0; counter < numbers.length; counter++) {
    total = total + numbers[counter];
  }

  console.log(total);
};

aleatoryNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const multiplyThing = (number) => {
  for (let counter = 0; counter <= 10; counter++) {
    console.log(`${counter} x ${number} = ${number * counter}`);
  }
};

multiplyThing([4]);

const multiplyThingInverse = (number) => {
  for (let counter = 10; counter >= 0; counter--) {
    console.log(`${counter} x ${number} = ${counter * number}`);
  }
};

multiplyThingInverse([4]);

const ageYear = (year, age) => {
  let birthYear = year - age;
  console.log(`Nací en el año ${birthYear}`);

  for (let counter = 1; counter <= 24; counter++) {
    if (counter === 0) {
      console.log(`En el  año ${birthYear + counter} cumplí ${counter} año.`);
    } else {
      console.log(`En el año ${birthYear + counter} cumplí ${counter} años.`);
    }
  }
};

ageYear(2024, 24);

const twoNums = (num1, num2) => {
  if (num1<num2){
    for(let counter=num1; num)
  }
};

twoNums(2, 12);
