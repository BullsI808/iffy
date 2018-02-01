var input1 = document.getElementById('input');
var btn = document.getElementById('click');
var answer = document.getElementById('result');

btn.addEventListener('click', function(){
 if (input1.value === "3"){
     answer.innerHTML = "triangle";
 }
 else if (input1.value === "4"){
     answer.innerHTML = "square";
 }
 else if (input1.value ==="5"){
     answer.innerHTML = "pentagon";
 }
 else if (input1.value ==="6"){
     answer.innerHTML = "hexagon";
 }
 else if (input1.value ==="7"){
     answer.innerHTML = "heptagon";
 }
 else if (input1.value === "8"){
     answer.innerHTML = "octogon";
 }
 else if (input1.value === "9"){
     answer.innerHTML = "nonagon";
 }
 else if (input1.value === "10"){
     answer.innerHTML = "decagon";
 }
 else {
    answer.innerHTML = "try again";
 }
});