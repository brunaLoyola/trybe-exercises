![Fluxo de exceções e manipulação de objetos](https://user-images.githubusercontent.com/51630262/203878896-d1daeba4-9e94-49d2-b074-c90cb6494a93.png)

# Sumário

1. Throw e Try/Catch
2. Adicionando novas chaves
3. Object.keys
4. Object.values
5. Object.entries
6. Object.assign

#

## Throw e Try/Catch

### Throw

-O `throw` é criado para que ao acontecer uma situação específica o sistema dispara um erro criado pelo próprio em tempo de execução.

``` throw new Error(); ```

`throw`: a palavra serve para lançar uma exceção.

`new`: o operador serve criar um objeto personalizado ou nativo do JavaScript (se não utilizar o `new`, não será possível adicionar uma menssagem personalizada).

`Error()`: é um objeto nativo do JavaScript que representa um erro, dentro dos parênteses é possível adicionar uma frase personalizada. 

#### Obs:
Até o momento a mensagem é enviada apenas para o console, fazendo com que o usuário não consiga ler. É preciso que o erro seja capturado e ai entra o `Try/Catch`

#

### Try/Catch

-Enquanto o `try` tenta executar o código sem que tenha nenhum problema, o `catch` é executado caso ocorra um erro.

### Exemplo

Ao realizar a execução de um código fazemos uma função onde utilizamos o `throw` para especificar um erro, então dentro da função que utilizaremos para realizar algum comando no código. 

Colocamos um `try`, onde ele irá a chamar a função para verificar se o código segue os requisitos pedidos, caso ele siga os requisitos ele continuará no `try`, e irá executar a função. 

Caso ocorra um erro o programa irá executar o `catch`, onde ele recebe por parâmetro a mensagem de erro que estava no `throw`, podendo capturar e mostrar para o usuário.  

```
const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos'); 
  }
};
const sum = (value1, value2) => {
  try { 
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    return error.message;
  }
};

console.log(sum(2, '3'));

```

#

## Adicionando novas chaves

- Para poder acessar alguma propriedade específica de um objeto é possível usar duas sintaxes:

`objeto.nomeDaPropriedade`
`objeto[stringQueContemONomeDaPropriedade]`

- Esse mesmo recurso pode ser usado para criar novas propriedades no objeto. Para isso, basta acessar a propriedade e atribuir um valor a ela.

### Exemplo
```
const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

customer1.lastName = 'Faria';

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

customer2['lastName'] = 'Silva';
```

#

## Object.keys

- O método `Object.keys`, retorna as chaves que existem em um determinado objeto.

### Exemplo

```
const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

console.log(Object.keys(coolestTvShow));
```
*Retorno*: [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

#

## Object.values
- O método `Object.values`, retorna os valores que existem nas chaves de um determinado objeto.

### Exemplo

```
const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

console.log(Object.values(coolestTvShow));
```
*Retorno*: [
  'BoJack Horseman',
  'adult animation',
  'Raphael Bob-Waksberg',
  'Princess Carolyn',
  'Princess Carolyn always lands on her feet.'
   6
]
#

## Object.entries
- O método `Object.entries`, retorna um array de arrays que contém chaves e os valores que existem em um determinado objeto.

### Exemplo

```
const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

console.log(Object.entries(coolestTvShow));

```
*Retorno*: [
[ 'name', 'BoJack Horseman' ],

[ 'genre', 'adult animation' ],

[ 'createdBy', 'Raphael Bob-Waksberg' ],

[ 'favoriteCharacter', 'Princess Carolyn' ],

[ 'quote', 'Princess Carolyn always lands on her feet.' ],

[ 'seasons', 6 ]]

#

## Object.assign

- O método `Object.assing`, é utilizado para copiar os valores de todas as propriedades de um ou mais objetos para um objeto destino.

- o primeiro paramêtro sempre será o destino, já os demais serão os objetos que serão copiados

-Quando há propriedades repetidas entre o objeto destino e os objetos passados por parâmetro, irá sempre prevalecer o último valor.

### Exemplo

```
const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

```
*Retorno*: [
{ name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } 
