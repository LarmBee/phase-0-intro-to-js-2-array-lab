// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
};
function destructivelyPrependCat(name){
    cats.unshift(name)
};
function destructivelyRemoveLastCat(name){
    cats.pop(name)
};
function destructivelyRemoveFirstCat(name){
    cats.shift(name)
};
function appendCat(name){
    let newcats = [...cats,"Broom"];
    return newcats;
};
function prependCat(name){
    let newcats1 = ["Arnold",...cats];
    return newcats1;
};

function removeLastCat(name){
    let newcat2 = [...cats];
    newcat2.pop()
    return newcat2;
};

function removeFirstCat(name){
    let newcat3 = [...cats]
    newcat3.shift()
    return newcat3;
}