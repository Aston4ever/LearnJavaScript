

(function (){
    if ("0") { //true
        alert( 'Привет' );
    }
})();

(function (){
    let jsOfficialName = prompt('Какое "официальное" название JavaScript?', '')
    if (jsOfficialName === 'ECMAScript') {
        return "Верно!"
    } else  {
        return 'Не знаете? “ECMAScript”!'
    }
})();

(function (){
    let num = prompt('Введите число', '0');
    if (+num > 0) {
        return 'Greater than zero'
    } else if (+num < 0 ) {
        return 'Less than zero'
    } else {
        return "zero"
    }
})();

(function (){
    let result = (3 + 5 < 4) ? 'Мало' : "Много";
})();

(function (){
   let message = (login == 'Сотрудник') ? 'Hello':
                 (login == 'Директор') ? 'Hi':
                 (login == '') ? 'No login':
                 '';
})();