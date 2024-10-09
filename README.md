# Criando e Testando APIs com Cypress

## 🚀 Sobre o Projeto

O projeto **API Cypress AI** foi desenvolvido como uma iniciativa educacional, combinando o uso de inteligência artificial com práticas de desenvolvimento de software. Através de um prompt detalhado, a AI forneceu diretrizes essenciais para a construção da API, orientando sobre as funcionalidades necessárias e ajudando a estruturar o código inicial. Essa colaboração entre a inteligência artificial e o desenvolvimento humano não apenas acelerou o processo de criação, mas também permitiu a exploração de conceitos avançados de programação e automação de testes 

A partir dessas informações, o projeto foi estruturado e implementado, integrando tecnologias como Express.js e MongoDB. As diretrizes da AI serviram como uma boa base, permitindo que eu realizasse melhorias e personalizações adicionais para atender a requisitos específicos e boas práticas de desenvolvimento.

Essa colaboração entre a inteligência artificial e o desenvolvimento humano resultou em uma API funcional, que também inclui automação de testes com Cypress para garantir a qualidade e o desempenho dos endpoints. O resultado final é uma solução eficiente e escalável para o gerenciamento das operações de cadastro, listagem, consulta, alteração e remoção de livros. 

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express.js**: Framework para construir APIs RESTful de forma rápida e fácil.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar informações sobre os livros.
- **Mongoose**: Biblioteca para modelagem de dados que facilita a integração com o MongoDB.
- **Cypress**: Ferramenta para automação de testes de ponta a ponta, usada para testar os endpoints da API.

## 🤖 Prompt Utilizados com AI

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
# 🧪 Testando a API com Cypress
Para garantir a funcionalidade da API, foi utilizado o Cypress que permite a execução de testes em tempo real no navegador, proporcionando uma visão clara do comportamento da aplicação e facilitando a identificação de falhas. Foi utilizada a biblioteca **cypress-plugin-api**, que simplifica a criação de testes de APIs.

## 🔍 Cenários e Casos de Teste

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
  
## 🔧 Passos para Instalação

Para instalar e executar o projeto, siga os passos abaixo:

1. **Clone o Repositório**
   ```bash
   git clone https://github.com/carolprotasio/api-cypress-ai.git
2. **Navegue até o diretório do projeto**
    ```bash
    cd api-cypress-ai
3. **Instale as dependências**
   ```bash
   npm install
4. **Inicie a API**
   ```bash
   npm start
5. **Execute os Testes com Cypres**
   ```bash
   npx cypress open
     
    
## ✅ Conclusão
O projeto **API Cypress AI** foi desenvolvida com o objetivo de explorar a interação entre inteligência artificial e desenvolvimento de software. Utilizando um prompt fornecido pela AI, consegui definir claramente as funcionalidades necessárias para a API, o que acelerou o processo de construção e permitiu uma abordagem mais estruturada.
Este projeto serve como um exemplo de como a inteligência artificial pode ser uma ferramenta poderosa no aprendizado e na prática de programação, permitindo a criação de soluções de qualidade. O resultado final é uma API funcional que atende às necessidades de gerenciamento de informações sobre livros, pronta para ser expandida e aprimorada no futuro.
Agradeço à [QAx](https://qax.com.br/) pela orientação e pelos recursos fornecidos durante a masterclass, que foram fundamentais para o desenvolvimento deste projeto.   




