# Desafio: Warren Transactions (Web)
Esse projeto foi realizado para o desafio da warren e pode ser [acessado aqui](https://wb-transactions.herokuapp.com/). 

<img src="https://raw.githubusercontent.com/RicardoFredes/wb-transactions/main/public/printWarren.png" />

Link para descrição do desafio [aqui](https://github.com/warrenbrasil/desafio-warren-web).

## Tecnologias
As tecnologias escolhidas para executar esse desafio foram:

- Node 12.x
- React
- Sass
- NextJs
- TypeScript
- Jest
- Cypress

Embora a stack da warren seja VueJs, escolhi usar **React** por ser a tecnologia que mais domino e é a que uso no dia a dia. Já utilizei Angular JS e comecei a estudar VueJs após começar o desafio, mas, devido ao prazo de uma semana, preferi não arriscar implementar o framework.

O NextJs tem o mesmo propósito do NuxtJs, além de já suportar o uso do TypeScript e propor uma organização para o projeto, que é de fácil entendimento. Entre outras vantagens, como a de otimização da build.

TypeScript é uma tecnologia essencial para a qualidade e consistência de código e eliminar testes de timpagem. Sempre que é possível, a uso em todos os projetos.

Utilizei Sass por ser o pré-processador mais popular, além usá-lo no dia a dia, também já fiz uso do Stylus e do Less.

Para os testes usei o Jest e o Cypress, o primeiro para os testes unitários e o segundo para os testes end to end. Como o front-end acaba mudando com mais frequência que o back-end, os testes foram aplicados nas helpers, pois essas sim devem ser 100% confiáveis. Já para testar a regra de negócio e o funcionamento geral, foi usado o teste e2e.

<img src="https://raw.githubusercontent.com/RicardoFredes/wb-transactions/main/public/unitTests.png" />

<img src="https://raw.githubusercontent.com/RicardoFredes/wb-transactions/main/public/e2eTests.png" />

Por fim, utilizei o mínimo de libs externas possíveis, mesmo quando trabalho em projetos mais complexos, sempre tento usar poucas dependências.

## UX
Como base para a construção das telas, utilizei as referências fornecidas na descrição do teste alinhando os meus conhecimentos de Design e UX. 
- Tive uma preocupação com a funcionalidade dos filtros (filtro por título e status), que podem ser usados juntos.
- Agrupei as transações visualmente por data na tabela (separando-as com um fio).
- Criei estados informativos para os momentos de uso da aplicação: carregamento de conteúdo, erro ao carregar, usuário não possui transações e filtro não encontrou nada.
- A tecla tab pode ser usada para navegar entre os elementos da tela.
- Responsividade.

## Possíveis questionamentos

### Os componentes foram pensados para serem reutilizados?
Sim, a idea é a mesma que aplico em projetos no dia a dia, construir componentes com interfaces de fácil utilização e com regras que permitam a reutilização em outros cenários. Um exemplo é o componente `Table`, ele é altamente replicável e pode ser personalizado ao receber um componente customizado para tratar com cada linha da tabela.

### Os componentes foram codados do zero ou são de outros projetos seus?
Apesar de isso ser uma prática bem comum, não. Todos os componentes forma codados do zero para esse projeto, tendo base muitas soluções que eu já usei em algum momento da vida.

### Por quê não usar a api para pegar individualmente a transação para mostrar a modal?
```
[GET]: https://warren-transactions-api.herokuapp.com/api/transactions/:id
```
Não vi a necessidade, já que a requisão das transactions traz as todas as informações necessárias.
```
[GET]: https://warren-transactions-api.herokuapp.com/api/transactions/:id
```

## Como rodar projeto?

### Download
Baixe o projeto usando git

Via https:
```bash
git clone https://github.com/RicardoFredes/wb-transactions.git
cd wb-transactions
```

ou

Via ssh:
```bash
git clone git@github.com:RicardoFredes/wb-transactions.git
cd wb-transactions
```

### Dependências globais
Você precisa ter o [Node.js >= 12.x](https://nodejs.org/) instalado, preferencialmente a partir da versão 12, além de ter instalado o `npm` ou o `yarn`.

Rode o comando:

```bash
npm install
```

ou

```bash
yarn install
```

### Rodando a aplicação
Em ambiente de desevolvimento rode o comando:

```bash
yarn dev
```
Esse comando abrirá um seridor em [http://localhost:5000](http://localhost:5000).

### Rodando os testes

#### Testes unitários
Em ambiente de desenvolvimento rode o comando:

```bash
yarn test
```

#### Testes end to end
Em ambiente de desenvolvimento rode o comando:

```bash
yarn dev
```

com outra aba do terminar aberta, rode o comando:

```bash
yarn e2e
```

### Rodando o lint
Em ambiente de desenvolvimento rode o comando:

```bash
yarn lint
```
