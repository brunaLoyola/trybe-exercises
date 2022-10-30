![Variáveis](https://user-images.githubusercontent.com/51630262/198128026-76766a64-8a69-4cca-b347-fb0ed6f2b0fd.png)

1. Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
2. Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
3. Crie uma variável let chamada birthYear e atribua a ela o ano em que você nasceu.
4. Utilize o console.log() para imprimir as constantes e variáveis que você criou.
5. Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
6. Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔

![Resolução](https://user-images.githubusercontent.com/51630262/196067751-775870bb-156f-40ab-83e7-34156fcd29a4.png)

1. Para criação de uma constante é preciso utilizar o `const` (pois é uma constante, o valor dela não será alterado depois), depois deve ser feita a declaração e adicionar qual atributo ela irá ter. Lembrando que o exercício pede o nome, então será uma `String`, logo deve estar entre aspas.

```
    const name = "Bruna";
```

2. Para o segundo requisito, pede para declarar uma constante para atribuir o nome da cidade onde o indíviduo nasceu, como é o nome também é uma `String`, pode ser repetido o requisito número 01, a diferença será o nome e o atributo da constante.

```
    const birthCity = "Paranaguá"
```

3. Para a criação de uma váriavel que receberá o ano de nascimento, é preciso utilizar o `Let` (pois é uma váriavel que possa ser alterada depois), depois deve ser atribuido ao nome `birthYear`, o ano em que você nasceu. Como se trata de um tipo `number`, não é necessário utilizar as aspas, pois elas são somente necessárias para `Strings`.

```
   let birthYear = 2002;
```

4. O `console.log(<variável>)`, nesse caso serve para imprimir no terminal, qual o atributo que tem em uma váriavel e deve ser utilizado da seguinte forma.

```
 console.log(myName); //Resultado: Bruna
 console.log(birthCity); //Resultado: Paranaguá
 console.log(birthYear); //Resultado: 2002
```

5. Para alterar o valor de uma `VÁRIAVEL`, é necessário apenas colocar o `nome` dela e o novo atributo. E seguir o mesmo passo anterior utilizando o `console.log(birthYear);`

```
    birthYear = 2030
    console.log(birthYear); // Resultado: 2030
```

6. Não é possível alterar uma `CONSTANTE`, pois na `const`são valores que você não deseja alterar, então ao tentar mudar, irá aparecer o erro `TypeError: Assignment to constant variable.`, que significa que o tipo para a nova atribuição do valor é incorreto.

```
birthCity = "Matinhos"; // Resultado: TypeError: Assignment to constant variable.
console.log(birthCity);
```

