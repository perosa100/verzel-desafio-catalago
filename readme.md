Para iniciar o backend primeiro é necessario
instalar o postgresSql 13 e criar um banco de dados com nome verzel.
Os mesmo username e password usado para configurar o banco de dados deve ser usando no arquivo ormconfig.json apenas essas três linha é necessario alterar a menos que você tenha configura a porta do banco de dados em outra, que não seja a padrão.

ao criar o banco de dados é necessario rodar uma sql em suas query:

create extension if not exists "uuid-ossp";

para habilitar o uuid gerador de id.

"username": "seuusername",
"password": "seupassword",
"database": "verzel",

Após instalar banco de dados e alterar os dados no ormconfig.json é necessario na raiz do projeto rodar o comando yarn, para instalar as depedencias do projeto.

Após instalar todas as dependecias pode rodar comando: yarn typeorm migration:run

{
"name": "Patrick Perosa",
"email": "pp@pp.com",
"password":"123123",
"roles":""
}

yarn typeorm migration:create -n

yarn typeorm migration:run

yarn jest --init

set NODE_ENV=production&&npm start

Teste Prático Fulistack Júnior

A proposta desse teste é validar os conhecimentos técnicos em desenvolvimento frontend, lógica de
programação e entendimento da demanda do candidato.

Proposta de solução:
Desenvolver um sistema com um catálogo de aulas por módulo.

Tecnologias obrigatórias:

- Node;js (Backend): Foi utilizado Node + typeorm

- (Reactjs ou Angular JS + HTML, CSS, JS (Frontend)) ou React Native + StylesSheetis; Foi Utilizado React + styled-components

- Banco de dados pode ser qualquer distribuição desde que envie no README como e qual utilizar para avaliar; O utilizdo foi PostgresSql

Requisitos:

- Home page pública exibindo os módulos e conforme seleciona o módulo exibe as aulas do módulo (similar a
  página: hitps:/Awww.devaria.com.br/conteudo-das-gulas);

[x] - Os módulos devem estar ordenados por ordem alfabética assim como as aulas;

[x] - Os módulos devem contabilizar o total de aulas referente

[x] - Para cadastro das aulas e módulos deverá haver um login administrativo (o cadastro de usuários é diferencial não
obrigatório);

[x] - As páginas de cadastros devem estar seguras e só acessadas após login autenticado;

[x] - Todas as requisições privadas precisam de um token válido gerado no login para funcionamento da requisição;

[x] - O Cadastro de aulas deverá ter listagem, criação. edição e deleção de registros;

[x] - O atributos obrigatórios para a aula são: Id, Nome, Módulo e data que acontecerá a aula:

[x] - O Cadastro de módulos deverá ter listagem, criação, edição e deleção de registros:

[x] - O atributos obrigatórios para o módulo são: Id e Nome;

[x] - O Backend deverá ser uma API Rest;

[x] - Todos os dados devem ser persistidos no banco de dados;

yarn typeorm migration:generate -- -n Relations1
