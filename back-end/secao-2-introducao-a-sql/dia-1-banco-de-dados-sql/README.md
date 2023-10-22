Agora vamos abrir o Workbench e fazer uma análise prática do banco de dados sakila, que já deve estar instalado, caso você tenha feito a instalação do MySql Workbench de forma padrão. Caso o banco sakila não esteja disponível, volte até a seção Restaurando o banco de dados de prática sakila e siga as instruções listadas. Com esse banco disponível na sua instalação do Workbench, sua missão agora é tentar finalizar os exercícios a seguir!

Exercício 1: Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench.

![Pesquisa sem linha de comando - exercicio 01 / parte 01](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/50802b11-ac49-49da-ba0b-bb07fcbab068)

![Pesquisando sem linha de comando - exercicio 01/ parte 02](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/6f963b9c-4211-4dfb-9699-cab3711192e8)

Exercício 2: Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench.

![Criando tabela sem linha de comando - exercicio 02 / parte 01](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/e9bd8b9c-1475-4be8-b61c-aa998dde8e02)

![Criando tabela sem linha de comando - exercicio 02 / parte 02](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/5629e2ed-4763-44a3-ac0f-5b31b4b2d17a)


Exercício 3: Feito isso, crie uma tabela com as seguintes restrições:

Nome da tabela: filme

Colunas:

filme_id - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
descricao - não permite nulos, tipo texto (varchar(100));
ano_lancamento - não permite nulos, tipo int;
nota - permite nulos, tipo int;

![Adicionando tabela - exercicio 03](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/75cd17cf-ca23-4439-8273-7fdda4990209)


Exercício 4: Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.

Faz referência a tabela Country

![Referêcia da tabela city - exercicio 04](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/f69a939b-6068-4748-b227-7f47c08a5119)

Exercício 5: Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country?

N:1


Exercício 6: Qual tipo de relacionamento a tabela country faz com a tabela city?

1:N

Exercício 7: Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.

store -> staff
country -> city
film -> language
