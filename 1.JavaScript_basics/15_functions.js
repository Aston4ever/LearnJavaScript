/*
Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат.
    function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
    Сделайте два варианта функции checkAge:
    Используя оператор ?
    Используя оператор ||
*/
function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}

function checkAge2(age) {
    return age > 18 || confirm('Родители разрешили?');
}

(function (a, b) {
    // Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
    return a > b ? a : b;
})();

(function (a, b) {
    // Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
    return a**b
})();