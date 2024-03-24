myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);


const favoriteFoodsElement = document.querySelector('#favorite-foods');
const placesLivedElement = document.querySelector('#places-lived');

// function createAndDisplayNewContent(content) {
//     let favoriteFood = document.createElement('li');
//     favoriteFood.textContent = content;
//     favoriteFoodsElement.appendChild(favoriteFood);
// }

// myInfo.favoriteFoods.forEach(createAndDisplayNewContent);

// function createAndDisplayNewContentWithMap(content) {
//     return `<li>${content}</li>`;
// }

// const displayItems = myInfo.favoriteFoods.map(createAndDisplayNewContentWithMap);
// favoriteFoodsElement.innerHTML = displayItems.join(' ');

function createAndDisplayChosenArrays(array, displayFunction) {
    const newArray = array.map(displayFunction).join(' ');
    
    return newArray;
}

function favoriteFoodsDisplay(element) {
    return `<li>${element}</li>`;
}

function placesLivedDisplay(element) {
    return `<dt>${element.place}</dt><dd>${element.length}</dd>`
}

favoriteFoodsElement.innerHTML = createAndDisplayChosenArrays(myInfo.favoriteFoods, favoriteFoodsDisplay);
placesLivedElement.innerHTML = createAndDisplayChosenArrays(myInfo.placesLived, placesLivedDisplay);

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
};

let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++
};

studentReport.forEach(element => {
    if (element < LIMIT) {
        console.log(element);
    }
});

for (let score in studentReport) {
    if (studentReport[score] < LIMIT) {
        console.log(studentReport[score]);
    }
};


const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const date = new Date();
let tomorrow = date.getDay() + 1;

for (let i = 0; i < DAYS; i++) {
    console.log(dayNames[tomorrow]);
    tomorrow++;
    if (tomorrow >= 7) {
        tomorrow = 0;
    }
}