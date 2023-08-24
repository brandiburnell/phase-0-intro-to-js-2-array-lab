// Write your solution here!

// Assign initial cats array
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const moreCats = [...cats, name];

    return moreCats;
}

function prependCat(name) {
    const evenMoreCats = [name, ...cats];

    return evenMoreCats;
}

function removeLastCat() {
    const fewerCats = cats.slice(0, -1);
    return fewerCats;
}

function removeFirstCat() {
    const evenFewerCats = cats.slice(1);
    return evenFewerCats;
}