//Возможно ли создать функции A и B, чтобы new A() == new B()?
/*

    function A() { ... }
    function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
*/

let obj = {}

function A() {
    return obj
}

function B() {
    return obj
}

/*
* Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
    read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
    sum() возвращает сумму этих свойств.
    mul() возвращает произведение этих свойств.
Например:
let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );*/

function Calculator() {
    this.input = function () {
        this.a = +prompt("введите первое число", 0);
        this.b = +prompt("введите второе число", 0);
    }
    this.sum = function () {
        return this.a + this.b
    }
    this.mul = function () {
        return this.a * this.b
    }
}

let two = new Calculator();
two.input();
alert(two.sum());
alert(two.mul())