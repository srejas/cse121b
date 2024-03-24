/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: 'Spencer Rejas',
    photo: 'images/profile.JPG',
    favoriteFoods: [
        'Spinach Artichoke Dip',
        'Burgers',
        'Pumpkin Pie',
        'Dark Chocolate Chip Cookies'
    ],
    hobbies: [
        'Weight lifting',
        'Cycling',
        'Motorcycle riding',
        'Canyoneering',
        'Watching movies'
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Las Vegas, NV',
        length: '8 years'
    },
    {
        place: 'Miami, FL',
        length: '2 years'
    },
    {
        place: 'Lima, Peru',
        length: '2 months'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(favoriteFood => {
    const listItem = document.createElement('li');
    listItem.textContent = favoriteFood;
    document.querySelector('#favorite-foods').appendChild(listItem);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let listItem = document.createElement('li');
    listItem.textContent = hobby;
    document.querySelector('#hobbies').appendChild(listItem);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(object => {
    let dtItem = document.createElement('dt');
    dtItem.textContent = object.place;

    let ddItem = document.createElement('dd');
    ddItem.textContent = object.length;

    document.querySelector('#places-lived').appendChild(dtItem);
    document.querySelector('#places-lived').appendChild(ddItem);
})

