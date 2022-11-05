//
// (function (){
//     alert( null || 2 || undefined ); //2
// })();
//
// (function (){
//     alert( alert(1) || 2 || alert(3) ); //2 Alert не возвращает значиние и результат 1го выражения = undefined (false). выведится 2, т к это первое истинное значение
// })();
//
// (function (){
//     alert( 1 && null && 2 ); //null
// })();
//
// (function (){
//     alert( alert(1) && alert(2) ); // перва вычисляется выражение (1) а затем выдается undefined
// })();
//
// (function (){
//     alert( null || 2 && 3 || 4 ); //3
// })();
// (function (){
//     if (age >= 14 && age <= 90) {
//         return "You are alive"
//     }
// })();
// (function (){
//     if (age <= 14 || age >= 90) {
//         return "You are not alive"
//     }
// })();
// (function (){
//     if (-1 || 0) alert( 'first' ); // yes
//     if (-1 && 0) alert( 'second' ); // no
//     if (null || -1 && 1) alert( 'third' ); // yes
// })();
(function (){
    /*Напишите код, который будет спрашивать логин с помощью prompt.
    Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
    Пароль проверять так:
    Если введён пароль «Я главный», то выводить «Здравствуйте!»,
    Иначе – «Неверный пароль»,
    При отмене – «Отменено».
*/

    let input = prompt("Who is this");
    if (!!input === true){
        if (input === 'admin') {
            let password = prompt('enter password')
            if (!!password === true) {
                if (password === 'im in charge') {
                    alert("welcome")
                } else {
                    alert('wrong password')
                }
            } else {
                alert("no password was entered")
            }
        } else {
            alert("I dont know you");
        }
    } else {
        alert("cancel")
    }
})();