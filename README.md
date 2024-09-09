# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command


const autorRepo = AppDataSource.getRepository(Autor);
const trabalhoRepo = AppDataSource.getRepository(Trabalho);

## API da Feciaq
Com base no projeto exemplo02 do repositório da disciplina, implemente todos os endpoints necessários para que todos os testes do projeto passem.

Os seguintes endpoints devem ser implementados:

## POST /trabalhos -> deve receber no corpo da requisição um objeto JSON com os dados abaixo e então salvar o objeto no banco de dados caso os dados estejam válidos:
- titulo: string (obrigatório, ao menos um caractere)
- area: string (obrigatório, um dentre os seguintes valores: CET, CAE, CBS, CHCSA, MDIS)
- autores[]: array de autores contendo obrigatoriamente de 2 a 7 elementos, sendo que cada objeto de autor deve conter os seguintes dados:
  - nome: string (obrigatório, ao menos um caractere)
  - genero: string (obrigatório, um dentre os valores M e F)
  - cpf: string (obrigatório, contendo exatamente 11 caracteres)
## GET /trabalhos/area/:codArea -> deve receber o path param :codArea - o qual representa uma dentre as 5 áreas de conhecimento supracitadas - e então retornar todos os trabalhos da área requisitada.
Os requisitos de validação de cada endpoint estão expressos nos testes contidos no projeto.

Crie um repositório a parte no Github para o seu projeto e então submeta exclusivamente aqui pelo Moodle o link do repositório até as 23:59 do dia 11/09/2024. Esta avaliação deve ser realizada individualmente e vale até 10 pontos.
