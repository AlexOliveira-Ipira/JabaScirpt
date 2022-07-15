//Conceitos de função de primeira classe
function getName(){
    return 'Alex Borges de Oliviera'
}

function logFn(fn){
    console.log(fn())
}

const logFnResult = logFn

logFnResult(getName) //Passada por argumento