/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Spencer Rejas';

const currentDateAndTime  = new Date();
const currentYear = currentDateAndTime.getFullYear();

const profilePicture = 'images/profile.JPG';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFoods = ['Spinach Artichoke Dip', 'Burgers', 'Pumpkin Pie', 
'Dark Chocolate Chip Cookies'];

foodElement.innerHTML = favoriteFoods;

let newFavoriteFoodItem = 'Massaman Curry';
favoriteFoods.push(newFavoriteFoodItem);

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;