## Demo

- Para experimentar o exemplo ao vivo visite https://tender-aryabhata-73ced3.netlify.app/

## Instalação

- Baixe o repositório através do GitHub

`git clone https://github.com/gabrielszcosta/persona.git`

### `Instalando o servidor`

- Após clonar o repositório, entre no diretório `server`.

- Uma vez no diretório, no terminal, digite `npm install` ou `yarn` para baixar as dependências.

### `Instalando o banco de dados`

- O servidor já vem com um banco SQLite, mas se quiser criar um novo, basta entrar no diretorio `server/src/database` e excluir o arquivo `bd.sqlite`. Após exluir o arquivo, execute os seguintes comandos no terminal:

<pre data-reactid="725">
    <code data-reactid="726">
        $ npm install knex -g
    </code>
</pre>

<pre data-reactid="725">
    <code data-reactid="726">
        $ knex migrate:latest
    </code>
</pre>

- Após a realização desses comando um novo banco de dados será criado.

### `Instalando a interface web`

- Após clonar o repositório, entre no diretório `web`.

- Uma vez no diretório, no terminal, digite `npm install` ou `yarn` para baixar as dependências.

## Executando o servidor

- Concluindo a atualização dos pacotes, execute o comando no terminal `npm start` ou `yarn start` dentro do diretorio server, após isso o servidor estará disponivel em http://localhost:3333.

- Para testar, acesse http://localhost:3333/users e serão listados os usuários cadastrados no banco de dados.

## Executando a interface web

- Concluindo a atualização dos pacotes, execute o comando no terminal `npm start` ou `yarn start` dentro do diretorio web, após isso a página estará disponivel em http://localhost:3000.
