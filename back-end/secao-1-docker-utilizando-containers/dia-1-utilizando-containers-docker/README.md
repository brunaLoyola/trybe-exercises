🚀 Exercício 1
No Docker Hub, utilizando a caixa de busca ("Search for great content"), busque pela imagem da Distribuição Linux Debian.

![Buscando Debian - Exercício 01 ](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/cdf0c6a1-ecfc-4d67-a302-89752044539a)



🚀 Exercício 2
Uma vez que encontrar a imagem oficial, acesse-a (clicando em seu card) e verifique na página de detalhes. Confira se existe algum comando para baixar a imagem localmente sem ter que criar um container para isso.

![Baixando imagem localmente - Exercício 02](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/6ee1cf9d-bd65-4958-bbf3-5733322a18d4)


docker pull debian

🚀 Exercício 3
Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida da distribuição.

![Baixando imagem utilizando a tag: stable-slim- Exercício 03 ](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/0eccb6be-e92a-4917-9e91-274ab6c65ce8)

docker pull debian:stable-slim


🚀 Exercício 4
Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência — não esqueça referenciar a tag.

![Criar e executar um container modo interativo - Exercício 04](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/df941b76-ce07-4a83-ae9f-fef4d5ba004b)

docker container run -it -d debian:stable-slim 
docker ps -a
docker exec -it 4f2a6968d458 sh 


🚀 Exercício 5
No terminal, você deve conseguir rodar o comando cat /etc/*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container.

![Retornando Dados - Exercício 05](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/809e559b-3e3d-4f90-bcd4-4b60d972311d)


🚀 Exercício 6
Encerre o terminal.

![Finalizando terminal - Exercício 06](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/211bb58b-458c-465b-9cfc-ea7658739108)


🚀 Exercício 7
Verifique na sua lista de contêiners qual contêiner se refere ao exercício que acabou de praticar.

![listando containers - Exercício 07](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/2079a6f4-c052-4d6e-b767-2ea72efb6588)

docker container ps -a

🚀 Exercício 8
Inicie o mesmo container novamente, sem criar outro. Valide se ele está ativo na lista de containers.

![ Iniciando o mesmo container- Exercício 08](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/fbb65ae2-9c49-46b1-898d-a375aa048076)

🚀 Exercício 9
Retome o container que foi criado anteriormente neste exercício.
![Retomando o container- Exercício 09](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/47fb359d-3062-488c-ab96-84955c819aa4)

🚀 Exercício 10
Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container.

![Retornando a versão do container - Exercício 10](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/9900fea4-38bf-4f1f-83a9-3e25733daf41)

🚀 Exercício 11
Encerre o terminal.
![ Encerrando terminal - Exercício 11](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/91175419-ce42-465c-b01a-92de3bc283ab)


🚀 Exercício 12
Remova somente o container criado para esse exercício.
![ Removendo container - Exercício 12 ](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/0f0518ca-2a8a-4bf9-95c6-1c9a6406bfbc)


Exercício 13
[BÔNUS] Crie e rode de modo interativo em modo ‘Cleanup’, a imagem andrius/ascii-patrol.

![ Modo Interativo- Exercício 13](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/998cf35d-1989-4268-bb09-c6a809275566)

![ Modo Interativo- Exercício 13 / parte02](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/09025302-f876-4140-b7cc-f09d2f00d857)

Exercício 14
[BÔNUS] Encerre o container utilizando os botões [ctrl] + [c].

![ Encerrando com CTRL  + C - Exercício 14](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/dc195b67-f80f-4f36-b980-b5bd79429f5c)