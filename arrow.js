// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const giveToma = () => "Toma";
const doMath = (x, y) => {
    const add = x + y;
    const sub = x - y;
    const result = add * sub; 
    return result;
}

console.log(doubleIt(8));
console.log(add(3, 45));
console.log(giveToma());
console.log(doMath(2, 4));