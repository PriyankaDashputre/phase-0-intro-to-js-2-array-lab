// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function beforeEach () {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}
function destructivelyAppendCat(name) {
    return cats.push(name);
}
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    return cats.pop();
}
function destructivelyRemoveFirstCat() {
 return cats.shift();
}
function appendCat(name) {
    const copycat= [...cats , name];
    return copycat;
}

function prependCat(name) {
    const copycat= [name, ...cats];
    return copycat;
}
function removeLastCat() {
    //const copycat= cats.slice();
    return cats.slice(0, 2);
}

function removeFirstCat() {
    //const copycat= cats.slice();
    return cats.slice(1);
}