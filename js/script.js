/* First task */

var base;
var exponent;

function isInteger(num) {
  if (parseInt(num) != num) {
    alert(num + ' не целое число');

    return true;
  } else {

    return false;
  }
}

function module(num) { 
  if (num < 0) {
    
    return num / -1; 
  } else { 
    
    return num; 
  } 
} 

function pow(base, exponent) {
  var result = 1;
  var base = prompt('Введите целое число', base);
  while(isInteger(base)) {
    var base = prompt('Введите целое число', base);
  }
  
  var exponent = prompt('Введите степень числа (целое число)', exponent);
  while(isInteger(exponent)) {
    var exponent = prompt('Введите степень числа (целое число)', exponent);
  }

  for (var i = 0; i < module(exponent); i++) {
    result *= base;
  }

  if (exponent < 0) {
    result = 1 / result;
    console.log(base + ' ^ ' + exponent + ' = ' + result);

    return result;
  } else {
    console.log(base + ' ^ ' + exponent + ' = ' + result);

    return result;
  }
}

pow();

/* Second task */

var loginBase = [];
var length = 5;

function pushLoginBase() {
  var login;
  for (var i = 0; i < length; i++) {
    loginBase.push(prompt('Введите логин для добавления в базу', login))
  }
}

function signIn() {
  var name = prompt('Введите логин', name);

  for (var i = loginBase.length - 1; i >= 0; i--) {
    if (name == loginBase[i]) {
      alert(name + ' вы успешно вошли');

      return;
    }
  }

  alert('Ошибка! Ваш логин не зарегистрирован в базе данных');
}

pushLoginBase();
console.log(loginBase);
signIn();
