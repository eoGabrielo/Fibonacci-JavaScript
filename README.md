# Fibonacci-JavaScript <br/>

Logica Fibonacci<br/>
A sequência de Fibonacci é uma sequência de números, onde o número 0 é o primeiro e o segundo termo é o 1<br/>
e seus números seguintes são a soma do número atual com o antecessor.
0,1, 1, 2, 3, 5, 8 ...

0+1= 1<br/>
1+1= 2<br/>
2+1= 3<br/>
3+2= 5<br/>
...

Na primeira linha temos a quantidade de termos que sera exibidos<br/>

Declaramos 3 variáveis, que seria os termos para fazer cálculos para os próximos termos<br/>

Variáveis: let t1, let t2 e let t3<br/>

let t1 -> Recebe valor de 0, pois em Fibonacci o primeiro termo é zero<br/>

let t2 -> Recebe o valor de 1, pois o segundo termo é 1.<br/>

let t3 -> Usamos essa variável para fazer a soma dos números anterior,<br/>
no caso t3 tem que receber o cálculo de t1+t2 e assim montar uma lógica aonde o t1 receba o t2 que será o número anterior<br/>
e o número da vez seria a soma de t1+t2 que sera atribuído para t3.<br/>

Então fazermos uma lógica em um laço de repetição for, aonde t3 = t1+t2 dai mostramos o valor na tela,<br/>
e depois fazemos a lógica do t1 receber o valor de t2 e t2 receber t3 que seria a soma do número da vez do loop,<br/>
com isso temos t1 recebendo o valor anterior e t2 recebendo a soma, dando continuidade a FIBONACCI.<br/>

No loop precisamos fazer com que o contador comece com 2, pois se colocamos para começar com 0,<br/>
ele ira fazer o cálculo dos termos normalmente, porem ele ira mostrar termos a mais.<br/>

Como em Fibonacci os 2 primeiros termos são 0 e 1, colocamos para printalos automaticamente sem cálculo,<br/>
porem ser a quantidade de termos escolhido for 0, 1 ou 2 ele tem um retorno fixo sem cálculo nem um,<br/>
mostrado com a estrutura de decisão<br/>

0 termos = "Não tem termos"<br/> 
1 termos = 0<br/> 
2 termos = 0 1<br/>

E acima de 2 termos, temos o cálculo que sera a soma dos 2 termos passados!<br/>

No loop temos a condição contador menor que a quantidade de termos.<br/>
