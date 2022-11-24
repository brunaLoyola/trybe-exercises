const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((nome) => nome === name);

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));


const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, idadeMinima) => arr.every((person) => person.age >= idadeMinima);
  
  console.log(verifyAges(people, 18));
  console.log(verifyAges(people, 14));