// поиск самого длинного слова

function findLongestWord(string = "") {
  // преобразуем строку в массив
  const words = string.split(" ");
  // создаем переменную longestWord и даем ей значение первого элемента массива то есть первого слова
  let longestWord = words[0];
  // перебираем элементы массива и сравниваем их длину
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// ("force");
