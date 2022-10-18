![Exercício 02 - manipulação   busca](https://user-images.githubusercontent.com/51630262/196441302-407809b6-4a5e-4fb4-b062-5e54684e34a4.png)

1. Crie um novo diretório chamado unix_tests_search e entre nele. 2- Na pasta unix_tests_search, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl

```
    mkdir unix_tests_search
    cd unix_tests_search
    curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
```

2. Mostre todo o conteúdo do arquivo countries.txt na tela.
3. Mostre o conteúdo de countries.txt, página por página, até encontrar a Zambia.
4. Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.
5. Busque por Brazil no countries.txt.
6. Busque novamente por brazil, mas agora utilizando o lower case.
7. Crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.
8. Busque pelas frases que não contenham a palavra fox.
9. Conte o número de palavras do arquivo phrases.txt.
10. Conte o número de linhas do arquivo phrases.txt.
11. Crie os arquivos empty.tbt e empty.pdf.
12. Liste todos os arquivos do diretório unix_tests_search.
13. Liste todos os arquivos que terminem com txt.
14. Liste todos os arquivos que terminem com tbt ou txt.
15. Acesse o manual do comando ls.

![Resolução](https://user-images.githubusercontent.com/51630262/196067751-775870bb-156f-40ab-83e7-34156fcd29a4.png)

1. Para a criação de um diretório é preciso utilizar o comando `mkdir <nome do diretório>`, para entrar nele é preciso utilizar o comando `cd <nome do diretório>`, para baixar o arquivo é necessário seguir os passos citados anteriormente.

![instalando countries](https://user-images.githubusercontent.com/51630262/196455127-8f64e3c5-c47b-4ca5-a7e5-ac14b913a72b.png)

2. Para mostrar todo o conteúdo de `countries.txt`, é preciso utilizar o comando `cat countries.txt`.

![02](https://user-images.githubusercontent.com/51630262/196455152-4aed4e8a-4932-4292-9494-9d82aabfb7dd.png)

3. Para mostrar o conteúdo de `countries.txt`, página por página é preciso utilizar o comando `less <nome do arquivo>`, para descer e encontrar o nome pedido, é preciso somente precionar a tecla `enter`.

![3 1](https://user-images.githubusercontent.com/51630262/196455186-80d19c6b-d0dd-4af1-bf30-ff4eea447a64.png)

![3 2](https://user-images.githubusercontent.com/51630262/196455206-589a0944-c4ce-4c85-9a13-6e2464051894.png)

![3 3](https://user-images.githubusercontent.com/51630262/196455240-677a3779-3ec7-4bc4-8ae2-394fd268b313.png)

4. Mostrar o contéudo página por página e fazer uma pesquisa é preciso basicamente refazer os comandos citados no item 02, porém para fazer a pesquisa, ao entrar no less é só digitar `/palavra`.

![4](https://user-images.githubusercontent.com/51630262/196455276-2ca9342e-32c8-4277-a27b-bc02e661554d.png)

![4 1](https://user-images.githubusercontent.com/51630262/196455320-e5a7261e-fb31-4751-8679-bb9d33b48064.png)

5. Para pesquisas dentro de arquivos, sem precisar abrir, é possível utilizar o comando `grep <palavra> <arquivo>`, porém nesse caso ele se torna `case sensitive`

![5](https://user-images.githubusercontent.com/51630262/196455348-2b87c10e-bc65-4143-88c4-84a3f2c70e47.png)

6. Agora para pesquisas em que não se é case sensitive, pode ser utilizado o mesmo comando, porém utilizando o `-i` para que ele também encontre a palavra mesmo estando em `lower case`(minúscula), da seguinte forma `grep -i <palavra> <arquivo>`

![6](https://user-images.githubusercontent.com/51630262/196455400-22d4f931-8fe5-4615-87dd-fb5e189e7f9f.png)

7. Para criar um arquivo, é preciso utilizar o comando `touch <nome do arquivo>.<tipo>`, no exercício diz que não tem problema utilizar a parte gráfica para adicionar as frases, porém para facilitar ao utilizar o comando `cat > <nome do arquivo>`, é possível escrever as frases direto no terminal.

![07](https://user-images.githubusercontent.com/51630262/196487969-87764b71-1753-43bb-ae72-a4bb765a3a4d.png)

8. Para fazer a busca em um arquivo, de uma palavra que não contém em uma frase, é possível utilizar o comando do item 07, porém adicionando o `-iv`, da seguinte forma `grep -iv palavra <arquivo>`.

![08](https://user-images.githubusercontent.com/51630262/196487976-306bde35-1f23-4b5a-9788-7c7c826f6fd9.png)

9. Para saber o número de palavras que tem em um arquivo é preciso utilizar o comando `wc -w <arquivo>`

![09](https://user-images.githubusercontent.com/51630262/196487990-83f89483-d4e3-4000-bcef-4242b79ac29f.png)

10. Para saber o número de linhas que tem em um arquivo é preciso utilizar o comando `wc -l <arquivo>`

![10](https://user-images.githubusercontent.com/51630262/196488010-75befa29-abd5-42df-9b24-2b7f484c8118.png)

11. Para criação de arquivos é preciso utilizar o comando `touch <nome do arquivo>.<tipo do arquivo>`, como será a criação de dois arquivos, é possível fazer em uma só vez, aprenas dando espaço entre os arquivos

![11](https://user-images.githubusercontent.com/51630262/196488051-efbf299a-fb6d-477e-a455-9a13178b287f.png)

12. Para ser listado todos os aquivos é necessário utilizar o comando `ls -a *`

![12](https://user-images.githubusercontent.com/51630262/196488078-d6c4e351-79df-4a4a-88a7-af04e412d71b.png)

13. Para que seja listado apenas os arquivos que terminem com `txt`, é preciso utilizar o comando `ls *.txt`

![13](https://user-images.githubusercontent.com/51630262/196488104-0f7cce67-fcc2-439b-b823-729a17282cd8.png)

14. Para que seja listado apenas os arquivos que terminem com `txt e tbt`, é preciso utilizar o comando `ls *.txt *.tbt`

![14](https://user-images.githubusercontent.com/51630262/196488123-85b5b390-3e93-40fc-920b-398c0a119e19.png)

15. Para acessar o manual de `ls`, é preciso utilizar o comando `man ls`

![15](https://user-images.githubusercontent.com/51630262/196488169-f9557ebc-f438-4a86-b37f-8bda16fb9bc8.png)

![15 1](https://user-images.githubusercontent.com/51630262/196488155-0ac66162-46ae-4f5a-bbb3-b492f7a79ea4.png)
