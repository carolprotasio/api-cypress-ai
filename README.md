

## Sobre o Projeto

O projeto **API Cypress AI** foi desenvolvido como uma iniciativa educacional, combinando o uso de inteligência artificial com práticas de desenvolvimento de software. Através de um prompt detalhado, a AI forneceu diretrizes essenciais para a construção da API, orientando sobre as funcionalidades necessárias e ajudando a estruturar o código inicial. Essa colaboração entre a inteligência artificial e o desenvolvimento humano não apenas acelerou o processo de criação, mas também permitiu a exploração de conceitos avançados de programação e automação de testes 

A partir dessas informações, o projeto foi estruturado e implementado, integrando tecnologias como Express.js e MongoDB. As diretrizes da AI serviram como uma boa base, permitindo que eu realizasse melhorias e personalizações adicionais para atender a requisitos específicos e boas práticas de desenvolvimento.

Essa colaboração entre a inteligência artificial e o desenvolvimento humano resultou em uma API funcional, que também inclui automação de testes com Cypress para garantir a qualidade e o desempenho dos endpoints. O resultado final é uma solução eficiente e escalável para o gerenciamento das operações de cadastro, listagem, consulta, alteração e remoção de livros. 

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express.js**: Framework para construir APIs RESTful de forma rápida e fácil.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar informações sobre os livros.
- **Mongoose**: Biblioteca para modelagem de dados que facilita a integração com o MongoDB.
- **Cypress**: Ferramenta para automação de testes de ponta a ponta, usada para testar os endpoints da API.

## Prompt Utilizados com AI

O prompt utilizado para desenvolver este projeto foi o seguinte:
```
# Crie uma API RESTful em Node.js para um sistema de cadastro de livros. A API deve incluir as seguintes funcionalidades:

1. Cadastro de livros: Permita que os usuários cadastrem livros informando título, autor, editora, ano de publicação e número de páginas. Todos os campos são obrigatórios.
2. Listagem de livros: Implemente um endpoint para listar todos os livros cadastrados, retornando todas as informações dos livros.
3. Consulta de livro por ID: Crie um endpoint que permita consultar um livro específico usando seu ID.
4. Alteração livro por ID: Crie um endpoint que permita alterar informações de um livro específico usando seu ID.
5. Remoção de livro: Implemente um endpoint para deletar um livro do sistema utilizando seu ID.
6. Banco de Dados: Utilize o MongoDB como banco de dados.

# Requisitos técnicos:
- Utilize Express.js para gerenciar as rotas da API.
- Use Mongoose para a modelagem dos dados e integração com o MongoDB.
- Inclua tratamento de erros e validações adequadas para todos os endpoints.
- Adicione comentários no código para explicar as principais partes da implementação.

```
# Testando a API com Cypress
Para garantir a funcionalidade da API, foi utilizado o Cypress que permite a execução de testes em tempo real no navegador, proporcionando uma visão clara do comportamento da aplicação e facilitando a identificação de falhas. Foi utilizada a biblioteca **cypress-plugin-api**, que simplifica a criação de testes de APIs.

## Cenários e Casos de Teste

### Cenários de Teste

1. **Cadastro de Livro**
   - **Caso de Teste 1**: Sucesso no cadastro com todos os campos preenchidos corretamente.
   - **Caso de Teste 2**: Falha no cadastro quando um ou mais campos obrigatórios estão vazios.

2. **Listagem de Livros**
   - **Caso de Teste 1**: Retornar todos os livros cadastrados.
   - **Caso de Teste 2**: Retornar uma lista vazia quando nenhum livro estiver cadastrado.

3. **Consulta de Livro por ID**
   - **Caso de Teste 1**: Sucesso ao consultar um livro existente pelo ID.
   - **Caso de Teste 2**: Falha ao consultar um livro inexistente.
     
4. **Alteração de Livro por ID**
   - **Caso de Teste 1**: Sucesso ao alterar as informações de um livro existente pelo ID.
   - **Caso de Teste 2**: Falha ao tentar alterar um livro que não existe, retornando um erro adequado.

5. **Remoção de Livro**
   - **Caso de Teste 1**: Sucesso ao remover um livro existente pelo ID.
   - **Caso de Teste 2**: Falha ao tentar remover um livro que não existe.

## Conclusão

O projeto **API Cypress AI** é uma solução completa para o gerenciamento de um sistema de cadastro de livros, incorporando boas práticas de desenvolvimento, como validações e tratamento de erros. A automação de testes com o Cypress garante que a API funcione conforme o esperado, proporcionando confiança na implementação. Este repositório serve como um ponto de partida para desenvolvedores que desejam aprender sobre a criação de APIs RESTful e a integração com ferramentas de teste.

Para mais informações e instruções de uso, consulte a documentação no repositório.



