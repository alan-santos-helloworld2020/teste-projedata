Rio de janeiro 05 de Agosto 2022

Sistema de teste técnico

* Versão do Java 11
* Banco de Dados Mysql
* Framework Spring boot


1 - Rodando o Back-End (pasta back)

a) configure as credências de conexão no arquivo application.properties

b) na raiz do projeto abra o terminal e rode o comando ./mvnw spring-boot:run

nota: isto irá baixar as dependências e iniciar o servidor porta 8080


1 - Rodando o Front-End (pasta front)

a) na raiz do projeto rode o comando npm install
b) após baixar as dependências rode o comando npm run dev

nota: o servidor do front end irá iniciar na port 5173


Testando

Cadastre um produto e uma matéria-prima
adicione uma lista de matérias-primas na pagina produtos
clickando no botão laranja adicionar , um modal com a lista de matérias-primas cadastradas se abrirá basta adicionar.
Vá para a página “Detalhes” e veja um card contendo o produto e as suas matérias-primas   
 




