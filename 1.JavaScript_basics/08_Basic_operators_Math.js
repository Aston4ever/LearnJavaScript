(function (){
    //чему равно?
    let a = 1, b = 1;//a = 2, b = 2

    let c = ++a; // 2
    let d = b++; // 1
})();

(function (){
    let a = 2;//4

    let x = 1 + (a *= 2);//5
})();

(function (){
    "" + 1 + 0 // 10
    "" - 1 + 0 // -1
    true + false// 1
    6 / "3" // 2
    "2" * "3" // 6
    4 + 5 + "px" // 9px
    "$" + 4 + 5 // $45
    "4" - 2 // 2
    "4px" - 2 // NaM
    "  -9  " + 5 // "-95" MISTAKE  correct answer = "   -9  5"
    "  -9  " - 5 // -14
    null + 1 // null1 MISTAKE  correct answer = 1 (null приведен к числу 0)
    undefined + 1 //undefined1 MISTAKE  correct answer = NaN (undefined приведен к NaN)
    " \t \n" - 2 // Nan MISTAKE  correct answer = -2 (пустая строка преобразована в 0_
})();

(function (){
    let a = prompt("Первое число?", 1);
    let b = prompt("Второе число?", 2);

    alert(+a + +b); //
})();