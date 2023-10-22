Exercício 1 🚀 :
Vamos aprimorar nossos conhecimentos sobre images e volumes, para isso:

1 - Crie um arquivo HTML chamado missao_trybe.html que tenha a seguinte estrutura:

Tag title com o seguinte texto “Trybe”;
Tag H1 com o seguinte texto “Missão da Trybe”;
Tag p com o seguinte texto “Gerar oportunidade para pessoas”;
Salve o arquivo em qualquer lugar da sua máquina com a extensão html

![Crie o arquivo HTML - exercicio 01](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/54d5b07e-8cce-4a25-85a1-affb53578572)


2 - Crie um container para manter um servidor httpd:2.4.54 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.
![Criando container - exercicio 02 / parte 01](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/6a3af4d5-b55c-404b-b41e-508405ba9cec)


3 - Após criar o container, acesse a página HTML que está rodando no servidor em seu browser.

![Acessando porta - exercicio 03](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/82910293-9409-4811-976a-3686c27eeb1d)

4 - Acesse o arquivo missao_trybe.html e acrescente a tag <p> com o seguinte texto: “Nosso negócio é GENTE! #VQV”;
![Modificando arquivo - exercicio 04](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/35f48f55-217e-4de9-b531-94430635673a)

5 - Obtenha o id do container httpd:2.4.54;

![Descobrindo ID container - exercicio 05](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/cfbf8ce9-9870-4573-a289-ec7a4d92f89a)

6 - Obtenha o Mounts através da propriedade Source, que deve mostrar o volume desse container no Docker Host;

docker inspect 9104a8c133dc

![Mounts - exercicio 06](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/2387f2fd-41fc-4549-909a-03fe9a750ce2)

7 - Agora pare o container httpd:2.4.54;
![Parando container - exercicio 07](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/1d89a460-6c6b-4fe2-b40e-79058ad7011f)

8 - Exclua o seu container;
![Removendo container - exercicio 08](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/e1db1b25-0fac-41b6-b2ad-6be9b22749ad)

9 - Verifique se a pasta onde você salvo o arquivo html permanece no mesmo lugar;

![Verificando página - exercicio 09 ](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/7e7a6824-d394-417f-8bbc-1cdfb953a25f)

10 - Obtenha o IMAGE ID do servidor;

![Descobrindo Id da imagem - exercicio 10](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/e5f163e8-172f-441e-ac43-f2f62dc70819)

11 - Depois de obter o IMAGE ID, exclua a imagem.

![Excluindo imagem - exercicio 11](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/b5c54765-f6da-495c-a152-3149dad2538a)

Exercício 2 🚀:
Crie o arquivo Compose para subir um ghost blog, essa plataforma é similar com o WordPress e é utilizada para criar sites de conteúdo. Você pode ler no site oficial como criar conteúdos nele e utilizá-lo. Para esse exercício, utilizaremos apenas sua página de exemplo:

1 - Utilize a versão “3” no arquivo;
2 - Crie um service para subir a plataforma, utilize a imagem ghost:1-alpine;
3 - Publique a porta 2368, fazendo bind também para a 2368;

![Criando docker compose - exercicio 02 / parte 01](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/6f6357a2-5de3-42da-9597-c29a9ef359fc)

4 - Suba a aplicação utilizando o docker-compose e então acesse a porta publicada para validar se deu tudo certo.

![Subindo docker compose - exercicio 02 / parte 02](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/99ee557e-c93f-498b-bd6d-7b6b13fdd87e)

Exercício 3 🚀:
Por padrão o ghost utiliza um banco de dados SQLite interno para salvar as informações, porém, vamos alterar esse comportamento para exercitar nossos conhecimentos:

1 - Crie um novo serviço db para o nosso banco de dados:

Podemos utilizar o banco de dados MySQL, utilize a imagem mysql:5.7.40;
Precisamos definir uma senha root para o banco, para isso utilize a variável de ambiente MYSQL_ROOT_PASSWORD
2 - Agora precisamos configurar nosso serviço ghost para utilizar o banco de dados:
Defina o tipo de banco de dados a ser usado pelo ghost definindo a variável de ambiente database__client para mysql;
Defina o serviço db como servidor do banco de dados na variável de ambiente database__connection__host;
Defina as credenciais para a conexão com o banco de dados
Para definir a pessoa usuária (root), utilize a variável de ambiente database__connection__user
Para definir a senha (a mesma que definimos no nosso serviço db), utilize a variável de ambiente database__connection__password
Defina o nome ghost para o nome do database no banco de dados utilizando a variável de ambiente database__connection__database;
Utilize a opção depends_on para criar relações de dependências entre os serviços.

![Configurando serviços - exercicio 03 / parte 01](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/e00acfd1-e1a6-47cd-8a66-a5c3a5df5120)

3 - Suba o ambiente com o novo arquivo usando o docker-compose e então acesse a porta.


![Subindo ambiente - exercicio 03 / parte 02](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/a8c5223b-2ee8-4795-95fd-b523d9a0ea53)

Exercício 4:
Agora vamos praticar os conceitos de volumes e networks.

1 - Configure o nosso serviço mysql para utilizar um volume, conforme vimos no conteúdo, utilize o caminho target /var/lib/mysql.
![Configure o serviço - exercicio 04 / parte01 ](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/2fc7074f-bef5-46db-9000-d8fe9badb19d)

2 - Ao invés de utilizar a rede padrão criada pelo Compose, defina uma rede chamada my-network para a comunicação dos dois serviços.


3 - Suba o ambiente com o novo arquivo usando o docker-compose e então acesse-o.

![Configure o serviço - exercicio 04 / parte02](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/d923c1de-5bb0-4c2a-a95b-89de8f45948e)


![Configure o serviço - exercicio 04 / parte03](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/bd393dd1-84ec-4993-9f17-7221f6b5becd)












