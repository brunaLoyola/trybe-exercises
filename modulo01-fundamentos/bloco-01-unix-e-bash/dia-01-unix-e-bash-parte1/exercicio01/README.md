![Exercício 01 - criação de arquivos e diretórios](https://user-images.githubusercontent.com/51630262/196067355-04dd6ef2-cf7e-4073-bec3-eea1a4408e99.png)

1.  Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.
2.  Crie um arquivo de texto com o nome trybe.txt.
3.  Crie uma cópia do arquivo trybe.txt com o nome trybe_backup.txt.
4.  Renomeie o arquivo trybe.txt.
5.  Dentro de unix_tests, crie um novo diretório chamado backup.
6.  Mova o arquivo trybe_backup.txt para o diretório backup.
7.  Dentro de unix_tests, crie um novo diretório chamado backup2.
8.  Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.
9.  Apague a pasta backup.
10. Renomeie a pasta backup2 para backup.
11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
12. Apague o diretório backup.
13. Limpe o terminal.
14. Para os próximos dois exercícios, crie, de forma manual, na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt:

```
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
```

15. Mostre na tela as 5 primeiras skills do arquivo skills.txt.
16. Mostre na tela as 4 últimas skills do arquivo skills.txt.
17. Apague todos os arquivos que terminem em .txt.

![Resolução](https://user-images.githubusercontent.com/51630262/196067751-775870bb-156f-40ab-83e7-34156fcd29a4.png)

1.  Para criação de diretório é preciso utilizar o comando `mkdir <nome do diretório>`, para navegar até o diretório é necessário utilizar o comando `cd <nome do diretório>`

![criando_diretorio](https://user-images.githubusercontent.com/51630262/196068434-6bade36c-f17f-4013-976e-58b084b31e7a.png)

2. Para a criação de um arquivo, é preciso utilizar o comando `touch <nome do arquivo>.<tipo do arquivo>`

![criando_arquivo](https://user-images.githubusercontent.com/51630262/196068697-e7f92151-66c6-48e3-ac4a-0372363edb35.png)

3. Para a criação de uma cópia com o mesmo de um arquivo, é preciso utilizar o comando `cp <nome do arquivo> <nome da cópia>`

![mudando nome](https://user-images.githubusercontent.com/51630262/196069733-e7e7f4c0-4720-4482-a2e1-1b144f12de46.png)

4. Para renomear um arquivo é possível utilizar o comando `mv <nome atual do arquivo> <novo nome do arquivo>`

![copiando](https://user-images.githubusercontent.com/51630262/196069727-ac937847-387f-46cf-9134-3481ee166840.png)

5. Como citado no item 01, para a criação de diretórios é preciso a utilização do comando `mkdir <nome do diretório>`

![criando diretorio backup](https://user-images.githubusercontent.com/51630262/196070428-45c79912-d499-4d8f-9b6a-bcd764c26f57.png)

6. Para mover um arquivo para dentro do diretório, é preciso utilizar o comando `mv <nome do arquivo> <caminho até o diretório>`

![movendo trybe txt para backup](https://user-images.githubusercontent.com/51630262/196070402-7aaeeea6-3386-4564-9ea2-e8bc0b7c77a9.png)

7. Como citado nos itens 01 e 05, para a criação de diretórios é preciso a utilização do comando `mkdir <nome do diretório>`

![criando backup2](https://user-images.githubusercontent.com/51630262/196070429-280df0c7-80bf-4d06-bbcb-6dc50ee94c00.png)

8. É possivel mover o arquivo de um diretório para outro, sem necessáriamente estar dentro do diretório, é só utilizar o comando `mv <caminho do arquivo> <caminho do diretório>`

![movendo de um backup para backup2](https://user-images.githubusercontent.com/51630262/196070416-20ae9bc3-103d-4f19-a7c1-2e0b66f26610.png)

9. Para remover um diretório é preciso utilizar o comando `rmdir <nome do diretório>`

![apagando backup](https://user-images.githubusercontent.com/51630262/196070397-8d32ed9b-1999-42d0-8390-6cea29d154e8.png)

10. Para renomear deve ser feito o mesmo procedimento do item 04, porém ao invés de utilizar um arquivo, se utilizar os diretórios com o comando `mv <nome atual do diretório> <novo nome do diretório>`

![Captura de tela de 2022-10-16 22-32-52](https://user-images.githubusercontent.com/51630262/196071129-93453b25-eb37-459d-add7-e3bade12d0bc.png)

11. Para conseguir ver o caminho do diretório onde se encontra, é preciso utilizar o comando `pwd`, dessa forma será possível localizar onde se encontra no momento. Para conseguir ver somente os arquivos que exitem naquele diretório é preciso utilizar o comando `ls -a *`

![pwd](https://user-images.githubusercontent.com/51630262/196262595-d583c596-9d09-4829-b357-991663e50735.png)

12. O diretório backup não está vazio, então não é possível utilizar o comando `rmdir <nome do diretório>`, então para forçar que um diretório com conteúdo seja removido, é preciso utilizar o comando `rm -rf <nome do diretório>`, dessa forma pode ser concluída a exclusão.

![rm -rf](https://user-images.githubusercontent.com/51630262/196256948-3c96ccd8-9ec9-443c-b813-6a9ac4ab9b83.png)

13. Para ter um terminal limpo, é preciso somente digitar o comando `clear`

![terminal cheio](https://user-images.githubusercontent.com/51630262/196260262-920c06be-bffa-47de-aad1-1b1125030bc0.png)

![clear](https://user-images.githubusercontent.com/51630262/196260234-9a051eb1-b4dd-4a11-b07e-4ac21bbe12c2.png)

14. Para mostrar os 5 primeiros itens da lista é preciso utilizar o comando `head -5 skills.txt`, o comando `head <nome do arquivo>` mostra por padrão os 10 primeiros itens, porém para que mostre o número que desejamos é só adicionar a quantidade `head -n <nome do arquivo>`.

![head](https://user-images.githubusercontent.com/51630262/196261375-44327fab-8c3e-485c-b086-7c1e981758cc.png)

14. Para mostrar os 5 últimos itens da lista é preciso utilizar o comando `tail -5 skills.txt`, o comando `tail <nome do arquivo>` mostra por padrão os 10 últimos itens, porém para que mostre o número que desejamos é só adicionar a quantidade `tail -n <nome do arquivo>`.

![tail](https://user-images.githubusercontent.com/51630262/196261586-aad69d41-aeb6-477d-9c6f-1deb58956d9f.png)

15. Para conseguir apagar todos os arquivos com o tipo `.txt`, é preciso utilizar o comando `rm *.txt`, o asterisco demonstra que é pedido que selecione todos com o tipo pedido.

![apg txt](https://user-images.githubusercontent.com/51630262/196261788-ed041588-9c8d-47fb-9577-60d4b254cae1.png)
