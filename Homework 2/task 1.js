//Задача 1(которая была в среду)
var how = parseInt(prompt('Vvedite skolko polzovateley: '));
var esd = [];
    var c = 0;
  for(c;c<how;c++){var usera = {
 name: prompt('Введите имя '),
 lastName: prompt('Введите фамилию: '),
 happyDay: prompt('Введите дату рождения: '),};
 esd.push(usera)};
 console.log(esd);

 //Заданный массив
 var users = [
  {
      first_name: "Josephine",
      last_name: "Robinson",
      birthday: "1996-09-26",
  },
  {
      first_name: "Dean",
      last_name: "long",
      birthday: "1984-10-23",
  },
  {
      first_name: "Sonia",
      last_name: "Holmes",
      birthday: "1958-06-21",
  },
  {
      first_name: "June",
      last_name: "Mcdonalid",
      birthday: "1960-05-06",
  },
  {
      first_name: "ella",
      last_name: "Lane",
      birthday: "1991-12-11",
  },
  {
      first_name: "Felecia",
      last_name: "Stone",
      birthday: "1958-04-21",
  },
  {
      first_name: "Elmer",
      last_name: "George",
      birthday: "1987-12-10",
  }
];
// Задача "Вывести пользователей у которых имя или фамилия начинается на букву E"
function ucFirst(str) {
    return str.charAt(0).toLocaleUpperCase() + str.slice(1);
  }
 
 var bigChar = users.map(function(obj) {
     obj.first_name = ucFirst(obj.first_name);
     obj.last_name = ucFirst(obj.last_name);
     return obj;
 });
 
 console.log(bigChar);
 

// Задача Отобразить пользователей которым более 30 лет 
let minAge = 30;

    function getAge(birthday) { // birthday is a date
        let ageDifMs = Date.now() - new Date(birthday);
        let ageDate = new Date(ageDifMs); // milliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    const result = users.filter(function(obj) {
        return getAge(obj.birthday) > minAge;
    });

    console.log(result);

    // Задание сделать первые буквы заглавными
    var err = [];
    function ucFirst(s) {
          return s.charAt(0).toUpperCase() + s.substring(1).toLowerCase();
          err.push(s);
        }
        const bigChar = users.filter(function(obj){
            return ucFirst(obj.first_name)
        })
  console.log(err);

  // Задача 1, котрая была в субботу

  function newUsers(){
    var how = parseInt(prompt('Vvedite skolko polzovateley: '));
        var c = 0;
      for(c;c<how;c++){
      newUsers.prototype = {
        name: prompt('Введите имя '),
        lastName: prompt('Введите фамилию: '),
        happyDay: prompt('Введите дату рождения: '),};
        return users.push(newUsers());
      }
  } 
  
  newUsers();
  console.log(users);