function Solve(val) {
    var v = document.getElementById('input-num');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('input-num').value;
    var num2 = eval(num1);
    document.getElementById('input-num').value = num2;
 }

 function Back() {
    var ev = document.getElementById('input-num');
    ev.value = ev.value.slice(0,-1);
 }

 function Clear() {
    var inp = document.getElementById('input-num');
    inp.value = '';
 }