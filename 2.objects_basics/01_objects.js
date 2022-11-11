(function () {
    /*Создайте пустой объект user.
    Добавьте свойство name со значением John.
    Добавьте свойство surname со значением Smith.
    Измените значение свойства name на Pete.
    Удалите свойство name из объекта.*/
    let user = {
        name: "John",
        surname: "Smith",
    }
    user.name = "Pete";
    delete user.name;
})();

(function () {
    // Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
    function isEmpty(obj) {
        for (let key in obj) {
            return false
        }
        return true
    }
})();

(function () {
    // Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

    const user = {
        name: "John"
    };

// это будет работать?
    user.name = "Pete"; // user = ссылка на объект. Саму ссылку не меняем, а меняем объект, который находится по этой ссылке
})();

(function () {
    // У нас есть объект, в котором хранятся зарплаты нашей команды:

        let salaries = {
            John: 100,
            Ann: 160,
            Pete: 130
        }
        let sum = 0;
        for (let key in salaries) {
            sum += salaries[key]
        }
})();

(function () {

})();