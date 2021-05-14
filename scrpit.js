function insert(num){
    let numero = document.getElementById('output').innerHTML
    document.getElementById('output').innerHTML = numero + num
}

function clean(){
    document.getElementById('output').innerHTML = "";
}

function calc(){
    let resultado = document.getElementById('output').innerHTML
    if(resultado){
        document.getElementById('output').innerHTML = eval(resultado)
    }
}
