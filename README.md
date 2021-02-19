# Biblioteca em Nextjs

![open-book](https://user-images.githubusercontent.com/59545660/108439778-afe5c600-7230-11eb-8a65-29b6624491bf.png)

## Funcionalidades:

- Criar usuário
- Logar com id
- Visualizar varios livros e um livro
- Cadastrar Livro
- Editar e Deletar um livro

# Ferramentas:

- Next + Typescript
- Eslint + Prettier
- Styled components
- Cypress
- Postgres SQL
- Prisma

# Aprendizados

O foco do projeto foi aprender a como utilizar o Prisma e principalmente o Cypress
Tanto no desenvolvimento Frontend quanto nas rotas de API do Next

# Para Rodar

rode um `git clone https://github.com/thallesyam/library-next.git`

`Com o docker`
---
- Rodar um `docker push thallesyam/thallesyam:latest` para baixar a imagem
- docker run --name `escolher o nome` -p 5432:5432 -e POSTGRES_PASSWORD=`escolher a senha` -d thallesyam/thallesyam
- Para seguir a padronização crie uma database de nome `Library` mas se preferir alterar não tem problema
- Crie um arquivo .env dentro dele coloque sua DATABASE_URI assim como no .env.example
(estamos chegando lá prometo kkkk 😵)
- Rode um `yarn` ou `npm i`
- Rode um `npx prisma migrate dev --name init --preview-feature` para criar schemas
- Rode um `yarn dev` ou `npm run dev`

---

`Sem o docker`
---
- Crie uma database no postgres 
- Para seguir a padronização crie uma database de nome `Library` mas se preferir alterar não tem problema
- Crie um arquivo .env dentro dele coloque sua DATABASE_URI assim como no .env.example
- Rode um `yarn` ou `npm i`
- npx prisma migrate dev --name init --preview-feature 
- Rode um `yarn dev` ou `npm run dev`
---
