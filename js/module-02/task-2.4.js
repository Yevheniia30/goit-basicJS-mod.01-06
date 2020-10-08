// если длина строки не превышает максимальную (40) функция возвращает строку в исходном виде
// если же превышает, строка обрезается до максимальной длины и в конце добавляется троеточие

function formatString(string, maxLength = 40) {
  // Write code under this line
  const dots = "...";
  return string.length <= maxLength
    ? string
    : string.slice(0, maxLength) + dots;
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  // здесь длина будет 30, т к передается аргумент 30
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
// 'Vestibulum facilisis, purus ne...'
