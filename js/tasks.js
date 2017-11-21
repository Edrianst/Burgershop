//Задача №1

/*
var str = 'Наташа козюленька?',
vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'],
result = " ";

str.split(",");
for (var i = 0; i <= str.length; i++) {
  if(vowels.indexOf(str[i]) >= 0){
    result += str[i];
  }
};

console.log(result);
*/


// Задача №2

/*
var users = [
  {
      name: "Алексей",
      salary: 500
  },
  {
      name: "Виктор",
      salary: 1300
  },
  {
      name: "Иван",
      salary: 1500
  }
  ];

  var checkSalary = function(workers){
    var result = [];
    for (var i = 0; i < workers.length; i++) {
      var user = workers[i];
      if (user.salary > 1000) {
        result.push(user.name);
    }
  }
  return result;
}
  
var final = checkSalary(users);
console.log(final);
*/

// Задача №3

// var isHtml = function(path) {
//   var isHtmlOrNot = path.slice(-4) === "html"

//   return isHtmlOrNot
// }

// console.log(isHtml("/users/download/index.html"));
