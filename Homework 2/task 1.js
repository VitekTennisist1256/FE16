var how = parseInt(prompt('Vvedite skolko polzovateley: '));
var esd = [];
    var c = 0;
  for(c;c<how;c++){var usera = {
 name: prompt('Введите имя '),
 lastName: prompt('Введите фамилию: '),
 happyDay: prompt('Введите дату рождения: '),};
 esd.push(usera)};
 console.log(esd);

// var i = 0;
// var sdf = [];
// function users(){ 
// for (i;i<how;i++){
//    var user = {
//     first_name: `${name}`,
//     last_name: `${fameil}`,
//     birthday: `${happyDay}`,
// }
// sdf.push(user);
// }
// // sdf -- это массив, в который добавляеться объект user столько раз, сколько укажит пользователь в переменной how
// // через переменную how определяется  то, сколько объектов необходимо добавить
// return sdf
//     };
//     users();
//     console.log(sdf);
