// filter, map
// 
// сначала используем метод filter чтобы получить массив пользователей, значение гендера который равно переданному в парметр gender значению, затем через точку здесь же используем map. чтобы вывести массив отфильтрованных пользователей
const getUsersWithGender = (array, gender) => array.filter(user => user.gender === gender).map(({name}) => name);

console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",  
  "Carey Barr",  
  "Blackburn Dotson"  
] */
