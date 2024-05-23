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

// - Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

const multiplyThing = (number) => {
  for (let counter = 0; counter <= 10; counter++) {
    console.log(`${counter} x ${number} = ${number * counter}`);
  }
};

multiplyThing([4]);

// - Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

const multiplyThingInverse = (number) => {
  for (let counter = 10; counter >= 0; counter--) {
    console.log(`${counter} x ${number} = ${counter * number}`);
  }
};

multiplyThingInverse([4]);
// - Crea una función que reciba el año actual y tu edad, la función debe imprimir:

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

// - Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.

const twoNums = (num1, num2) => {
  let start;
  let end;
  if (num1 < num2) {
    start = num1;
    end = num2;
  } else {
    start = num2;
    end = num1;
  }

  for (let counter = start; counter <= end; counter++) {
    if (counter % 2 === 0) {
      console.log(counter);
    }
  }
};

twoNums(2, 12);

// - Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.

const randomNumbers = (nums)=>{
  const array1=[];
  const array2=[];
  
}

randomNumbers ([])
