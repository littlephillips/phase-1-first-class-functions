function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction (){
    return function namedFunction(){
        console.log(`returns a function"`);
    }
}

  
function returnsAnAnonymousFunction () {
    return () => console.log(`returns ananonymous function`);
}