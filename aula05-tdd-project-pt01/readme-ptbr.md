# História: Alugar um carro
## Caso de Uso 01

Como usuário do sistema

Para obter um carro disponível em uma categoria específica

Dada uma categoria de carro contendo 3 carros diferentes

Quando eu verifico se há um carro disponível

Em seguida, deve escolher aleatoriamente um carro da categoria escolhida

## Caso de Uso 02

Como usuário do sistema

Para calcular o preço final do aluguel

Dado um cliente que quer alugar um carro por 5 dias

E ele tem 50 anos

Quando ele escolhe uma categoria de carro que custa $ 37,6 por dia

Então devo adicionar o Imposto de sua idade que é de 30% ao preço da categoria do carro

Então a fórmula final será `((preço por dia * Imposto) * número de dias)`

E o resultado final será `((37,6 * 1,3) * 5)= 244,4`

E o preço final será impresso em formato português brasileiro como "R$ 244,40"

## Caso de Uso 03

Como usuário do sistema

Para registrar uma transação de aluguel

Dado um cliente registrado que tem 50 anos

E um modelo de carro que custa $ 37,6 por dia

E uma data de entrega que está com 05 dias de atraso

E dada uma data real 05/11/2020

Quando alugo um carro devo ver os dados do cliente

E o carro selecionado

E o preço final que será de R$ 244,40

E DueDate que será impresso em português do Brasil formato "10 de Novembro de 2020"