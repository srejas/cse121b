const cardsElement = document.querySelector('#cards');
let YuGiOhCards = [];

const displayCards = (cards) => {
    cards.forEach(card => {
        const articleElement = document.createElement('article');

        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', card.card_images[0].image_url);
        imgElement.setAttribute('alt', `${card.name}`);

        articleElement.appendChild(imgElement);
        cardsElement.appendChild(articleElement);
    })}

const getCards = async () => {
    const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
    if (response.ok) {
        const data = await response.json();
        YuGiOhCards = data.data;
    }
    displayCards(YuGiOhCards);
}

function clear() {
    cardsElement.innerHTML = '';
}

function filterCards(cards) {
    clear();
    let filter = document.querySelector('#filtered').value;
    const cardsWithAttributes = cards.filter(card => card.attribute !== undefined);
    const cardsWithAtkDef = cards.filter(card => card.atk !== undefined || card.def !== undefined);

    switch (filter) {
        case '1700':
            displayCards(cardsWithAtkDef.filter(card => card.atk < 1700));
        break;
        case '2500':
            displayCards(cardsWithAtkDef.filter(card => card.atk >= 1700 && card.atk < 2500));
        break;
        case '3000':
            displayCards(cardsWithAtkDef.filter(card => card.atk >= 2500));
        break;
        case '1200':
            displayCards(cardsWithAtkDef.filter(card => card.def < 1200));
        break;
        case '2300':
            displayCards(cardsWithAtkDef.filter(card => card.def >= 1200 && card.def < 2300));
        break;
        case '4000':
            displayCards(cardsWithAtkDef.filter(card => card.def >= 2300));
        break;
        case 'Spell':
            displayCards(cards.filter((card) => card.type === 'Spell Card'));
        break;
        case 'Trap':
            displayCards(cards.filter((card) => card.type === 'Trap Card'));
        break;
        case 'Dark':
            displayCards(cardsWithAttributes.filter((card) => card.attribute === 'DARK'));
        break;
        case 'Divine':
            displayCards(cardsWithAttributes.filter((card) => card.attribute === 'DIVINE'));
        break;
        case 'Earth':
            displayCards(cardsWithAttributes.filter((card) => card.attribute === 'EARTH'));
        break;
        case 'Fire':
            displayCards(cardsWithAttributes.filter((card) => card.attribute === 'FIRE'));
        break;
        case 'Light':
            displayCards(cardsWithAttributes.filter((card) => card.attribute === 'LIGHT'));
        break;
        case 'Water':
            displayCards(cardsWithAttributes.filter((card) => card.attribute === 'WATER'));
        break;
        case 'Wind':
            displayCards(cardsWithAttributes.filter((card) => card.attribute === 'WIND'));
        break;
        case 'Aqua':
            displayCards(cards.filter((card) => card.race === 'Aqua'));
        break;
        case 'Beast':
            displayCards(cards.filter((card) => card.race === 'Beast'));
        break;
        case 'Beast-Warrior':
            displayCards(cards.filter((card) => card.race === 'Beast-Warrior'));
        break;
        case 'Cyberse':
            displayCards(cards.filter((card) => card.race === 'Cyberse'));
        break;
        case 'Dinosaur':
            displayCards(cards.filter((card) => card.race === 'Dinosaur'));
        break;
        case 'Divine-Beast':
            displayCards(cards.filter((card) => card.race === 'Divine-Beast'));
        break;
        case 'Dragon':
            displayCards(cards.filter((card) => card.race === 'Dragon'));
        break;
        case 'Fairy':
            displayCards(cards.filter((card) => card.race === 'Fairy'));
        break;
        case 'Fiend':
            displayCards(cards.filter((card) => card.race === 'Fiend'));
        break;
        case 'Fish':
            displayCards(cards.filter((card) => card.race === 'Fish'));
        break;
        case 'Insect':
            displayCards(cards.filter((card) => card.race === 'Insect'));
        break;
        case 'Machine':
            displayCards(cards.filter((card) => card.race === 'Machine'));
        break;
        case 'Plant':
            displayCards(cards.filter((card) => card.race === 'Plant'));
        break;
        case 'Psychic':
            displayCards(cards.filter((card) => card.race === 'Psychic'));
        break;
        case 'Pyro':
            displayCards(cards.filter((card) => card.race === 'Pyro'));
        break;
        case 'Reptile':
            displayCards(cards.filter((card) => card.race === 'Reptile'));
        break;
        case 'Rock':
            displayCards(cards.filter((card) => card.race === 'Rock'));
        break;
        case 'Sea Serpent':
            displayCards(cards.filter((card) => card.race === 'Sea Serpent'));
        break;
        case 'Spellcaster':
            displayCards(cards.filter((card) => card.race === 'Spellcaster'));
        break;
        case 'Thunder':
            displayCards(cards.filter((card) => card.race === 'Thunder'));
        break;
        case 'Warrior':
            displayCards(cards.filter((card) => card.race === 'Warrior'));
        break;
        case 'Winged Beast':
            displayCards(cards.filter((card) => card.race === 'Winged Beast'));
        break;
        case 'Wyrm':
            displayCards(cards.filter((card) => card.race === 'Wyrm'));
        break;
        case 'Zombie':
            displayCards(cards.filter((card) => card.race === 'Zombie'));
        break;
        case 'all':
            displayCards(cards);
        break;
    }
}

function searchCards(cards) {
    clear();
    let searchCriteria = document.querySelector('#search').value.toLowerCase();
    displayCards(cards.filter(card => card.name
        .toLowerCase()
        .includes(searchCriteria)
    ));
}

getCards();

document.querySelector('#filtered').addEventListener('change', () => {filterCards(YuGiOhCards)});
document.querySelector('#search').addEventListener('keydown', () => {searchCards(YuGiOhCards)});