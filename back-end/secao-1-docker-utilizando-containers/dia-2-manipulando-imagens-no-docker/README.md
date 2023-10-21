🚀 Exercício
Vamos usar uma imagem disponível no nosso DockerHub conhecida como “figtrybe-artify” (que gera mensagens no formato ASCII no terminal)!

A ideia é deixarmos a mensagem para o “figtrybe-artify” parametrizável. Dessa forma, conseguiremos executar o comando:

    docker container run --rm figtrybe-artify "#Go Trybers"


Crie um Dockerfile utilizando a imagem betrybe/figtrybe-artify.

Defina um ENTRYPOINT para a execução do comando.

Observe que o executável figtrybe-artify está nos caminhos "node", "app.js";
Lembre-se que com ele, diferente do CMD, o comando não poderá ser sobrescrito com o docker run, porém conseguiremos passar parâmetros ao binário e exploraremos esse recurso para poder passar a mensagem.
Utilize o CMD para definir uma mensagem padrão.


Gere uma build e execute um container baseado em sua imagem sem passar nenhum comando.


![Gere o build - Exercício 04](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/95316df7-a03e-42db-b9c5-306418b01be0)


Execute um novo container passando sua mensagem para testar. Além da mensagem você pode utilizar a opção -f Ghost para adicionar a fonte Ghost e então executar algo como docker container run figtrybe-artify -f Ghost "VQV TRYBE", para exibir a mensagem com uma nova fonte como o exemplo abaixo:
 

![Executando um novo container - Exercício 05](https://github.com/brunaLoyola/trybe-exercises/assets/51630262/d3de72f3-8eb8-443f-a8ad-d8b9bbe6756e) 