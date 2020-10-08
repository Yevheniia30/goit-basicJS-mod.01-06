// функция создает новый массив и заполняет его аргументами из старого массива, умноженными на 10
// возвращает новый массив
function mapArray(array) {
  "use strict";
  // создаем новый массив и указываем его длину, равную длине старого
  const numbers = new Array(array.length);
  // перебираем массив и добавляем новые значения
  for (let i = 0; i < array.length; i += 1) {
    // умножаем каждый аргумент массива на 10
    numbers[i] = array[i] * 10;
  }
  return numbers;
}

console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]
