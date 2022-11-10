Na primeira linha temos a quantidade de termos que sera exibidos

Declaramos 3 variáveis, que seria os termos para fazer cálculos para os próximos termos

Variáveis: let t1, let t2 e let t3

let t1 -> Recebe valor de 0, pois em Fibonacci o primeiro termo é zero

let t2 -> Recebe o valor de 1, pois o segundo termo é 1.

let t3 -> Usamos essa variável para fazer a soma dos números anterior, no caso t3 tem que receber o cálculo de t1+t2 e assim montar uma lógica aonde o t1 receba o t2 que será o número anterior e o número da vez seria a soma de t1+t2 que sera atribuído para t3.

Então fazermos uma lógica em um laço de repetição for, aonde t3 = t1+t2 dai mostramos o valor na tela, e depois fazemos a lógica do t1 receber o valor de t2 e t2 receber t3 que seria a soma do número da vez do loop, com isso temos t1 recebendo o valor anterior e t2 recebendo a soma, dando continuidade a FIBONACCI.

No loop precisamos fazer com que o contador comece com 2, pois se colocamos para começar com 0, ele ira fazer o cálculo dos termos normalmente, porem ele ira mostrar termos a mais.

Como em Fibonacci os 2 primeiros termos são 0 e 1, colocamos para printalos automaticamente sem cálculo, porem ser a quantidade de termos escolhido for 0, 1 ou 2 ele tem um retorno fixo sem cálculo nem um, mostrado com a estrutura de decisão

0 termos = "Não tem termos" 1 termos = 0 2 termos = 0 1

E acima de 2 termos, temos o cálculo que sera a soma dos 2 termos passados!

No loop temos a condição contator menor que a quantidade Determos.
