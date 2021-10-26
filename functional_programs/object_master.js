const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// Find an array of pokemon objects where the id is evenly divisible by 3
const divByThree = pokémon.filter( val => val.id % 3 === 0 );
console.log(divByThree);

// Find an array of pokemon objects that are "fire" type
const fire = pokémon.filter( val => val.types.includes("fire") );
console.log(fire);

// Find an array of pokemon objects that have more than one type
const moreThanOneType = pokémon.filter( val => val.types.length > 1 );
console.log(moreThanOneType);

// Find an array with just the names of the pokemon
const pokeNames = pokémon.map( val => val.name );
console.log(pokeNames);

// Find an array with just the names of pokemon with an id greater than 99
const isGreaterThan99 = pokémon.filter( val => val.id > 99 ).map( val => val.name );
console.log(isGreaterThan99);

// Find an array with just the names of the pokemon whose only type is poison
const typePoison = pokémon.filter( val => val.types.length === 1 && val.types[0] === "poison" ).map( val => val.name );
console.log(typePoison);

// Find an array containing just the first type of all the pokemon whose second type is flying
const typeFlying = pokémon.filter( val => val.types[1] === "flying" ).map( val => val.types[0]);
console.log(typeFlying);

// A count of the number of pokemon that are normal type
const countNormal = pokémon.filter( val => val.types.includes("normal") ).length;
console.log(countNormal);