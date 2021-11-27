function receivesAFunction(thing) {
    return thing();
}

receivesAFunction(function (){
    2 + 2;
});

const returnsANamedFunction = function () {
return receivesAFunction
}

function returnsAnAnonymousFunction () {
    return function () {
        return returnsANamedFunction
    }
}