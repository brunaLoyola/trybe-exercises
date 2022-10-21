// Declarando as variáveis
let patientId = 50;
let isEnrolled = true;

//Declarando a função
const patientInfo = {
  firstName: "Ana",

  lastName: "Santos",
};

//Declarando a constante
const patientEmail = "ana@email.com";

//Imprimindo os tipos primitivos
console.log(typeof patientId); //number
console.log(typeof isEnrolled); //boolean
console.log(typeof patientInfo); //object
console.log(typeof patientEmail); //string
console.log(typeof patientAge); //undefined (é um valor indefinido pois a variável, não foi declarada)

//Atribuindo um novo valor a patientId
patientId = "50";

//Imprimindo o tipo da alteração que foi feita
console.log(typeof patientId); //String (pois ao colocar entre aspas, compreende que é uma string e não um número inteiro)
