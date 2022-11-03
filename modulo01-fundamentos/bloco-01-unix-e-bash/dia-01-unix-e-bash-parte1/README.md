![UNIX E BASH - PARTE 1](https://user-images.githubusercontent.com/51630262/197902615-d0785c67-e8c5-4987-9f0f-93ae7d203cec.png)

# Sumário

1. O que é.
2. Os três níveis do Unix
3. Arquivos e Processos
4. Hierarquia de Arquivos
5. Lista de Arquivos

#

## O que é

-É um sistema operacional, criado em 1969
-Foi criado por Ken Thompson e Dennis Ritchie, utilizando a linguagem `C`

Possibilitou:

-`Suporte a multiusuários`: várias pessoas utilizando o mesmo computador sem um interferir no outro. 
-`Multitarefas`: realizar várias tarefas simultaneamente. 
-`Portabilidade`: ser adaptável a vários sistemas computacionais.

#

## Os três níveis do Unix

### 1. Kernell

-É responsável por fazer a interação entre o `hardware` e o `software`

-Gerenfia os recursos do sistema e permite que os programas façam uso dele.

-Começa a funcionar assim que o computador é ligado, detectando o `hardware` indispensável para a máquina, como o monitor, a placa de vídeo e processador.

- pós o `login`, o Kernell administra as principais funções do Sistema Operacional, como o Gerenciamento de memória, processos e arquivos

### 2. Shell

-É a interface entre o sistema operacional - usuário - núcleo

-Login é o shell

-O shell normalmente utiliza interfaces como a line interface(linha de comando) ou a graphic user interface (Interfae gráfica do utilizador)

-Sua função é:

1. Ler a linha de comando
2. Interpretar o significado
3. Exercutar o comando
4. Devolver o resultado para o usuário.

-Tipos de shell - sh, bash, csh, tcsh e zsh

### 3. Aplicativos

-São os softwares que o usuário instala no sistema

#

## Processos e Arquivos

- Processos: Tudo que é feito no unix, os processos recebem um identificador único chamado de PDI.
  -> Esse identificador recebe informações como: proprietário, sessão, estado atual, linha de comando utilizada.

- Arquivos: Tudo é um arquivo, diretórios, arquivos, dispositivos, etc.
  -> Cada arquivo possui uma série de permissões como: Tipo do arquivo, permissões, hard link, dono, grupo, tamanho, data e hora da última modificação e nome. (para acessar as permissões é preciso utilizar o comando `ls -l`)

#

## Hierarquia de arquivos

- / - raiz

- boot - arquivos de configuração para inicialização

- bin - aplicativos binários

- dev - arquivos do dispositivo

- etc - scripts de inicialização

- home - diretórios home para diferentes tipos de usuário

- proc - diretórios dinâmicos especial que mantem informações de estado do sistema

- root - diretórios home do usuário root

- sbin - binário de sistemas importantes

- tmp - arquivos temporários

- usr - aplicativos e arquivos disponível para os usuários

- var - arquivos váriaveis

#

## Lista de comandos

| Comando                                      | Objetivo                                                        |
| -------------------------------------------- | --------------------------------------------------------------- |
| ls                                           | Lista os diretórios e os arquivos                               |
| ls -a                                        | Lista os diretórios e arquivos ocultos                          |
| cd `<diretório>`                             | Navega até um diretório                                         |
| clear                                        | Limpa a tela do terminal                                        |
| mkdir `<diretório>`                          | Cria um diretório                                               |
| cd .                                         | Faz referencia ao diretório presente                            |
| cd ..                                        | Volta para o diretório anterior                                 |
| pwd                                          | Mostra o caminho completo do diretório atual                    |
| touch `<arquivo>`.`<tipo>`                   | Cria um arquivo com o tipo informado                            |
| cp ` <arquivo>``<nome da cópia do arquivo> ` | Faz uma cópia identica do arquivo                               |
| cat `<arquivo>`                              | Mostra o conteúdo do arquivo                                    |
| mv `<arquivo>` `<caminho da mudança>`        | Move o arquivo para o caminho informado                         |
| rm `<arquivo>`                               | Apaga o arquivo                                                 |
| rmdir `<diretório>`                          | Apaga um diretório (esse diretório deve estar vazio)            |
| rm -rf `<diretório>`                         | Força a exclusão de um diretório que tem um conteúdo            |
| less `<arquivo>`                             | Mostra o arquivo, dividindo em páginas                          |
| less `<arquivo>` + /                         | Após entrar nas páginas, ao utilizar o `/` é feito uma pesquisa |
| head `<arquivo>`                             | Mostra por padrão as 10 primeiras linhas do arquivo             |
| head -n `<arquivo>`                          | Mostra as n(número) primerias linhas que foi pedido             |
| tail `<arquivo>`                             | Mostra por padrão as 10 últimas linhas do arquivo               |
| tail -n `<arquivo>`                          | Mostra as n(número) últimas linhas que foi pedido               |
| grep + `<palavra>` `<arquivo>`               | Busca a palavra dentro do arquivo (case sensitive)              |
| grep -i + `<palavra>` `<arquivo>`            | Busca a palavra dentro do arquivo (não é case sensitive)        |
| grep -i + `<frase>` `<arquivo>`              | Busca a frase dentro do arquivo (não é case sensitive)          |
| grep -iv + `<frase>` `<arquivo>`             | Lista as linhas que não tem a frase (não é case sensitive)      |
| grep -in + `<frase>` `<arquivo>`             | Exibi o número de linhas que tem a frase (não é case sensitive) |
| grep -ic + `<frase>` `<arquivo>`             | Quantidade de vezes que a frase é repetida no arquivo           |
| wc `<arquivo>`                               | Número de linhas, palavras e caracteres                         |
| wc -w `<arquivo>`                            | Número de palavras que tem no arquivo                           |
| wc -l `<arquivo>`                            | Número de linhas que tem no arquivo                             |
| wc -c `<arquivo>`                            | Número caracteres que tem no arquivo                            |
| ls \*                                        | Lista os arquivos que tem dentro dos diretórios, sem navegar    |
| ls `<? resto da palavra>`                    | Encontra sem saber da letra que está com interrogação           |
| man `comando`                                | Mostra o manual do comando                                      |
| whatis `<comando>`                           | Mostra o que o comando faz                                      |
| apropos `<o que deseja fazer >`              | Mostra uma lista de comandos que faz o que foi                  |
