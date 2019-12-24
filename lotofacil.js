var jogoBase = [1,2,3,4,6,7,10,11,13,15,16,17,19,20,21,24,25]
var input = require('fs').readFileSync('/dev/stdin', 'utf8'); // carrega jogo de um arquivo entrada

var lines = input.split('\n')
var jogos = []
var cont = 0

lines.forEach(separa)


function separa(line, index, array){
    if(line.length > 55){
        let lin = line.split(/\s/)
        let jogo = []
        for(let i = 2; i < 15+2; i++)
            jogo.push(lin[i])
        jogos.unshift(jogo)
    }
    
}

console.log("Total de jogos registrados " + jogos.length)

//conta todos os numeros

var status = new Array(25).fill(0)


console.log("Jogos :" +status)

for(i in jogos)
    for(j in jogos[i]){
        status[Number(jogos[i][j]-1)]++
    }
console.log("Jogos :" + status)


var obj = []
for(i in status){
    let id = Number(i)+1
    let objeto = { numero: id, quantidade: status[i]}

    obj.push(objeto)
}

console.log(obj)
console.log('---------------------')

obj.sort(function(a, b){
    return b.quantidade - a.quantidade
});

function compara(a, b){
    return a - b
}


console.log(obj)
console.log('/*****')

let str = []
for(i in obj){
    if(i < 16)
        str.push(obj[i].numero)
}
console.log("Números que mais saíram ")
console.log( str.sort(compara))

str = []
for(let i = 24; i > 9; i--)
    str.push(obj[i].numero)

console.log("Números que menos saíram ")
console.log( str.sort(compara))
