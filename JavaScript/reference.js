// -Reference Types


// -Object in Js
let person = {
    name: 'Ashish',
    age: 21
};

// *Dot Notation
person.name = 'Ramchandra';

// * Bracket Notation
person['name']= 'Anyname';


console.log(person.name);


// - Array in javascript 

let someArr = ['Some1', 'some2'];
someArr[2] = 'some3';
someArr[3] = 5;
console.log(someArr.length);



//- function in js 

//? performing a task
function someF(fiN, laN){
console.log('Hi There ' + fiN + " " + laN)
}

someF('Ashish', 'Ramchandra');


//? Calculating a value
function square(num){
    return num * num;
}

console.log(square(4));