// function x() {
//     for (let index = 0; index < 5; index++) {
//         setTimeout(() => {
//             console.log(index);
//     }, index);   
//     } 
// }

// var 1;
// console.log(1);


// This is a recursive function for factorial

// var func = (a) => {
//     if(a <= 1){
//         return a;
//     }
//     else{
//         return a*func(a-1);
//     }
// }

// var number = 5;
// console.log(func(number));

// const something = () => {
//     let a = 2;
//     var b = 'sting';
//     const c = true
// }

// console.log(something(a))
// console.log(something.b)
// console.log(something.c)

// function eventlistener() {
//     let count = 0;
//     document.getElementById('click').addEventListener("click", function() {
//         console.log("Clicked", ++count)
//     })
// }

// eventlistener();


document.getElementById('submit').onclick = function() {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'car';
    checkbox.name = 'interest';
    checkbox.value = 'car';
 
    var label = document.createElement('label')
    label.htmlFor = 'car';
    label.appendChild(document.createTextNode('Car'));
 
    var br = document.createElement('br');
 
    var container = document.getElementById('container');
    container.appendChild(checkbox);
    container.appendChild(label);
    container.appendChild(br);
}