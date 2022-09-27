Neste projeto foi desenvolvido uma API para a produção de um blog. Foi criada um ApiRestfull em Node.js,
utilizando o pacote sequelize para fazer o CRUD. Também é trabalhado a criação e a validação de um token utilizando o JWT, bem como foi trabalhada a relação user e post, de modo que apenas o usuário que criou aquele post poderá alterá-lo ou deletá-lo. A api é ligada a um banco de dados MySql e toda a aplicação é rodada dentro de um container docker.


Para acessar este projeto, clone o repositório e siga os passos abaixo: 
 - git clone git@github.com:FernandaGrein/BackEnd-project-Blogs-Api.git
 - cd BackEnd-project-Blogs-Api
 - docker-compose up -d --build
 - docker exec -it store_manager bash
 - npm install
 - acesse o Workbench e configure-o conforme as informações do docker-compose.yml
 - npx sequelize-cli db:drop
 - npx sequelize-cli db:create && npx sequelize-cli db:migrate (para criar o banco de dados)
 - npx sequelize-cli db:seed:all (para popular o banco de dados)
 - npm run start ou npm run debug

Foram cumpridos os seguintes requisitos: 
 - Foram criadas as migrations e as models das respectivas tabelas, incluindo as associações entre elas.
 - criado um endPoint de login, que cria um token para cada usuário logado
 - Foi criado um endPoint para cadastrar um novo usuário que gera um novo token para um novo usuário
 - Foram criados endPoints para buscar os usuários, os posts, e as categorias, todos vazendo a validação do token do usuário.
 - Foram criados endPoints que criam novas categorias e novos posts, e ambos com a validação do token
 - Foram criados endPoinst que editam e deletam os posts, bem como um endpoint que deleta um usuário
 - Por fim, foi criado um endpoint de busca de um post por um termo.
