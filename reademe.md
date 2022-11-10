Na primeira linha temos a quantidade de termos que sera exibidos

Declaramos 3 variaveis, que seria os termos para fazer calculos para os proximos termos

Variaveis: let t1, let t2 e let t3

let t1 -> Recebe valor de 0, pois em Fibonacci o primeiro termo é zero

let t2 -> Recebe o valor de 1, pois o segundo termo é 1.

let t3 -> Usamos essa variavel para fazer a soma dos numero anteriores, no caso t3 tem que receber o calculo de t1+t2 e assim montar uma logica aonde o t1 receba o t2 que será o numero anterior e o numero da vez seria a soma de t1+t2 que sera atribuido para t3.

Então fazermos uma logica em um laço de repetição for, aonde t3 = t1+t2 dai mostramos o valor na tela, e depois fazemos a logica do t1 receber o valor de t2 e t2 receber t3 que seria a soma do numero da vez do loop, com isso temos t1 recebendo o valor anterior e t2 recebendo a soma, dando continuidade a FIBONACCI.

No loop precisamos fazer com que o contador começe com 2, pois se colocamos pra começar com 0, ele ira fazer o calculo dos termos normalmente, porem ele ira mostrar termos a mais.

Como em Fibonacci os 2 primeiros termos são 0 e 1, colocamos para printalos automaticamente sem calculo, porem ser a quantidade de termos escolhio for 0, 1 ou 2 ele tem um retorno fixo sem calculo nem um, mostado com a estrutura de decisão

0 termos = "Não tem termos"
1 termos = 0
2 termos = 0 1

E acima de 2 termos, temos o calculo que sera a soma dos 2 termos passados!

No loop temos a condição contadaor menor que a quantidadeDeTermos.
