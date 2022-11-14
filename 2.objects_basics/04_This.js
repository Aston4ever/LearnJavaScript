/*(function () {
    /!*
    Здесь функция makeUser возвращает объект.
    Каким будет результат при обращении к свойству объекта ref? Почему?
    *!/
    function makeUser() {
        return {
            name: "John",
            ref: this
        };
    }

    let user = makeUser();
    alert(user.ref.name); //ошибка
})()*/

(function () {
    /*Создайте объект calculator (калькулятор) с тремя методами:
        read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
        sum() (суммировать) возвращает сумму сохранённых значений.
        mul() (умножить) перемножает сохранённые значения и возвращает результат.*/
    let calculator = {
        read() {
            this.a = +prompt("enter number");
            this.b = +prompt("enter number");
        },
        sum(){
            return this.a + this.b
        },
        mul() {
            return this.a * this.b
        }
    }
    calculator.read();
    calculator.sum();
    calculator.mul();
})()