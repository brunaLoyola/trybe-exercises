const nota = 90;

if (nota >= 80) {
  // Se a pessoa tiver a nota igual ou superior a 80, ela está aprovada
  console.log("Parabéns, você foi aprovada(o)!");
} else if (nota < 80 && nota >= 60) {
  //Se não se a nota foi menor que 80 e superior ou igual a 60, a pessoa está na lista de espera
  console.log("Você está em nossa lista de espera ");
} else {
  // Se a nota não for nenhuma das opções a cima  (no caso menor que 60), a pessoa está reprovada
  console.log("Você foi reprovado(a)");
}
