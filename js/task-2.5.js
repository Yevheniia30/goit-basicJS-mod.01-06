// функция проверяет строки на содержание определенных слов методом includes

function checkForSpam(str) {
  // создаем переменные для запрещенных слов
  const bannedWord1 = "spam";
  const bannedWord2 = "sale";
  // const strNormalized = str.toLowerCase();
  // используя оператор "или" и тернарник, проверим строку на содержание запрещенных слов и вернем соответствуещее сообщение (true или false)
  // нормализируем строку toLowerCase
  return str.toLowerCase().includes(bannedWord1) ||
    str.toLowerCase().includes(bannedWord2)
    ? `true`
    : `false`;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
