const array1 = ['one', 'two', 'three']
const newArray1 = array1.map((element) => `<li>${element}</li>`);
document.getElementById("myList").innerHTML = newArray1.join("");

const array2 = ['A', 'B', 'A']

function convertGradesToPoints(grade) {
    let points;

    switch (grade) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        default:
            points = 0;
    }

    return points;
}

const newArray2 = array2.map(convertGradesToPoints);

const comulativeGPA = newArray2.reduce((gpa, points) => gpa + points)/newArray2.length;

const array3 = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const newArray3 = array3.filter((fruit) => fruit.length > 6);

const array4 = [12, 34, 21, 54]
let luckNumber = 21;

const luckyNumberIndex = array4.indexOf(luckNumber);

const buttonElement = document.getElementById("submitButton");

function copyInput(event) {
    console.log(event);

    const inputElement = document.getElementById("inputBox");
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = inputElement.value;
}

buttonElement.addEventListener("click", copyInput);

const log = document.querySelector("#log");

document.addEventListener("keydown", logKey);

function logKey(e) {
  console.log(e);
}