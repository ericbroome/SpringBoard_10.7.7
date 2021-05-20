/* Object destructuring 1 */
const objectDestructuring_1 = function() {
    let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
    let {numPlanets, yearNeptuneDiscovered} = facts;
    console.log(numPlanets);
    console.log(yearNeptuneDiscovered);
    return [
        numPlanets, //8
        yearNeptuneDiscovered //1846
    ]; 
}

/* Object destructuring 2 */
const objectDestructuring_2 = function() {
    let planetFacts = {
        numPlanets: 8,
        yearNeptuneDiscovered: 1846,
        yearMarsDiscovered: 1659
    };
    let {numPlanets, ...discoveryYears} = planetFacts;
    console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
    return(discoveryYears);
}

/* Object destructuring 3 */
const objectDestructuring_3 = function() {
    getUserData = function({firstName, favoriteColor="green"}) {
        return `Your name is ${firstName} and you like ${favoriteColor}`;
    }
    return [
        getUserData({firstName: "Alejandro", favoriteColor: "purple"}), // 'Your name is Alejandro and you like purple'
        getUserData({firstName: "Melissa"}), // 'Your name is Melissa and you like green'
        getUserData({}) // 'Your name is undefined and you like green'
    ];
}

/* Array destructuring 1 */
const arrayDestructuring_1 = function() {
    let [first, second, third] = ["Maya", "Marisa", "Chi"];
    console.log(first), // Maya
    console.log(second), // Marisa
    console.log(third) // Chi
    return [first, second, third];
}

/* Array destructuring 2 */
const arrayDestructuring_2 = function() {
    let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
    ];
    console.log(raindrops), // Raindrops on roses
    console.log(whiskers), // whiskers on kittens
    console.log(aFewOfMyFavoriteThings) // (3) ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']
    return [raindrops, whiskers, aFewOfMyFavoriteThings];
}

/* Array destructuring 3 */
const arrayDestructuring_3 = function() {
    let numbers = [10, 20, 30];
    [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
    console.log(numbers); // (3) [10, 30, 20])
    return numbers;
}

const assignVarToObj = function(x, y) {
    //Create an object and destructure the arguments into it (nestedly)
    let obj = {
        numbers: {
          a:x,
          b:y
        }
    };
    const {a, b} = obj.numbers;
    //For testing purposes we'll return the local variables as an array
    return [a, b];
}

const arraySwap = function() {
    let arr = [1, 2];
    //One-line array swap
    return [arr[0], arr[1]] = [arr[1], arr[0]];   //[2, 1]
}

const raceResults = ([first, second, third, ...others]) => ({first, second, third, others});



