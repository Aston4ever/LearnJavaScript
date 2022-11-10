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

})();

(function () {

})();