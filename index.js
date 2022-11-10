const quantidadeDeTermos = 8

let t1 = 0
let t2 = 1 
let t3 = 0

if (quantidadeDeTermos == 0){
    console.log("Não tem termos")
}else if(quantidadeDeTermos == 1){
    console.log("0")
}else if(quantidadeDeTermos == 2){
    console.log("0")
    console.log("1")
}else{

    console.log(t1)
    console.log(t2)

    for (let contador= 2; contador < quantidadeDeTermos; contador++){
        t3 = t1+t2
        console.log(t3)
        t1 = t2
        t2 = t3
    }
}