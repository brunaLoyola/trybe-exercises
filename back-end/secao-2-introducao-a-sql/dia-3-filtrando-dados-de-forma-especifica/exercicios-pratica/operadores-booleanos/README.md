# Operadores Booleanos

A tabela a seguir é um guia de como a classificação indicativa é usada no banco de dados sakila. Consulte-a ao fazer os desafios propostos.

G = permitido para todos

PG = permitido para crianças menores de 13 anos

PG-13 = permitido para pessoas com mais de 13 anos

R = permitido para pessoas com mais de 17 anos

NC-17 = permitido apenas para adultos

Entre no banco de dados sakila e siga as instruções (e guarde as queries para conferir posteriormente):

01 - Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org. As informações podem ser encontradas na tabela customer
![Booleanos - Exercício 01](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/5aa7e1a9-d6ec-416f-8930-4af1126d24b1)

02 - Precisamos de um relatório dos nomes dos clientes, em ordem alfabética, que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2, e não inclua o cliente KENNETH no resultado. As informações podem ser encontradas na tabela customer
![Booleanos - Exercício 02](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/90202f86-a14f-41d8-ba44-cf55a6cd8087)

03 - O setor financeiro quer saber título, descrição, ano de lançamento, classificação etária (rating) e valor do custo de substituição (replacement_cost), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film
![Booleanos - Exercício 03](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/ca8bc79f-1bf0-4a97-86cc-e09f8857e431)


04 - Quantos clientes estão ativos e na loja 1? As informações podem ser encontradas na tabela customer
![Booleanos - Exercício 04](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/e179de45-c93f-4c52-8458-a96c91e7722e)

05 - Mostre todos os detalhes dos clientes que não estão ativos na loja 1. As informações podem ser encontradas na tabela customer
![Booleanos - Exercício 05](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/096ae431-97bd-4557-82a9-19b223b8630e)

06 - Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film
![Booleanos - Exercício 06](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/5bdc01ab-c334-4667-b9fb-568e3199e6e6)
